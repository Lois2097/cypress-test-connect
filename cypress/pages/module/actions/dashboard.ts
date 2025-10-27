import { commonDashboard, MnemonicDashboard, TransactionDashboard } from '../../../locators/dashboard'
import { TMakerDashboard } from '../../../locators/dashboard'

export const MnemonicDashboardPage = {
  customerMaintenanceImage: () => cy.get(MnemonicDashboard.customerMaintenanceImage),
  viewMnemonicImage: () => cy.get(MnemonicDashboard.viewMnemonicImage),
  reportsImage: () => cy.get(MnemonicDashboard.reportsImage),
  customersImage: () => cy.get(MnemonicDashboard.customersImage),
  customerMaintenanceText: () => cy.get(`[${MnemonicDashboard.customerMaintenanceText}]`),
  viewMnemonicText: () => cy.get(MnemonicDashboard.viewMnemonicText),
  reportsText: () => cy.get(MnemonicDashboard.reportsText),
  customersText: () => cy.get(MnemonicDashboard.customersText),

  extractButtonText: () => cy.get(MnemonicDashboard.extractButtonText),
  //extractButtonButton: () => cy.get(MnemonicDashboard.extractButtonButton),
  dateUploadedTableData: (id: string) => cy.get(`${MnemonicDashboard.dateUploadedTableData}${id}`),
  activationDateTableData: (id: string) => cy.get(`${MnemonicDashboard.activationDateTableData}${id}`),
  treasuryOptionsTitle: () => cy.get(MnemonicDashboard.treasuryOperationsTitle),
  //clientMmnemonicTable: () => cy.get(MnemonicDashboard.clientMmnemonicTable),
  dateUploadedTableHeader: () => cy.get(MnemonicDashboard.dateUploadedTableHeader),
  activationDateTableHeader: () => cy.get(MnemonicDashboard.activationDateTableHeader),
  clientMnemonicTableRow: (id: string) => cy.get(`${MnemonicDashboard.clientMnemonicTableRow}${id}`),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+


  //clickExtractButtonButton: () => cy.get(MnemonicDashboard.extractButtonButton).click,

}

export const TMakerDashboardPage = {
  marketSalesTitle: () => cy.get(TMakerDashboard.marketSalesTitle),
  newTransactionDropdown: () => cy.get(TMakerDashboard.newTransactionDropdown),
  retailOptions: () => cy.get(TMakerDashboard.retailOptions),
  corporateOptions: () => cy.get(TMakerDashboard.corporateOptions),


  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+


  clickNewTransactionDropdown: () => cy.get(TMakerDashboard.newTransactionDropdown).click(),
  clickRetailOptions: () => cy.get(TMakerDashboard.retailOptions).click(),
  clickCorporateOptions: () => cy.get(TMakerDashboard.corporateOptions).click(),
}

export const commonDashboardPage = {
  userAccountButton: () => cy.get(commonDashboard.userAccountButton),
  commandCenterButton: () => cy.get(commonDashboard.commandCenterButton),
  userGreetingsText: () => cy.get(commonDashboard.userGreetingsText),
  emailText: () => cy.get(commonDashboard.emailText),
  accountSettingsButton: () => cy.get(MnemonicDashboard.accountSettingsButton),
  logoutButton: () => cy.get(commonDashboard.logoutButton),
  accountSettingsText: () => cy.get(commonDashboard.accountSettingsText),
  filterText: () => cy.get(MnemonicDashboard.filterText),
  searchText: () => cy.get(MnemonicDashboard.searchText),
  clientTypeText: () => cy.get(MnemonicDashboard.clientTypeText),
  rowsPerPageButton: () => cy.get(MnemonicDashboard.rowsPerPageButton),
  previousPageButton: () => cy.get(commonDashboard.previousPageButton),
  nextPageButton: () => cy.get(commonDashboard.nextPageButton),
  searchInput: () => cy.get(MnemonicDashboard.searchInput),
  clientMnemonicTableHeader: () => cy.get(MnemonicDashboard.clientMnemonicTableHeader),
  clientNameTableHeader: () => cy.get(MnemonicDashboard.clientNameTableHeader),
  branchCodeTableHeader: () => cy.get(MnemonicDashboard.branchCodeTableHeader),
  clientTypeTableHeader: () => cy.get(MnemonicDashboard.clientTypeTableHeader),
  statusTableHeader: () => cy.get(MnemonicDashboard.statusTableHeader),
  retailClientTypeTableHeader: () => cy.get(MnemonicDashboard.retailClientTypeTableHeader),
  clientMnemonicTableData: (id: string) => cy.get(`${MnemonicDashboard.clientMnemonicTableData}${id}`),
  clientNameTableData: (id: string) => cy.get(`${MnemonicDashboard.clientNameTableData}${id}`),
  branchCodeTableData: (id: string) => cy.get(`${MnemonicDashboard.branchCodeTableData}${id}`),
  clientTypeTableData: (id: string) => cy.get(`${MnemonicDashboard.clientTypeTableData}${id}`),
  statusTableData: (id: string) => cy.get(`${MnemonicDashboard.statusTableData}${id}`),
  retailClientTypeTableData: (id: string) => cy.get(`${MnemonicDashboard.retailClientTypeTableData}${id}`),
  rowsPerPageText: () => cy.get(commonDashboard.rowsPerPageText),
  paginationCountText: () => cy.get(MnemonicDashboard.paginationCountText),
  filterButton: () => cy.get(MnemonicDashboard.filterButton),
  searchButton: () => cy.get(MnemonicDashboard.searchButton),
  clientTypeButton: () => cy.get(MnemonicDashboard.clientTypeDropdown),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickLogoutButton: () => cy.get(commonDashboard.logoutButton).click(),
  clickUserAccountButton: () => cy.get(commonDashboard.userAccountButton).click,
  clickCommandCenterButton: () => cy.get(commonDashboard.commandCenterButton).click,
  // clickAccountSettingsButton: () => cy.get(commonDashboard.accountSettingsButton).click,
  // clickRowsPerPageButton: () => cy.get(commonDashboard.rowsPerPageButton).click,
  clickPreviousPageButton: () => cy.get(commonDashboard.previousPageButton).click,
  clickNextPageButton: () => cy.get(commonDashboard.nextPageButton).click,
  // clickFilterButton: () => cy.get(commonDashboard.filterButton).click,
  // clickSearchButton: () => cy.get(commonDashboard.searchButton).click,
  // clickClientTypeButton: () => cy.get(commonDashboard.clientTypeDropdown).click,


}
export const TransactionDashboardPage = {

  viewTransactionButton: () => cy.get(TransactionDashboard.viewTransactionButton),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickViewTransactionButton: () => cy.get(TransactionDashboard.viewTransactionButton).click,
  clickViewTransactionTableRow: (id: string) => cy.get(`${TransactionDashboard.viewTransactionTableRow}${id}']`),
}
