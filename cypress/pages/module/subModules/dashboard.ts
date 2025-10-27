import { MnemonicDashboard } from '../../../locators/dashboard'
import { MMakerDashboard } from '../../../locators/dashboard'
import { MCheckerDashboard } from '../../../locators/dashboard'
import { TMakerDashboard } from '../../../locators/dashboard'

export const MnemonicDashboardPage = {
  customerMaintenanceImage: () => cy.get(MnemonicDashboard.customerMaintenanceImage),
  viewMnemonicImage: () => cy.get(MnemonicDashboard.viewMnemonicImage),
  reportsImage: () => cy.get(MnemonicDashboard.reportsImage),
  customersImage: () => cy.get(MnemonicDashboard.customersImage),
  searchImage: () => cy.get(MnemonicDashboard.searchImage),
  customerMaintenanceText: () => cy.get(MnemonicDashboard.customerMaintenanceText),
  viewMnemonicText: () => cy.get(MnemonicDashboard.viewMnemonicText),
  reportsText: () => cy.get(MnemonicDashboard.reportsText),
  customersText: () => cy.get(MnemonicDashboard.customersText),
  filterText: () => cy.get(MnemonicDashboard.filterText),
  searchText: () => cy.get(MnemonicDashboard.searchText),
  clientTypeText: () => cy.get(MnemonicDashboard.clientTypeText),
  extractButtonText: () => cy.get(MnemonicDashboard.extractButtonText),
  rowsPerPageText: () => cy.get(MnemonicDashboard.rowsPerPageText),
  paginationCountText: () => cy.get(MnemonicDashboard.paginationCountText),
  filterButton: () => cy.get(MnemonicDashboard.filterButton),
  searchButton: () => cy.get(MnemonicDashboard.searchButton),
  clientTypeButton: () => cy.get(MnemonicDashboard.clientTypeButton),
  extractButtonButton: () => cy.get(MnemonicDashboard.extractButtonButton),
  rowsPerPageButton: () => cy.get(MnemonicDashboard.rowsPerPageButton),
  previousPageButton: () => cy.get(MnemonicDashboard.previousPageButton),
  nextPageButton: () => cy.get(MnemonicDashboard.nextPageButton),
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
  dateUploadedTableData: (id: string) => cy.get(`${MnemonicDashboard.dateUploadedTableData}${id}`),
  activationDateTableData: (id: string) => cy.get(`${MnemonicDashboard.activationDateTableData}${id}`),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickFilterButton: () => cy.get(MnemonicDashboard.filterButton).click,
  clickSearchButton: () => cy.get(MnemonicDashboard.searchButton).click,
  clickClientTypeButton: () => cy.get(MnemonicDashboard.clientTypeButton).click,
  clickExtractButtonButton: () => cy.get(MnemonicDashboard.extractButtonButton).click,
  clickRowsPerPageButton: () => cy.get(MnemonicDashboard.rowsPerPageButton).click,
  clickPreviousPageButton: () => cy.get(MnemonicDashboard.previousPageButton).click,
  clickNextPageButton: () => cy.get(MnemonicDashboard.nextPageButton).click,

}

export const MMakerDashboardPage = {
  treasuryOptionsTitle: () => cy.get(MMakerDashboard.treasuryOptionsTitle),
  clientMmnemonicTable: () => cy.get(MMakerDashboard.clientMmnemonicTable),
  dateUploadedTableHeader: () => cy.get(MMakerDashboard.dateUploadedTableHeader),
  activationDateTableHeader: () => cy.get(MMakerDashboard.activationDateTableHeader),
  clientMnemonicTableRow: (id: string) => cy.get(`${MMakerDashboard.clientMnemonicTableRow}${id}`),
}

export const MCheckerDashboardPage = {
  treasuryOperationsTitle: () => cy.get(MCheckerDashboard.treasuryOperationsTitle),
  filterImage: () => cy.get(MCheckerDashboard.filterImage),
  clientTypeImage: () => cy.get(MCheckerDashboard.clientTypeImage),
  accountSettingsImage: () => cy.get(MCheckerDashboard.accountSettingsImage),
  accountNameText: () => cy.get(MCheckerDashboard.accountNameText),
  accountSettingsText: () => cy.get(MCheckerDashboard.accountSettingsText),
  accountSettingsButton: () => cy.get(MCheckerDashboard.accountSettingsButton),
  clientMnemonicTable: () => cy.get(MCheckerDashboard.clientMnemonicTable),
  dateUploadedTableHeader: () => cy.get(MCheckerDashboard.dateUploadedTableHeader),
  activationDateTableHeader: () => cy.get(MCheckerDashboard.activationDateTableHeader),
  clientMnemonicTableRow: (id: string) => cy.get(`${MCheckerDashboard.clientMnemonicTableRow}${id}`),

  clickAccountSettingsButton: () => cy.get(MCheckerDashboard.accountSettingsButton).click,
}

export const TMakerDashboardPage = {
  marketSalesTitle: () => cy.get(TMakerDashboard.marketSalesTitle),
  userAccountButton: () => cy.get(TMakerDashboard.userAccountButton),
  commandCenterButton: () => cy.get(TMakerDashboard.commandCenterButton),
  viewTransactionButton: () => cy.get(TMakerDashboard.viewTransactionButton),
  accountSettingsButton: () => cy.get(TMakerDashboard.accountSettingsButton),
  logoutButton: () => cy.get(TMakerDashboard.logoutButton),
  newTransactionDropdown: () => cy.get(TMakerDashboard.newTransactionDropdown),
  retailOptions: () => cy.get(TMakerDashboard.retailOptions),
  corporateOptions: () => cy.get(TMakerDashboard.corporateOptions),
  userGreetingsText: () => cy.get(TMakerDashboard.userGreetingsText),
  emailText: () => cy.get(TMakerDashboard.emailText),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickUserAccountButton: () => cy.get(TMakerDashboard.userAccountButton).click,
  clickCommandCenterButton: () => cy.get(TMakerDashboard.commandCenterButton).click,
  clickViewTransactionButton: () => cy.get(TMakerDashboard.viewTransactionButton).click,
  clickAccountSettingsButton: () => cy.get(TMakerDashboard.accountSettingsButton).click,
  clickLogoutButton: () => cy.get(TMakerDashboard.logoutButton).click,
  clickNewTransactionDropdown: () => cy.get(TMakerDashboard.newTransactionDropdown).click,
  clickRetailOptions: () => cy.get(TMakerDashboard.retailOptions).click,
  clickCorporateOptions: () => cy.get(TMakerDashboard.corporateOptions).click,
}
