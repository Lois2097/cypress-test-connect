import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import { Locators } from '../../../pages/module/actions/sample'
import { isNumber } from 'cypress/types/lodash'



Given('I visit the FMS page', () => {
    cy.visit('https://omni.metrobank.ph/dev/moses/cc/signin')
})

When('I login as IDD user', () => {
    cy.get('[name="userid"]').type('2023001')
    cy.get('[name="password"]').type('password')
    cy.get('button[type="submit"]').click()
})

Then('I should be redirected to Markets Sales Dashboard', () => {
    cy.contains('Markets Sales')
})

Then('I check the {string} locators as {string}', (module: string, user: string) => {
    switch (module) {
        case "dashBoard":
            cy.get('[name="userid"]').type('devtosd')
            cy.get('[name="password"]').type('password')
            cy.get('button[type="submit"]').click()
            Locators.checkLocatorsExist(module)
            break;

        default:
            Locators.checkLocatorsExist(module)
            break;
    }

})

