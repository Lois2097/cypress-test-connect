import { ViewMnemonic, ViewMnemonicChecker, ViewMnemonicMaker } from '../../../locators/viewMnemonic'

export const ViewMnemonicPage = {
  // Text
  viewMnemonicRetailTitle: () => cy.get(ViewMnemonic.viewMnemonicRetailTitle),
  configureAuthorizationLabel: () => cy.get(ViewMnemonic.configureAuthorizationText),
  mnemonicHistoryLabel: () => cy.get(ViewMnemonic.mnemonicHistoryText),
  statusText: () => cy.get(ViewMnemonic.statusText),
  lastUpdateDateLabel: () => cy.get(ViewMnemonic.lastUpdateDateText),
  modalCloseLabel: () => cy.get(ViewMnemonic.modalCloseText),
  rowsPerPageText: () => cy.get(ViewMnemonic.rowsPerPageText),
  previousPageText: () => cy.get(ViewMnemonic.previousPageText),
  nextPageText: () => cy.get(ViewMnemonic.nextPageText),
  requestHistoryLabel: () => cy.get(ViewMnemonic.requestHistoryText),
  configureAuthorizationTitle: () => cy.get(ViewMnemonic.configureAuthorizationTitle),
  approverSetupTitle: () => cy.get(ViewMnemonic.approverSetupTitle),
  viewRequestRetailTitle: () => cy.get(ViewMnemonic.viewRequestRetailTitle),
  viewRequestCorporateTitle: () => cy.get(ViewMnemonic.viewRequestCorporateTitle),
  mnemonicHistoryTitle: () => cy.get(ViewMnemonic.mnemonicHistoryTitle),
  mnemonicHistoryClientTitle: () => cy.get(ViewMnemonic.mnemonicHistoryClientTitle),
  mnemonicNameTitle: () => cy.get(ViewMnemonic.mnemonicNameTitle),
  requestHistoryTitle: () => cy.get(ViewMnemonic.requestHistoryTitle),

  // Buttons
  configureAuthorizationButton: () => cy.get(ViewMnemonic.configureAuthorizationButton),
  mnemonicHistoryButton: () => cy.get(ViewMnemonic.mnemonicHistoryButton),
  modalClosebutton: () => cy.get(ViewMnemonic.modalCloseButton),
  rowsPerPageButton: () => cy.get(ViewMnemonic.rowsPerPageButton),
  previousPageButton: () => cy.get(ViewMnemonic.previousPageButton),
  nextPageButton: () => cy.get(ViewMnemonic.nextPageButton),
  requestHistoryButton: () => cy.get(ViewMnemonic.requestHistoryButton),

  // Input Box
  statusInput: () => cy.get(ViewMnemonic.statusInput),
  lastUpdateDateInput: () => cy.get(ViewMnemonic.lastUpdateDateInput),
  requestIdInput: () => cy.get(ViewMnemonic.requestIdInput),

  // Table
  dateLoggedTable: () => cy.get(ViewMnemonic.dateLoggedTable),

  // Table Header
  tableHeader: () => cy.get(ViewMnemonic.tableHeader),
  approverNameTableHeader: () => cy.get(ViewMnemonic.approverNameTableHeader),
  statusTableHeader: () => cy.get(ViewMnemonic.statusTableHeader),
  mobileNumberTableHeader: () => cy.get(ViewMnemonic.mobileNumberTableHeader),
  emailAddressTableHeader: () => cy.get(ViewMnemonic.emailAddressTableHeader),
  categoryTableHeader: () => cy.get(ViewMnemonic.categoryTableHeader),
  lastModifiedTableHeader: () => cy.get(ViewMnemonic.lastModifiedTableHeader),
  authorizedDealerTableHeader: () => cy.get(ViewMnemonic.authorizedDealerTableHeader),
  modalTableHeader: () => cy.get(ViewMnemonic.modalTableHeader),
  userIdTableHeader: () => cy.get(ViewMnemonic.userIdTableHeader),
  mnemonicTableHeader: () => cy.get(ViewMnemonic.mnemonicTableHeader),
  nameTableHeader: () => cy.get(ViewMnemonic.nameTableHeader),
  actionTableHeader: () => cy.get(ViewMnemonic.actionTableHeader),
  identifierTableHeader: () => cy.get(ViewMnemonic.identifierTableHeader),
  requestTableHeader: () => cy.get(ViewMnemonic.requestTableHeader),
  clientNameTableHeader: () => cy.get(ViewMnemonic.clientNameTableHeader),
  validationRemarksTableHeader: () => cy.get(ViewMnemonic.validationRemarksTableHeader),
  checkerRemarksTableHeader: () => cy.get(ViewMnemonic.checkerRemarksTableHeader),
  requestIdTableHeader: () => cy.get(ViewMnemonic.requestIdTableHeader),
  retailClientTypeTableHeader: () => cy.get(ViewMnemonic.retailClientTypeTableHeader),
  requestStatusTableHeader: () => cy.get(ViewMnemonic.requestStatusTableHeader),
  mnemonicStatusTableHeader: () => cy.get(ViewMnemonic.mnemonicStatusTableHeader),

  // Table Row
  tableRow: (id: number) => cy.get(`${ViewMnemonic.tableRow}${id}'`),
  modalTableRow: (id: number) => cy.get(`${ViewMnemonic.modalTableRow}${id}'`),

  // Table Data
  approverNameTableData: (id: number) => cy.get(`${ViewMnemonic.approverNameTableData}${id}'`),
  statusTableData: (id: number) => cy.get(`${ViewMnemonic.statusTableData}${id}'`),
  mobileNumberTableData: (id: number) => cy.get(`${ViewMnemonic.mobileNumberTableData}${id}'`),
  emailAddressTableData: (id: number) => cy.get(`${ViewMnemonic.emailAddressTableData}${id}'`),
  categoryTableData: (id: number) => cy.get(`${ViewMnemonic.categoryTableData}${id}'`),
  lastModifiedTableData: (id: number) => cy.get(`${ViewMnemonic.lastModifiedTableData}${id}'`),
  authorizedDealerTableData: (id: number) => cy.get(`${ViewMnemonic.authorizedDealerTableData}${id}'`),
  userIdTableData: (id: number) => cy.get(`${ViewMnemonic.userIdTableData}${id}'`),
  mnemonicTableData: (id: number) => cy.get(`${ViewMnemonic.mnemonicTableData}${id}'`),
  nameTableData: (id: number) => cy.get(`${ViewMnemonic.nameTableData}${id}'`),
  actionTableData: (id: number) => cy.get(`${ViewMnemonic.actionTableData}${id}'`),
  dateLoggedTableData: (id: number) => cy.get(`${ViewMnemonic.dateLoggedTableData}${id}'`),
  identifierTableData: (id: number) => cy.get(`${ViewMnemonic.identifierTableData}${id}'`),
  requestIdTableData: (id: number) => cy.get(`${ViewMnemonic.requestIdTableData}${id}'`),
  retailClientTypeTableData: (id: number) => cy.get(`${ViewMnemonic.retailClientTypeTableData}${id}'`),
  requestStatusTableData: (id: number) => cy.get(`${ViewMnemonic.requestStatusTableData}${id}'`),
  mnemonicStatusTableData: (id: number) => cy.get(`${ViewMnemonic.mnemonicStatusTableData}${id}'`),

  // Image
  configureAuthorizationImage: () => cy.get(ViewMnemonic.configureAuthorizationImage),
  mnemonicHistoryImage: () => cy.get(ViewMnemonic.mnemonicHistoryImage),
  paginationCountImage: () => cy.get(ViewMnemonic.paginationCountImage),
  tableNavigationImage: () => cy.get(ViewMnemonic.tableNavigationImage),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickConfigureAuthorizationButton: () => cy.get(ViewMnemonic.configureAuthorizationButton).click(),
  clickMnemonicHistoryButton: () => cy.get(ViewMnemonic.mnemonicHistoryButton).click(),
  clickModalClosebutton: () => cy.get(ViewMnemonic.modalCloseButton).click(),
  clickRowsPerPageButton: () => cy.get(ViewMnemonic.rowsPerPageButton).click(),
  clickPreviousPageButton: () => cy.get(ViewMnemonic.previousPageButton).click(),
  clickNextPageButton: () => cy.get(ViewMnemonic.nextPageButton).click(),
  clickRequestHistoryButton: () => cy.get(ViewMnemonic.requestHistoryButton).click(),

  typeStatusInput: (input: string) => cy.get(ViewMnemonic.statusInput).type(input),
  typeLastUpdateDateInput: (input: string) => cy.get(ViewMnemonic.lastUpdateDateInput).type(input),
  typeRequestIdInput: (input: string) => cy.get(ViewMnemonic.requestIdInput).type(input),

  clickTableRow: (id: number) => cy.get(`${ViewMnemonic.tableRow}${id}'`).click(),
  clickModalTableRow: (id: number) => cy.get(`${ViewMnemonic.modalTableRow}${id}'`).click(),
}

export const ViewMnemonicCheckerPage = {
  // Text
  clientLabel: () => cy.get(ViewMnemonicChecker.clientLabel),
  mnemonicLabel: () => cy.get(ViewMnemonicChecker.mnemonicLabel),
  servicingUnitText: () => cy.get(ViewMnemonicChecker.servicingUnitText),
  authorizeLabel: () => cy.get(ViewMnemonicChecker.authorizeLabel),
  returnToMakerLabel: () => cy.get(ViewMnemonicChecker.returnToMakerLabel),
  requestIdLabel: () => cy.get(ViewMnemonicChecker.requestIdLabel),
  cancelRequestLabel: () => cy.get(ViewMnemonicChecker.cancelRequestLabel),
  requestHistoryLabel: () => cy.get(ViewMnemonicChecker.requestHistoryLabel),

  // Input
  servicingUnitInput: () => cy.get(ViewMnemonicChecker.servicingUnitInput),

  // Button
  authorizeButton: () => cy.get(ViewMnemonicChecker.authorizeButton),
  returnToMakerButton: () => cy.get(ViewMnemonicChecker.returnToMakerButton),
  cancelRequestButton: () => cy.get(ViewMnemonicChecker.cancelRequestButton),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  TypeServicingUnitInput: (input: string) => cy.get(ViewMnemonicChecker.servicingUnitInput).type(input),

  clickAuthorizeButton: () => cy.get(ViewMnemonicChecker.authorizeButton).click(),
  clickReturnToMakerButton: () => cy.get(ViewMnemonicChecker.returnToMakerButton).click(),
  clickCancelRequestButton: () => cy.get(ViewMnemonicChecker.cancelRequestButton).click(),
}

export const ViewMnemonicMakerPage = {
  // Text
  clientTitle: () => cy.get(ViewMnemonicMaker.clientTitle),
  mnemonicTitle: () => cy.get(ViewMnemonicMaker.mnemonicTitle),
  requestIdText: () => cy.get(ViewMnemonicMaker.requestIdText),
  paginationCountText: () => cy.get(ViewMnemonicMaker.paginationCountText),
  submitText: () => cy.get(ViewMnemonicMaker.submitText),

  // Button
  submitButton: () => cy.get(ViewMnemonicMaker.submitButton),

  // Table
  clientNameTable: () => cy.get(ViewMnemonicMaker.clientNameTable),
  validatationRemarksTable: () => cy.get(ViewMnemonicMaker.validationRemarksTable),
  checkerRemarksTable: () => cy.get(ViewMnemonicMaker.checkerRemarksTable),

  // Table Data
  requestTableData: (id: number) => cy.get(`${ViewMnemonicMaker.requestTableData}${id}'`),

  // Image
  rowsPerPageImage: () => cy.get(ViewMnemonicMaker.rowsPerPageImage),
  previousPageImage: () => cy.get(ViewMnemonicMaker.previousPageImage),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickSubmitButton: () => cy.get(ViewMnemonicMaker.submitButton).click(),
}
