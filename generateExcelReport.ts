import fs from "fs";
import path from "path";
import { formatOptions } from "./cypress/support/utilities/formattedDateUtils"
import ExcelJS from "exceljs";


const reportsDir = "cypress/tmp/reports";
const excelReportDir = "cypress/reports";
const assertionDataPath = "cypress/tmp/assertions.json";


const getFilesInDirectory = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFilesInDirectory(filePath, fileList);
    } else if (path.extname(file) === ".json") {
      fileList.push(filePath);
    }
  });
  return fileList;
};

const generateFileNamePostfix = (): string => {
  const myDate = new Date();
  const unixTimestamp = Math.floor(myDate.getTime() / 1000);
  const dateNow = myDate.toLocaleDateString().replace(/\//g, "-");
  return `${dateNow}-${unixTimestamp}`;
};

const generatePrefix = (dir: string): string => path.basename(dir);

const processSuite = (
  suite: any,
  data: any[],
  result: any,
  assertionData: any[]
) => {
  const fileName = result.file.split("\\").join("/");
  const ticketIDRegex = /\[WMTC-\d+\]/;

  suite.tests.forEach((test: any) => {
    const testTitle = test.title;
    const describeTitle = suite.title;
    const testStatus =
      test.state === "pending"
        ? "SKIPPED"
        : test.state === "skipped"
          ? "NOT EXECUTED"
          : test.state.toUpperCase();
    const duration = test.duration;
    const errorMessage = test.err ? test.err.message : "";
    const ticketNum = testTitle.match(ticketIDRegex)?.[0] || "";

    const assertion = assertionData.find(
      (a: any) => a.feature === describeTitle && a.test === testTitle
    );


    data.push({
      File: fileName,
      "Ticket ID": ticketNum,
      "Scenarios (Test Cases)": testTitle,
      Feature: describeTitle,
      "Test Status": testStatus,
      "Duration (ms)": duration,
      "Start Time": assertion?.startTime || "",
      "End Time": assertion?.endTime || "",
      "Error Message": errorMessage,
    });
  });

  suite.suites.forEach((nestedSuite: any) =>
    processSuite(nestedSuite, data, result, assertionData)
  );
};

const createTestCasesSheet = async (
  files: string[],
  workbook: ExcelJS.Workbook
) => {
  const worksheet = workbook.addWorksheet("Test Cases");
  const combinedData: any[] = [];
  const assertionData = fs.existsSync(assertionDataPath)
    ? JSON.parse(fs.readFileSync(assertionDataPath, "utf8"))
    : [];


  files.forEach((file) => {
    const fileData = JSON.parse(fs.readFileSync(file, "utf8"));
    fileData.results.forEach((result: any) => {
      if (result.suites) {
        processSuite(result.suites[0], combinedData, result, assertionData);
      }
    });
  });

  if (combinedData.length === 0) return;

  worksheet.columns = Object.keys(combinedData[0]).map((key) => {
    const maxLength = Math.max(
      key.length,
      ...combinedData.map((row) => String(row[key] ?? "").length)
    );
    return {
      header: key,
      key,
      width: maxLength + 2
    };
  });

  combinedData.forEach((row, index) => {
    const excelRow = worksheet.addRow(row);
    if (index === 0) {
      excelRow.font = { bold: false };
    }
  });
};

const createReportSummarySheet = async (files: string[], workbook: ExcelJS.Workbook) => {
  const worksheet = workbook.addWorksheet("Report Summary");
  const assertionData = fs.existsSync(assertionDataPath)
    ? JSON.parse(fs.readFileSync(assertionDataPath, "utf8"))
    : [];

  const data: any[] = [];

  files.forEach((file) => {
    const fileData = JSON.parse(fs.readFileSync(file, "utf8"));
    if (fileData.results[0].suites) {
      const moduleDescribeName = fileData.results[0].suites[0].title;

      const featureAssertions = assertionData.filter((item: any) => item.feature === moduleDescribeName);
      const totalAssertions = featureAssertions.reduce((sum: number, item: any) => sum + item.totalAssertions, 0);
      const passedAssertions = featureAssertions.reduce((sum: number, item: any) => sum + item.passedAssertions, 0);
      const skippedAssertions = featureAssertions.reduce((sum: number, item: any) => sum + item.skippedAssertions, 0);
      const failedAssertions = featureAssertions.reduce((sum: number, item: any) => sum + item.failedAssertions, 0);

      data.push({
        Feature: moduleDescribeName,
        "No. Of Scenarios (Test Case)": fileData.stats.testsRegistered,
        Passed: fileData.stats.passes,
        Failed: fileData.stats.testsRegistered - (fileData.stats.passes + fileData.stats.pending + fileData.stats.skipped),
        Skipped: fileData.stats.pending,
        "Not Executed": fileData.stats.skipped,
        "Total Assertions": totalAssertions,
        "Passed Assertions": passedAssertions,
        "Skipped Assertions": skippedAssertions,
        "Failed Assertions": failedAssertions,
        "Duration (ms)": fileData.stats.duration,
        "Passing Percentage": parseFloat((Math.round(fileData.stats.passPercent * 100) / 100).toFixed(2)),
        "Start Time of Execution": new Date(fileData.stats.start).toLocaleString("en-PH", formatOptions),
        "End Time of Execution": new Date(fileData.stats.end).toLocaleString("en-PH", formatOptions)
      });
    }
  });

  // Add summary row
  if (data.length > 0) {
    const summary = {
      Feature: "TOTAL",
      "No. Of Scenarios (Test Case)": data.reduce((sum, row) => sum + row["No. Of Scenarios (Test Case)"], 0),
      Passed: data.reduce((sum, row) => sum + row.Passed, 0),
      Failed: data.reduce((sum, row) => sum + row.Failed, 0),
      Skipped: data.reduce((sum, row) => sum + row.Skipped, 0),
      "Not Executed": data.reduce((sum, row) => sum + row["Not Executed"], 0),
      "Total Assertions": data.reduce((sum, row) => sum + row["Total Assertions"], 0),
      "Passed Assertions": data.reduce((sum, row) => sum + row["Passed Assertions"], 0),
      "Skipped Assertions": data.reduce((sum, row) => sum + row["Skipped Assertions"], 0),
      "Failed Assertions": data.reduce((sum, row) => sum + row["Failed Assertions"], 0),
      "Duration (ms)": data.reduce((sum, row) => sum + row["Duration (ms)"], 0),
      "Passing Percentage": parseFloat((data.reduce((sum, row) => sum + row["Passing Percentage"], 0) / data.length).toFixed(2))
    };
    data.push(summary);
  }

  worksheet.columns = Object.keys(data[0]).map((key) => {
    const maxLength = Math.max(
      key.length,
      ...data.map((row) => String(row[key] ?? "").length)
    );
    return {
      header: key,
      key,
      width: maxLength + 2
    };
  });

  data.forEach((row, index) => {
    const excelRow = worksheet.addRow(row);
    if (index === 0 || row.Feature === "TOTAL") {
      excelRow.font = { bold: true };
    }
  });
};

const generateExcelReport = async () => {
  const dir = "mocha";
  const dirPath = path.join(reportsDir, dir);
  const files = getFilesInDirectory(dirPath);
  const existingFiles = fs.readdirSync(dirPath);
  const hasXlsx = existingFiles.some((file) => path.extname(file) === ".xlsx");

  if (!hasXlsx) {
    const workbook = new ExcelJS.Workbook();
    await createReportSummarySheet(files, workbook);
    await createTestCasesSheet(files, workbook);

    const reportFileName = `${generatePrefix(excelReportDir)}-report-${generateFileNamePostfix()}.xlsx`;
    await workbook.xlsx.writeFile(path.join(excelReportDir, reportFileName));
    console.log(`Excel report generated: ${reportFileName}`);
  }
};

generateExcelReport();
