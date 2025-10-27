import { AcceptAndReject } from '../../../locators/acceptAndReject'

export const AcceptAndRejectPage = {
  metrobankLogoImage: () => cy.get(AcceptAndReject.metrobankLogoImage),
  welcomeClientNameTitle: () => cy.get(AcceptAndReject.welcomeClientNameTitle),
  instructionsTitle: () => cy.get(AcceptAndReject.instructionsTitle),
  filesTitle: () => cy.get(AcceptAndReject.filesTitle),
  rejectingDocumentNameTitle: () => cy.get(AcceptAndReject.rejectingDocumentNameTitle),
  submitDocumentsToBankMessageTitle: () => cy.get(AcceptAndReject.submitDocumentsToBankMessageTitle),
  documentsHasBeenProcessedTitle: () => cy.get(AcceptAndReject.documentsHasBeenProcessedTitle),
  moseRefNoTitle: () => cy.get(AcceptAndReject.moseRefNoTitle),
  instructionStep1Text: () => cy.get(AcceptAndReject.instructionStep1Text),
  instructionStep2Text: () => cy.get(AcceptAndReject.instructionStep2Text),
  instructionStep3Text: () => cy.get(AcceptAndReject.instructionStep3Text),
  termsAndConditionsText: () => cy.get(AcceptAndReject.termsAndConditionsText),
  enterReasonText: () => cy.get(AcceptAndReject.enterReasonText),
  transactionDateText: () => cy.get(AcceptAndReject.transactionDateText),
  reasonTextInput: () => cy.get(AcceptAndReject.reasonTextInput),
  acceptDocumentButton: (id: number) => cy.get(`${AcceptAndReject.acceptDocumentButton}${id}`),
  rejectDocumentButton: (id: number) => cy.get(`${AcceptAndReject.rejectDocumentButton}${id}`),
  homeButton: () => cy.get(AcceptAndReject.homeButton),
  cancelButton: () => cy.get(AcceptAndReject.cancelButton),
  rejectButton: () => cy.get(AcceptAndReject.rejectButton),
  okButton: () => cy.get(AcceptAndReject.okButton),
  fileNameTableHeader: () => cy.get(AcceptAndReject.fileNameTableHeader),
  documentIdTableHeader: () => cy.get(AcceptAndReject.documentIdTableHeader),
  actionsTableHeader: () => cy.get(AcceptAndReject.actionsTableHeader),
  statusTable: () => cy.get(AcceptAndReject.statusTable),
  documentFileData: (id: number) => cy.get(`${AcceptAndReject.documentFileData}${id}`),
  documentIdData: (id: number) => cy.get(`${AcceptAndReject.documentIdData}${id}`),
  acceptedTimeDateData: (id: number) => cy.get(`${AcceptAndReject.acceptedTimeDateData}${id}`),
  rejectedTimeDateTable: (id: number) => cy.get(`${AcceptAndReject.rejectedTimeDateTable}${id}`),
  uploadedDateTable: (id: number) => cy.get(`${AcceptAndReject.uploadedDateTable}${id}`),
  acceptedRejectedDateTimeTable: (id: number) => cy.get(`${AcceptAndReject.acceptedRejectedDateTimeTable}${id}`),
  documentApprovedAlertDialog: () => cy.get(AcceptAndReject.documentApprovedAlertDialog),
  documentRejectedAlertDialog: () => cy.get(AcceptAndReject.documentRejectedAlertDialog),
  successAlertDialog: () => cy.get(AcceptAndReject.successAlertDialog),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+
  clickAcceptDocumentButton: (id: number) => cy.get(`${AcceptAndReject.acceptDocumentButton}${id}`).click,
  clickRejectDocumentButton: (id: number) => cy.get(`${AcceptAndReject.rejectDocumentButton}${id}`).click,
  clickHomeButton: () => cy.get(AcceptAndReject.homeButton).click,
  clickCancelButton: () => cy.get(AcceptAndReject.cancelButton).click,
  clickRejectButton: () => cy.get(AcceptAndReject.rejectButton).click,
  clickOkButton: () => cy.get(AcceptAndReject.okButton).click,
}
