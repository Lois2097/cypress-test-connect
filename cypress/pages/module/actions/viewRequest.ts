import { MViewRequest, MMViewRequest, MCViewRequest } from '../../../locators/viewRequest'

export const MViewRequestPage = {
  viewRequestCorporateTitle: () => cy.get(MViewRequest.viewRequestCorporateTitle),
  viewRequestRetailTitle: () => cy.get(MViewRequest.viewRequestRetailTitle),
  authorizeButton: () => cy.get(MViewRequest.authorizeButton),
  returnToMakerButton: () => cy.get(MViewRequest.returnToMakerButton),
  cancelRequestButton: () => cy.get(MViewRequest.cancelRequestButton),
  completeRequestButton: () => cy.get(MViewRequest.completeRequestButton),
  requestHistoryButton: () => cy.get(MViewRequest.requestHistoryButton),
  identifierTableHeader: () => cy.get(MViewRequest.identifierTableHeader),
  requestTableHeader: () => cy.get(MViewRequest.requestTableHeader),
  mnemonicTableHeader: () => cy.get(MViewRequest.mnemonicTableHeader),
  approverNameTableHeader: () => cy.get(MViewRequest.approverNameTableHeader),
  mobileNumberTableHeader: () => cy.get(MViewRequest.mobileNumberTableHeader),
  emailAddressTableHeader: () => cy.get(MViewRequest.emailAddressTableHeader),
  clientNameTableHeader: () => cy.get(MViewRequest.clientNameTableHeader),
  categoryTableHeader: () => cy.get(MViewRequest.categoryTableHeader),
  servicingUnitTableHeader: () => cy.get(MViewRequest.servicingUnitTableHeader),
  checkerRemarksTableHeader: () => cy.get(MViewRequest.checkerRemarksTableHeader),
  statusTableHeader: () => cy.get(MViewRequest.statusTableHeader),
  rowCountTableData: (index: number) => cy.get(`${MViewRequest.rowCountTableData}${index}`),
  requestTableData: (index: number) => cy.get(`${MViewRequest.requestTableData}${index}`),
  mnemonicTableData: (index: number) => cy.get(`${MViewRequest.mnemonicTableData}${index}`),
  approverNameTableData: (index: number) => cy.get(`${MViewRequest.approverNameTableData}${index}`),
  mobileNumberTableData: (index: number) => cy.get(`${MViewRequest.mobileNumberTableData}${index}`),
  emailAddressTableData: (index: number) => cy.get(`${MViewRequest.emailAddressTableData}${index}`),
  clientNameTableData: (index: number) => cy.get(`${MViewRequest.clientNameTableData}${index}`),
  categoryTableData: (index: number) => cy.get(`${MViewRequest.categoryTableData}${index}`),
  servicingUnitTableData: (index: number) => cy.get(`${MViewRequest.servicingUnitTableData}${index}`),
  checkerRemarksTableData: (index: number) => cy.get(`${MViewRequest.checkerRemarksTableData}${index}`),
  statusTableData: (index: number) => cy.get(`${MViewRequest.statusTableData}${index}`),
  identifierTableData: (index: number) => cy.get(`${MViewRequest.identifierTableData}${index}`),
  requestIdInput: () => cy.get(MViewRequest.requestIdInput),
  statusInput: () => cy.get(MViewRequest.statusInput),
  requestHistoryTitle: () => cy.get(MViewRequest.requestHistoryTitle),
  userIdTableHeader: () => cy.get(MViewRequest.userIdTableHeader),
  nameTableHeader: () => cy.get(MViewRequest.nameTableHeader),
  requestIdTableHeader: () => cy.get(MViewRequest.requestIdTableHeader),
  retailClientTypeTableHeader: () => cy.get(MViewRequest.retailClientTypeTableHeader),
  actionTableHeader: () => cy.get(MViewRequest.actionTableHeader),
  requestStatusTableHeader: () => cy.get(MViewRequest.requestStatusTableHeader),
  mnemonicStatusTableHeader: () => cy.get(MViewRequest.mnemonicStatusTableHeader),
  dateLoggedTableHeader: () => cy.get(MViewRequest.dateLoggedTableHeader),
  userIdTableData: (index: number) => cy.get(`${MViewRequest.userIdTableData}${index}`),
  nameTableData: (index: number) => cy.get(`${MViewRequest.nameTableData}${index}`),
  requestIdTableData: (index: number) => cy.get(`${MViewRequest.requestIdTableData}${index}`),
  retailClientTypeTableData: (index: number) => cy.get(`${MViewRequest.retailClientTypeTableData}${index}`),
  actionTableData: (index: number) => cy.get(`${MViewRequest.actionTableData}${index}`),
  requestStatusTableData: (index: number) => cy.get(`${MViewRequest.requestStatusTableData}${index}`),
  mnemonicStatusTableData: (index: number) => cy.get(`${MViewRequest.mnemonicStatusTableData}${index}`),
  dateLoggedTableData: (index: number) => cy.get(`${MViewRequest.dateLoggedTableData}${index}`),
  previousPageButton: () => cy.get(MViewRequest.previousPageButton),
  nextPageButton: () => cy.get(MViewRequest.nextPageButton),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickAuthorizeButton: () => cy.get(MViewRequest.authorizeButton).click,
  clickReturnToMakerButton: () => cy.get(MViewRequest.returnToMakerButton).click,
  clickCancelRequestButton: () => cy.get(MViewRequest.cancelRequestButton).click,
  clickCompleteRequestButton: () => cy.get(MViewRequest.completeRequestButton).click,
  clickRequestHistoryButton: () => cy.get(MViewRequest.requestHistoryButton).click,
  clickPreviousPageButton: () => cy.get(MViewRequest.previousPageButton).click,
}

export const MCViewRequestPage = {
  authorizeText: () => cy.get(MCViewRequest.authorizeText),
  returnToMakerText: () => cy.get(MCViewRequest.returnToMakerText),
  cancelRequestText: () => cy.get(MCViewRequest.cancelRequestText),
  completeRequestText: () => cy.get(MCViewRequest.completeRequestText),
  requestHistoryText: () => cy.get(MCViewRequest.requestHistoryText),
  statusText: () => cy.get(MCViewRequest.statusText),
  lastUpdateText: () => cy.get(MCViewRequest.lastUpdateText),
  requestHistoryForClientTitle: () => cy.get(MCViewRequest.requestHistoryForClientTitle),
  tableHeader: () => cy.get(MCViewRequest.tableHeader),
  tableRow: (index: number) => cy.get(`${MCViewRequest.tableRow}${index}`),
}

export const MMViewRequestPage = {
  authorizeLabel: () => cy.get(MMViewRequest.authorizeLabel),
  returnToMakerLabel: () => cy.get(MMViewRequest.returnToMakerLabel),
  cancelRequestLabel: () => cy.get(MMViewRequest.cancelRequestLabel),
  completeRequestLabel: () => cy.get(MMViewRequest.completeRequestLabel),
  requestHistoryLabel: () => cy.get(MMViewRequest.requestHistoryLabel),
  requestDetailsTableHeader: () => cy.get(MMViewRequest.requestDetailsTableHeader),
  requestDetailsTableRow: (index: number) => cy.get(`${MMViewRequest.requestDetailsTableRow}${index}`),
  requestIdLabel: () => cy.get(MMViewRequest.requestIdLabel),
  statusLabel: () => cy.get(MMViewRequest.statusLabel),
  lastUpdateLabel: () => cy.get(MMViewRequest.lastUpdateLabel),
  lastUpdateInput: () => cy.get(MMViewRequest.lastUpdateInput),
  requestHistoryForClientLabel: () => cy.get(MMViewRequest.requestHistoryForClientLabel),
  requestHistoryTableHeader: () => cy.get(MMViewRequest.requestHistoryTableHeader),
  requestHistoryTableRow: (index: number) => cy.get(`${MMViewRequest.requestHistoryTableRow}${index}`),
  rowsPerPageLabel: () => cy.get(MMViewRequest.rowsPerPageLabel),
  rowsPerPageButton: () => cy.get(MMViewRequest.rowsPerPageButton),
  rowsPerPageImage: () => cy.get(MMViewRequest.rowsPerPageImage),
  paginationCountLabel: () => cy.get(MMViewRequest.paginationCountLabel),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickRowsPerPageButton: () => cy.get(MMViewRequest.rowsPerPageButton).click,
}
