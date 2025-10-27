import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import { Button, Loader } from '../../../../pages/globalMethods'
import { trxn } from '../../../../pages/viewProcessing/completeTransaction'
import { TCheckerDashboard } from '../../../../locators/dashboard'
import { parseAssertions } from '../../../../support/utilities/assertionUtils'

const loader = new Loader()
const Trxn = new trxn()

// TO BE CHANGED WHEN LOCATORS ARE CONSOLIDATED

When('I click {string} on View for Processing sidebar button', (sidebarModule: string, dataTable: DataTable) => {
    loader.checkLoading()
    cy.get('span[class="jss320 jss330 jss303"]')
    cy.trackMultipleAssertion(cy.get('span[class="jss320 jss330 jss303"]'), parseAssertions(dataTable));


    cy.contains('span', ' View For Processing').click()
    loader.checkLoading()
    cy.contains('span', sidebarModule).click()
})

Then('I should be able to see for processing transactions', () => {
    loader.checkLoading()
    cy.get('table').should('be.visible')
})

Then('I {string} complete {string} transaction under {string} mnemonic with reference {string} by {string}', (action: string, count: number, mnemonic: string, reference: string, maker: string) => {
    loader.checkLoading()
    Trxn.completeTransaction(action, mnemonic, count, reference, maker)
})


