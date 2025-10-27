const XLSX = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = XLSX.readFile('POMS.xlsx');

// Define the column letters
const keyCol1Letter = 'C'; // e.g., key1
const keyCol2Letter = 'D'; // e.g., key2
const valueColLetter = 'G'; // e.g., value

let jsContent = '';

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const range = XLSX.utils.decode_range(sheet['!ref']);
  const sheetData = {};

  for (let rowNum = range.s.r + 1; rowNum <= range.e.r; rowNum++) { // skip header row
    const key1Cell = sheet[`${keyCol1Letter}${rowNum + 1}`];
    const key2Cell = sheet[`${keyCol2Letter}${rowNum + 1}`];
    const valueCell = sheet[`${valueColLetter}${rowNum + 1}`];

    const key1 = key1Cell ? key1Cell.v : undefined;
    const key2 = key2Cell ? key2Cell.v : undefined;
    const value = valueCell ? valueCell.v : undefined;

    if (key1 !== undefined && key2 !== undefined && value !== undefined) {
      const formattedKey1 = String(key1).toLowerCase().replace(/\s+/g, '').replace('-', '');
      const formattedKey2 = String(key2).charAt(0).toUpperCase() + String(key2).slice(1).toLowerCase().replace(/\s+/g, '');
      const combinedKey = `${formattedKey1}${formattedKey2}`;
      sheetData[combinedKey] = value;
    }
  }

  // Create a valid JS variable name from sheet name
  const exportName = sheetName.replace(/\s+/g, '_').replace(/[^\w]/g, '');
  jsContent += `export const ${exportName} = {\n`;
  Object.entries(sheetData).forEach(([key, value]) => {
    jsContent += `  ${key}: ${JSON.stringify(value)},\n`;
  });
  jsContent += `};\n\n`;
});

// Save to JS file
fs.writeFileSync('POMS.ts', jsContent);
console.log('✅ JavaScript file created with separate exports per sheet: POMS.js');
