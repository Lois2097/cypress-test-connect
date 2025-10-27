import { formatOptions } from "../utilities/formattedDateUtils";
import { Before } from "@badeball/cypress-cucumber-preprocessor";


let testTitle = ''
let featureName = ''
let testStartTime: number;



Before(function () {
    testTitle = this.test?.title ?? '';
    featureName = this.test?.parent?.title ?? '';
});

beforeEach(function () {
    testStartTime = Date.now();
});

afterEach(function () {
    const testEndTime = Date.now();

    if (this.currentTest?.state === 'failed') {
        cy.addFailedOutsideAssertion();
    }


    cy.getAssertionCount().then((count) => {
        const skipped = this.currentTest?.state === 'failed' ? count[3] : count[3];

        const formattedStartTime = new Date(testStartTime).toLocaleString("en-US", formatOptions);
        const formattedEndTime = new Date(testEndTime).toLocaleString("en-US", formatOptions);

        const assertionData = {
            feature: featureName,
            test: testTitle,
            totalAssertions: count[1],
            passedAssertions: count[2],
            skippedAssertions: Math.max(0, skipped),
            failedAssertions: count[4],
            startTime: formattedStartTime,
            endTime: formattedEndTime
        };

        cy.task('writeAssertionData', {
            filePath: 'cypress/tmp/assertions.json',
            data: assertionData,
        });
    });
    cy.resetAssertionCount();
});