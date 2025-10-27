export const commonDashboard = {

  allOption: "[data-test-id='options-all-list']",
  retailOption: "[data-test-id='options-retail-list']",
  corporateOption: "[data-test-id='options-corporate-list']",

  retailClientTypeDropdown: "[data-test-id='dropdown-retail-client-type-select']",

  logoutButton: "[data-test-id='navigation-logout-button']",

  rowsPerPageText: "[data-test-id='text-rows-per-page-label']",
  previousPageButton: "[data-test-id='main-page-previous-page-button']",
  nextPageButton: "[data-test-id='main-page-next-page-button']",

  userGreetingsText: "[data-test-id='navigation-user-greetings-label']",
  emailText: "[data-test-id='navigation-email-label']",
  accountSettingsText: "[data-test-id='navigation-account-settings-label']",

  userAccountButton: "[data-test-id='header-user-account-button']",
  commandCenterButton: "[data-test-id='header-command-center-button']",

}

export const MnemonicDashboard = {

  treasuryOperationsTitle: "[data-test-id='title-treasury-operations-label']",

  filterButton: "[data-test-id='main-page-filter-button']",
  filterText: "[data-test-id='main-page-filter-label']",
  searchInput: "[data-test-id='main-page-search-text']",
  searchText: "[data-test-id='main-page-search-label']",
  searchButton: "[data-test-id='main-page-search-button']",
  searchImage: "[data-test-id='main-page-search-svg']",
  clientTypeText: "[data-test-id='main-page-client-type-label']",
  clientTypeDropdown: "[data-test-id='main-page-client-type-button']",

  individualAccountOptions: "[data-test-id='individual-account-list']",
  jointAccountOptions: "[data-test-id='joint-account-list']",

  accountSettingsButton: "[data-test-id='navigation-account-settings-button']",

  rowsPerPageButton: "[data-test-id='main-page-rows-per-page-button']",
  paginationCountText: "[data-test-id='main-page-pagination-count-label']",

  accountNameText: "[data-test-id='navigation-account-name-label']",
  accountSettingsImage: "[data-test-id='navigation-account-settings-svg']",

  clientMnemonicTableHeader: "[data-test-id='main-page-client-mnemonic-header']",
  clientNameTableHeader: "[data-test-id='main-page-client-name-header']",
  branchCodeTableHeader: "[data-test-id='main-page-branch-code-header']",
  clientTypeTableHeader: "[data-test-id='main-page-client-type-header']",
  retailClientTypeTableHeader: "[data-test-id='main-page-retail-client-type-header']",
  statusTableHeader: "[data-test-id='main-page-status-header']",
  clientNameTableData: "[data-test-id='main-page-client-name-data-']",
  branchCodeTableData: "[data-test-id='main-page-branch-code-data-']",
  clientTypeTableData: "[data-test-id='main-page-client-type-data-']",
  clientMnemonicTableData: "[data-test-id='main-page-client-mnemonic-data-']",
  retailClientTypeTableData: "[data-test-id='main-page-retail-client-type-data-']",
  statusTableData: "[data-test-id='main-page-status-data-']",

  customerMaintenanceImage: "[data-test-id='sidebar-customer-maintenance-svg']",
  customerMaintenanceText: "[data-test-id='sidebar-customer-maintenance-label']",
  viewMnemonicImage: "[data-test-id='sidebar-view-mnemonic-svg']",
  viewMnemonicText: "[data-test-id='sidebar-view-mnemonic-label']",
  reportsImage: "[data-test-id='sidebar-reports-svg']",
  reportsText: "[data-test-id='sidebar-reports-label']",
  customersImage: "[data-test-id='sidebar-customers-svg']",
  customersText: "[data-test-id='sidebar-customers-label']",

  extractButton: "[data-test-id='main-page-extract-button-button']",
  extractButtonText: "[data-test-id='main-page-extract-button-label']",

  clientMnemonicTableRow: "[data-test-id='main-page-']",
  dateUploadedTableHeader: "[data-test-id='main-page-date-uploaded-header']",
  activationDateTableHeader: "[data-test-id='main-page-activation-date-header']",
  dateUploadedTableData: "[data-test-id='main-page-date-uploaded-']",
  activationDateTableData: "[data-test-id='main-page-activation-date-']",
}

export const TransactionDashboard = {
  individualAccountOptions: "[data-test-id='options-individual-account-list']",
  jointAccountOptions: "[data-test-id='options-joint-account-list']",

  filterButton: "[data-test-id='main-page-filter-by-select']",
  filterText: "[for='selectedFilter-simple']",
  searchInput: "[data-test-id='input-search-bar-text']",
  searchText: "[for='filterText']",
  searchButton: "[data-test-id='main-page-search-button']",
  // searchImage: "[data-test-id='main-page-search-svg']", [svg not implemented]

  accountSettingsButton: "[data-test-id='header-user-account-button']",

  rowsPerPageButton: "[data-test-id='dropdown-rows-per-page-select']",
  paginationCountText: "[data-test-id='text-page-count-label']",

  accountSettingsButtonNavigation: "[data-test-id='navigation-account-settings-button']",

  clientTypeText: "[for='selectedFilter-simple']",
  clientTypeDropdown: "[data-test-id='dropdown-client-type-select']",
  viewTransactionButton: "[data-test-id='sidebar-view-transaction-button']",
  transactionTypeDropdown: "[data-test-id='main-page-transaction-type-select']",
  filterByDropdown: "[data-test-id='dropdown-filter-by-select']",
  clientNameOption: "[data-test-id='options-client-name-list']",
  clientMnemonicOption: "[data-test-id='options-client-mnemonic-list']",
  moseRefNoOption: "[data-test-id='options-mose-ref-no-list']",
  productOption: "[data-test-id='options-product-list']",
  statusOption: "[data-test-id='options-status-list']",
  branchCodeOption: "[data-test-id='options-branch-code-list']",
  branchMnemonicOption: "[data-test-id='options-branch-mnemonic-list']",
  originatorOption: "[data-test-id='options-originator-list']",
  servicingUnitOption: "[data-test-id='options-servicing-unit-list']",

  clientMnemonicTableHeader: "[data-test-id='table-client-mnemonic-header']",
  clientNameTableHeader: "[data-test-id='table-client-name-header']",
  branchCodeTableHeader: "[data-test-id='table-branch-code-header']",
  clientTypeTableHeader: "[data-test-id='table-client-type-header']",
  retailClientTypeTableHeader: "[data-test-id='table-retail-client-type-header']",
  statusTableHeader: "[data-test-id='table-status-header']",

  clientNameTableData: "[data-test-id='table-client-name-data-']",
  branchCodeTableData: "[data-test-id='table-branch-code-data-']",
  clientTypeTableData: "[data-test-id='table-client-type-data-']",
  clientMnemonicTableData: "[data-test-id='table-client-mnemonic-data-']",
  retailClientTypeTableData: "[data-test-id='table-retail-client-type-data-']",
  statusTableData: "[data-test-id='table-status-data-']",

  viewTransactionTable: "[data-test-id='table-view-transaction-table']",
  moseRefNoTableHeader: "[data-test-id='table-mose-ref-no-header']",
  branchMnemonicTableHeader: "[data-test-id='table-branch-mnemonic-header']",
  productTableHeader: "[data-test-id='table-product-header']",
  transactionDateTableHeader: "[data-test-id='table-transaction-date-header']",
  originatorTableHeader: "[data-test-id='table-originator-header']",
  valueDateTableHeader: "[data-test-id='table-value-date-header']",
  viewTransactionTableRow: "[data-test-id='table-view-transaction-row-",
  moseRefNoTableData: "[data-test-id='table-mose-ref-no-data-']",
  branchMnemonicTableData: "[data-test-id='table-branch-mnemonic-data-']",
  productTableData: "[data-test-id='table-product-data-']",
  transactionDateTableData: "[data-test-id='table-transaction-date-data-']",
  originatorTableData: "[data-test-id='table-originator-data-']",
  valueDateTableData: "[data-test-id='table-value-date-data-']",

}

export const TMakerDashboard = {
  marketSalesTitle: "[data-test-id='header-market-sales-label']",
  newTransactionDropdown: "[data-test-id='sidebar-new-transaction-select']",
  retailOptions: "[data-test-id='sidebar-retail-list']",
  corporateOptions: "[data-test-id='sidebar-corporate-list']",
}

export const TCheckerDashboard = {
  treasuryOperationsTitle: "[data-test-id='title-treasury-operations-label']",
  viewForProcessingDropdown: "[data-test-id='dropdown-view-for-processing-select']",
  retailOptions: "[data-test-id='options-retail-option']",
  corporateOptions: "[data-test-id='options-corporate-option']",
  reportsDropdown: "[data-test-id='dropdown-reports-select']",
  transactionsOptions: "[data-test-id='options-transactions-list']",
}
