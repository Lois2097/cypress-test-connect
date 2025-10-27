import {  transactionMaker, transactionChecker, transactionMakerCancelModal, viewTransaction , viewTransactionHistory} from '../../../locators/viewTransaction'

export const TViewTransactionPage = {
  productForClientNameTitle: () => cy.get(viewTransaction.productForClientNameTitle),
  moseRefNoText: () => cy.get(viewTransaction.moseRefNoText),
  fileNameText: () => cy.get(viewTransaction.fileNameText),
  documentIdText: () => cy.get(viewTransaction.documentIdText),
  statusText: () => cy.get(viewTransaction.statusText),
  lastUpdateDateText: () => cy.get(viewTransaction.lastUpdateDateText),
  isRemarksText: () => cy.get(viewTransaction.isRemarksText),
  postDealDocumentsTitle: () => cy.get(viewTransaction.postDealDocumentsTitle),
  transactionHistoryLabelText: () => cy.get(viewTransactionHistory.transactionHistoryLabelText),
  transactionHistoryForText: () => cy.get(viewTransactionHistory.transactionHistoryForText),
  fileNameInput: () => cy.get(viewTransaction.fileNameInput),
  documentIdInput: () => cy.get(viewTransaction.documentIdInput),
  statusInput: () => cy.get(viewTransaction.statusInput),
  lastUpdateDateInput: () => cy.get(viewTransaction.lastUpdateDateInput),
  isRemarksInput: () => cy.get(viewTransaction.isRemarksInput),
  documentNameInput: () => cy.get(viewTransaction.documentNameInput),
  transactionHistoryButton: () => cy.get(viewTransaction.transactionHistoryButton),
  // downloadDocumentButton: (id: number) => cy.get(`${viewTransaction.downloadDocumentButton}${id}`),
  browseButton: () => cy.get(viewTransaction.browseButton),
  uploadSubmit: () => cy.get(viewTransaction.uploadSubmit),
  clearButton: () => cy.get(viewTransaction.clearButton),
  documentInformationTable: () => cy.get(viewTransaction.documentInformationTable),
  transactionHistoryTable: () => cy.get(viewTransactionHistory.transactionHistoryTable),
  approverNameTableHeader: () => cy.get(viewTransaction.approverNameTableHeader),
  approverRemarksTableHeader: () => cy.get(viewTransaction.approverRemarksTableHeader),
  lastDateModifiedTableHeader: () => cy.get(viewTransaction.lastDateModifiedTableHeader),
  userIdTableHeader: () => cy.get(viewTransactionHistory.userIdTableHeader),
  nameTableHeader: () => cy.get(viewTransactionHistory.nameTableHeader),
  actionTableHeader: () => cy.get(viewTransactionHistory.actionTableHeader),
  documentIdTableHeader: () => cy.get(viewTransactionHistory.documentIdTableHeader),
  transactionStatusTableHeader: () => cy.get(viewTransactionHistory.transactionStatusTableHeader),
  documentStatusTableHeader: () => cy.get(viewTransactionHistory.documentStatusTableHeader),
  mnemonicTableHeader: () => cy.get(viewTransactionHistory.mnemonicTableHeader),
  dateLoggedTableHeader: () => cy.get(viewTransactionHistory.dateLoggedTableHeader),
  approversTableRow: (id: number) => cy.get(`${viewTransaction.approversTableRow}${id}`),
  approverNameTableData: (id: number) => cy.get(`${viewTransaction.approverNameTableData}${id}`),
  approverRemarksTableData: (id: number) => cy.get(`${viewTransaction.approverRemarksTableData}${id}`),
  lastDateModifiedTableData: (id: number) => cy.get(`${viewTransaction.lastDateModifiedTableData}${id}`),
  transactionHistoryTableRow: (id: number) => cy.get(`${viewTransactionHistory.transactionHistoryTableRow}${id}`),
  userIdTableRow: (id: number) => cy.get(`${viewTransactionHistory.userIdTableRow}${id}`),
  nameTableRow: (id: number) => cy.get(`${viewTransactionHistory.nameTableRow}${id}`),
  actionTableRow: (id: number) => cy.get(`${viewTransactionHistory.actionTableRow}${id}`),
  documentIdTableRow: (id: number) => cy.get(`${viewTransactionHistory.documentIdTableRow}${id}`),
  transactionStatusTableRow: (id: number) => cy.get(`${viewTransactionHistory.transactionStatusTableRow}${id}`),
  documentStatusTableRow: (id: number) => cy.get(`${viewTransactionHistory.documentStatusTableRow}${id}`),
  mnemonicTableRow: (id: number) => cy.get(`${viewTransactionHistory.mnemonicTableRow}${id}`),
  dateLoggedTableRow: (id: number) => cy.get(`${viewTransactionHistory.dateLoggedTableRow}${id}`),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickTransactionHistoryButton: () => cy.get(viewTransaction.transactionHistoryButton).click(),
  // clickDownloadDocumentButton: (id: number) => cy.get(`${viewTransaction.downloadDocumentButton}${id}`).click,
  clickBrowseButton: () => cy.get(viewTransaction.browseButton).click,
  clickUploadSubmit: () => cy.get(viewTransaction.uploadSubmit).click,
  clickClearButton: () => cy.get(viewTransaction.clearButton).click,
}

export const TMViewTransactionPage = {
  // transactionTypeDropdown: () => cy.get(transactionMaker.transactionTypeDropdown),
  // allSelect: () => cy.get(transactionMaker.allSelect),
  // retailSelect: () => cy.get(transactionMaker.retailSelect),
  // corporateSelect: () => cy.get(transactionMaker.corporateSelect),
  cancelDocumentsButton: () => cy.get(transactionMakerCancelModal.cancelDocumentsButton),
  cancelTransactionPromptContainer: () => cy.get(transactionMakerCancelModal.cancelTransactionPromptContainer),
  cancelTransactionText: () => cy.get(transactionMakerCancelModal.cancelTransactionText),
  cancelTransactionMessageText: () => cy.get(transactionMakerCancelModal.cancelTransactionMessageText),
  cancelTransactionRemarksInput: () => cy.get(transactionMakerCancelModal.cancelTransactionRemarksInput),
  cancelTransactionOkButton: () => cy.get(transactionMakerCancelModal.cancelTransactionOkButton),
  cancelTransactionCancelButton: () => cy.get(transactionMakerCancelModal.cancelTransactionCancelButton),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  // clickTransactionTypeDropdown: () => cy.get(transactionMaker.transactionTypeDropdown).click,
  // clickAllSelect: () => cy.get(transactionMaker.allSelect).click,
  // clickRetailSelect: () => cy.get(transactionMaker.retailSelect).click,
  // clickCorporateSelect: () => cy.get(transactionMaker.corporateSelect).click,
  clickCancelDocumentsButton: () => cy.get(transactionMakerCancelModal.cancelDocumentsButton).click(),
  clickCancelTransactionOkButton: () => cy.get(transactionMakerCancelModal.cancelTransactionOkButton).click,
  clickCancelTransactionCancelButton: () => cy.get(transactionMakerCancelModal.cancelTransactionCancelButton).click,
}

export const TCViewTransactionPage = {
  // retailClientTypeDropdown: () => cy.get(transactionChecker.retailClientTypeDropdown),
  // individualAccountOptions: () => cy.get(transactionChecker.individualAccountOptions),
  // jointAccountOptions: () => cy.get(transactionChecker.jointAccountOptions),
  completeDocumentsButton: () => cy.get(transactionChecker.completeDocumentsButton),
  tradeConfirmationText: () => cy.get(viewTransaction.tradeConfirmationText),
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



  // clickRetailClientTypeDropdown: () => cy.get(transactionChecker.retailClientTypeDropdown).click,
  // clickIndividualAccountOptions: () => cy.get(transactionChecker.individualAccountOptions).click,
  // clickJointAccountOptions: () => cy.get(transactionChecker.jointAccountOptions).click,
  clickCompleteDocumentsButton: () => cy.get(transactionChecker.completeDocumentsButton).click,
  clickConfirmSubmitTransactionOkButton: () => cy.get(transactionChecker.confirmSubmitTransactionOkButton).click,
  clickConfirmSubmitTransactionCancelButton: () => cy.get(transactionChecker.confirmSubmitTransactionCancelButton).click,
}
