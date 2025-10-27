import { Transaction, transactionMaker, transactionChecker } from '../../../locators/viewTransaction'

export const TViewTransactionPage = {
  productForClientNameTitle: () => cy.get(Transaction.productForClientNameTitle),
  moseRefNoText: () => cy.get(Transaction.moseRefNoText),
  fileNameText: () => cy.get(Transaction.fileNameText),
  documentIdText: () => cy.get(Transaction.documentIdText),
  statusText: () => cy.get(Transaction.statusText),
  lastUpdateDateText: () => cy.get(Transaction.lastUpdateDateText),
  isRemarksText: () => cy.get(Transaction.isRemarksText),
  postDealDocumentsTitle: () => cy.get(Transaction.postDealDocumentsTitle),
  transactionHistoryLabelText: () => cy.get(Transaction.transactionHistoryLabelText),
  transactionHistoryForText: () => cy.get(Transaction.transactionHistoryForText),
  fileNameInput: () => cy.get(Transaction.fileNameInput),
  documentIdInput: () => cy.get(Transaction.documentIdInput),
  statusInput: () => cy.get(Transaction.statusInput),
  lastUpdateDateInput: () => cy.get(Transaction.lastUpdateDateInput),
  isRemarksInput: () => cy.get(Transaction.isRemarksInput),
  documentNameInput: () => cy.get(Transaction.documentNameInput),
  transactionHistoryButton: () => cy.get(Transaction.transactionHistoryButton),
  downloadDocumentButton: (id: number) => cy.get(`${Transaction.downloadDocumentButton}${id}`),
  browseButton: () => cy.get(Transaction.browseButton),
  uploadSubmit: () => cy.get(Transaction.uploadSubmit),
  clearButton: () => cy.get(Transaction.clearButton),
  documentInformationTable: () => cy.get(Transaction.documentInformationTable),
  transactionHistoryTable: () => cy.get(Transaction.transactionHistoryTable),
  approverNameTableHeader: () => cy.get(Transaction.approverNameTableHeader),
  approverRemarksTableHeader: () => cy.get(Transaction.approverRemarksTableHeader),
  lastDateModifiedTableHeader: () => cy.get(Transaction.lastDateModifiedTableHeader),
  userIdTableHeader: () => cy.get(Transaction.userIdTableHeader),
  nameTableHeader: () => cy.get(Transaction.nameTableHeader),
  actionTableHeader: () => cy.get(Transaction.actionTableHeader),
  documentIdTableHeader: () => cy.get(Transaction.documentIdTableHeader),
  transactionStatusTableHeader: () => cy.get(Transaction.transactionStatusTableHeader),
  documentStatusTableHeader: () => cy.get(Transaction.documentStatusTableHeader),
  mnemonicTableHeader: () => cy.get(Transaction.mnemonicTableHeader),
  dateLoggedTableHeader: () => cy.get(Transaction.dateLoggedTableHeader),
  approversTableRow: (id: number) => cy.get(`${Transaction.approversTableRow}${id}`),
  approverNameTableData: (id: number) => cy.get(`${Transaction.approverNameTableData}${id}`),
  approverRemarksTableData: (id: number) => cy.get(`${Transaction.approverRemarksTableData}${id}`),
  lastDateModifiedTableData: (id: number) => cy.get(`${Transaction.lastDateModifiedTableData}${id}`),
  transactionHistoryTableRow: (id: number) => cy.get(`${Transaction.transactionHistoryTableRow}${id}`),
  userIdTableRow: (id: number) => cy.get(`${Transaction.userIdTableRow}${id}`),
  nameTableRow: (id: number) => cy.get(`${Transaction.nameTableRow}${id}`),
  actionTableRow: (id: number) => cy.get(`${Transaction.actionTableRow}${id}`),
  documentIdTableRow: (id: number) => cy.get(`${Transaction.documentIdTableRow}${id}`),
  transactionStatusTableRow: (id: number) => cy.get(`${Transaction.transactionStatusTableRow}${id}`),
  documentStatusTableRow: (id: number) => cy.get(`${Transaction.documentStatusTableRow}${id}`),
  mnemonicTableRow: (id: number) => cy.get(`${Transaction.mnemonicTableRow}${id}`),
  dateLoggedTableRow: (id: number) => cy.get(`${Transaction.dateLoggedTableRow}${id}`),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickTransactionHistoryButton: () => cy.get(Transaction.transactionHistoryButton).click,
  clickDownloadDocumentButton: (id: number) => cy.get(`${Transaction.downloadDocumentButton}${id}`).click,
  clickBrowseButton: () => cy.get(Transaction.browseButton).click,
  clickUploadSubmit: () => cy.get(Transaction.uploadSubmit).click,
  clickClearButton: () => cy.get(Transaction.clearButton).click,
}

export const TMViewTransactionPage = {
  transactionTypeDropdown: () => cy.get(transactionMaker.transactionTypeDropdown),
  allSelect: () => cy.get(transactionMaker.allSelect),
  retailSelect: () => cy.get(transactionMaker.retailSelect),
  corporateSelect: () => cy.get(transactionMaker.corporateSelect),
  cancelDocumentsButton: () => cy.get(transactionMaker.cancelDocumentsButton),
  cancelTransactionPromptContainer: () => cy.get(transactionMaker.cancelTransactionPromptContainer),
  cancelTransactionText: () => cy.get(transactionMaker.cancelTransactionText),
  cancelTransactionMessageText: () => cy.get(transactionMaker.cancelTransactionMessageText),
  cancelTransactionRemarksInput: () => cy.get(transactionMaker.cancelTransactionRemarksInput),
  cancelTransactionOkButton: () => cy.get(transactionMaker.cancelTransactionOkButton),
  cancelTransactionCancelButton: () => cy.get(transactionMaker.cancelTransactionCancelButton),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickTransactionTypeDropdown: () => cy.get(transactionMaker.transactionTypeDropdown).click,
  clickAllSelect: () => cy.get(transactionMaker.allSelect).click,
  clickRetailSelect: () => cy.get(transactionMaker.retailSelect).click,
  clickCorporateSelect: () => cy.get(transactionMaker.corporateSelect).click,
  clickCancelDocumentsButton: () => cy.get(transactionMaker.cancelDocumentsButton).click,
  clickCancelTransactionOkButton: () => cy.get(transactionMaker.cancelTransactionOkButton).click,
  clickCancelTransactionCancelButton: () => cy.get(transactionMaker.cancelTransactionCancelButton).click,
}

export const TCViewTransactionPage = {
  retailClientTypeDropdown: () => cy.get(transactionChecker.retailClientTypeDropdown),
  individualAccountOptions: () => cy.get(transactionChecker.individualAccountOptions),
  jointAccountOptions: () => cy.get(transactionChecker.jointAccountOptions),
  completeDocumentsButton: () => cy.get(transactionChecker.completeDocumentsButton),
  tradeConfirmationText: () => cy.get(transactionChecker.tradeConfirmationText),
  confirmSubmitTransactionPromptContainer: () => cy.get(transactionChecker.confirmSubmitTransactionPromptContainer),
  confirmSubmitTransactionText: () => cy.get(transactionChecker.confirmSubmitTransactionText),
  confirmSubmitTransactionMessageText: () => cy.get(transactionChecker.confirmSubmitTransactionMessageText),
  confirmSubmitTransactionRemarksInput: () => cy.get(transactionChecker.confirmSubmitTransactionRemarksInput),
  confirmSubmitTransactionOkButton: () => cy.get(transactionChecker.confirmSubmitTransactionOkButton),
  confirmSubmitTransactionCancelButton: () => cy.get(transactionChecker.confirmSubmitTransactionCancelButton),
  confirmSubmitTransactionSuccessMessageText: () => cy.get(transactionChecker.confirmSubmitTransactionSuccessMessageText),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+
  clickRetailClientTypeDropdown: () => cy.get(transactionChecker.retailClientTypeDropdown).click,
  clickIndividualAccountOptions: () => cy.get(transactionChecker.individualAccountOptions).click,
  clickJointAccountOptions: () => cy.get(transactionChecker.jointAccountOptions).click,
  clickCompleteDocumentsButton: () => cy.get(transactionChecker.completeDocumentsButton).click,
  clickConfirmSubmitTransactionOkButton: () => cy.get(transactionChecker.confirmSubmitTransactionOkButton).click,
  clickConfirmSubmitTransactionCancelButton: () => cy.get(transactionChecker.confirmSubmitTransactionCancelButton).click,
}
