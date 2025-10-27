
import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import { Loader, locators } from '../../pages/globalMethods'
import * as dashboardPages from '../../pages/module/actions/dashboard'
import { MnemonicDashboardPage } from '../../pages/module/actions/dashboard'
import { NewTransactionModulePage } from '../../pages/module/actions/newTransactionModule'
import * as viewTransactionActions from '../../pages/module/actions/viewTransaction'

const loader = new Loader()
const Locators = new locators()

Given('I am on {string} page', (page: string) => {
  loader.checkLoading()
  cy.contains('page').should('exist')
})

When('I login as {string}', (user: string) => {
  loader.checkLoading()
  cy.get('[name="userid"]').type(user)
  cy.get('[name="password"]').type('password')
  cy.get('button[type="submit"]').click()
})

Then('I check the {string} locators', (locatorKey: string) => {
  loader.checkLoading()
  switch (locatorKey) {
    case 'CustomerMaintenance':
      MnemonicDashboardPage.customerMaintenanceText().click()
      break;
    case 'NewTransaction':
      dashboardPages.TMakerDashboardPage.clickNewTransactionDropdown()
      dashboardPages.TMakerDashboardPage.clickRetailOptions()
      Locators.checker('NewTransaction')
      Locators.checker('newRetail')
      NewTransactionModulePage.productRadioButton().click()
      NewTransactionModulePage.productTypeDropdown().click()
      Locators.checker('products')
      NewTransactionModulePage.assetSwapOption().click()
      cy.wait(2000)
      NewTransactionModulePage.mnemonicInput().type(`DEVBAURE9{enter}`)
      cy.wait(2000)
      Locators.checker('afterAction')
      Locators.checker('afterActionRetail')
      NewTransactionModulePage.clickPreviousPageButton()
      dashboardPages.TMakerDashboardPage.clickNewTransactionDropdown()
      dashboardPages.TMakerDashboardPage.clickCorporateOptions()
      Locators.checker('NewTransaction')
      Locators.checker('newCorporate')
      NewTransactionModulePage.productTypeDropdown().click()
      Locators.checker('products')
      NewTransactionModulePage.assetSwapOption().click()
      cy.wait(2000)
      NewTransactionModulePage.mnemonicInput().type(`DEVBAUC7{enter}`)
      cy.wait(2000)
      Locators.checker('afterAction')
      Locators.checker('afterActionCorp')
      break;
    case 'viewTransaction':
      // dashboardPages.TransactionDashboardPage.clickViewTransactionTableRow('1').click()
      cy.visit(`https://omni.metrobank.ph/dev/moses/cc/transaction/view/EPFXT-81C77F6A-093025`)
      Locators.checker('viewTransaction')
      Locators.checker('transactionMaker')
      viewTransactionActions.TMViewTransactionPage.clickCancelDocumentsButton()
      Locators.checker('transactionMakerCancelModal')
      break;
    case 'viewTransactionHistory':
      // dashboardPages.TransactionDashboardPage.clickViewTransactionTableRow('1').click()
      cy.visit(`https://omni.metrobank.ph/dev/moses/cc/transaction/view/EPFXT-81C77F6A-093025`)
      viewTransactionActions.TViewTransactionPage.clickTransactionHistoryButton()
      Locators.checker('viewTransactionHistory')
      break;
    default:
      Locators.checker(locatorKey)
      break;
  }
});



