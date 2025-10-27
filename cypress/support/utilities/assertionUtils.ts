// cypress/support/utils/assertionUtils.ts

import { DataTable } from '@badeball/cypress-cucumber-preprocessor';

export function parseAssertions(dataTable: DataTable): Array<[string, any?, any?]> {
    return dataTable.rows().map((row: string[]) => {
        const [assertion, value1, value2] = row;
        if (value2 !== undefined) {
            return [assertion, value1, value2];
        } else if (value1 !== undefined && value1 !== '') {
            return [assertion, value1];
        } else {
            return [assertion];
        }
    });
}