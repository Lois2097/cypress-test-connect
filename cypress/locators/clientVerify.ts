export const clientVerifyLocators = {
  metrobankLogo: '[data-test-id="header-metrobank-logo-img"]',
  welcomeMoseLabel: '[data-test-id="main-page-welcome-mose-label"]',
  enterRefCodeLabel: '[data-test-id="main-page-enter-ref-code-label"]',
  activateMessageLabel: '[data-test-id="main-page-activate-message-label"]',
  refCodeInput: '[data-test-id="main-page-ref-code-input-text"]',
  nextButton: '[data-test-id="main-page-next-button"]',
  errorRefCodeLabel: '[data-test-id="main-page-error-ref-code-label"]'
};

export const otpVerifyLocators = {
  verificationLabel: '[data-test-id="title-verification-text"]',
  otpMessageLabel: '[data-test-id="text-otp-description-label"]',
  sendOtpLabel: '[data-test-id="text-otp-instuction-general-label"]',
  sendOtpButton: '[data-test-id="button-send-otp-button"]',
  otpSentToSnackbar: '[data-test-id="alertdialog-otp-sent-to-snackbar"]',
  enterOtpMessageLabel: '[data-test-id="text-otp-instruction-specific-label"]',
  otpInput: '[data-test-id="input-otp-input-text"]',
  submitOtpButton: '[data-test-id="button-submit-button"]',
  resendOtpButton: '[data-test-id="button-resend-otp-button"]',
  incorrectOtpSnackbar: '[data-test-id="banner-incorrect-otp-snackbar"]',
  exceededOtpAttemptsSnackbar: '[data-test-id="banner-exceeded-number-of-otp-attempts-snackbar"]'
};

export const clientActionLocators = {
  metrobankLogo: '[data-test-id="header-metrobank-logo-img"]',
  welcomeClientNameLabel: '[data-test-id="header-welcome-client-name-label"]',
  instructionsLabel: '[data-test-id="main-page-instructions-label"]',
  instructionStep1Label: '[data-test-id="main-page-instruction-step-1-label"]',
  instructionStep2Label: '[data-test-id="main-page-instruction-step-2-label"]',
  instructionStep3Label: '[data-test-id="main-page-instruction-step-3-label"]',
  fileNameHeader: '[data-test-id="main-page-file-name-header"]',
  documentIdHeader: '[data-test-id="main-page-document-id-header"]',
  actionsHeader: '[data-test-id="main-page-actions-header"]',
  documentFileData: '[data-test-id="main-page-document-file-data"]',
  documentIdData: '[data-test-id="main-page-document-id-data"]',

  acceptButton: '[data-test-id="main-page-accept-button"]',
  rejectButton: '[data-test-id="main-page-reject-button"]',

  termsAndConditionsLabel: '[data-test-id="main-page-terms-and-conditons-label"]',
  homeButton: '[data-test-id="main-page-home-button"]',
  documentApprovedSnackbar: '[data-test-id="banner-document-approved-snackbar"]',
  acceptedTimeDateLabel: '[data-test-id="main-page-[accepted]-time-date-label"]',
  rejectingDocumentNameLabel: '[data-test-id="main-page-rejecting-document-name-label"]',
  pleaseEnterReasonLabel: '[data-test-id="main-page-please-enter-reason-label"]',
  reasonInput: '[data-test-id="main-page-reason-input-text"]',
  cancelButton: '[data-test-id="main-page-cancel-button"]',
  dialogRejectBtn: '[id^="reject-dialog-button"]',
  documentRejectedLabel: '[data-test-id="main-page-document-rejected-label"]',
  rejectedTimeDateSnackbar: '[data-test-id="banner-[rejected]-time-date-snackbar"]',
  submitDocumentsMessageLabel: '[data-test-id="main-page-submit-documents-to-bank-message-label"]',
  okButton: '[data-test-id="main-page-ok-button"]',
  documentsSubmittedSnackbar: '[data-test-id="banner-documents-have-been-submitted-snackbar"]'
};

export const initialSummaryLocators = {
  metrobankLogo: '[data-test-id="header-metrobank-logo-img"]',
  welcomeClientNameLabel: '[data-test-id="header-welcome-client-name-label"]',
  documentsStatusLabel: '[data-test-id="main-page-documents-has-been-processed-label"]',
  moseRefNoLabel: '[data-test-id="main-page-mose-ref-no-label"]',
  fileNameHeader: '[data-test-id="main-page-file-name-header"]',
  transactionDateHeader: '[data-test-id="main-page-uploaded-date-header"]',
  statusHeader: '[data-test-id="main-page-status-header"]',
  documentFileData: '[data-test-id="main-page-document-file-data-"]',
  transactionDateData: '[data-test-id="main-page-uploaded-date-data-"]',
  acceptedRejectedDateTimeData: '[data-test-id="main-page-accepted-rejected-date-time-data-"]',
  documentIdData: '[data-test-id="main-page-document-id-data-"]',
  homeButton: '[data-test-id="main-page-home-button"]'
};

export const clientSummaryLocators = {
  metrobankLogo: '[data-test-id="header-metrobank-logo-img"]',
  welcomeClientNameLabel: '[data-test-id="header-welcome-client-name-label"]',
  moseRefNoLabel: '[data-test-id="main-page-mose-ref-no-label"]',
  transactionDateLabel: '[data-test-id="main-page-transaction-date-label"]',
  arrowApprovedBtn: '[data-test-id="main-page-arrow-approved-button"]',
  approvedDocumentsLabel: '[data-test-id="main-page-documents-that-have-been-approved-label"]',
  fileNameApprovedHeader: '[data-test-id="main-page-filename-approved-header"]',
  uploadDateApprovedHeader: '[data-test-id="main-page-uploaded-date-approved-header"]',
  statusHeader: '[data-test-id="main-page-status-header"]',
  fileNameApprovedData: '[data-test-id="main-page-filename-approved-data"]',
  uploadDateApprovedData: '[data-test-id="main-page-uploaded-date-approved-data"]',
  statusData: '[data-test-id="main-page-status-data"]',
  arrowOriginalBtn: '[data-test-id="main-page-arrow-original-button"]',
  originalDocsSentLabel: '[data-test-id="main-page-original-documents-sent-label"]',
  documentSentLabel: '[data-test-id="main-page-documents-sent-prior-approval-label"]',
  fileNameOriginalHeader: '[data-test-id="main-page-filename-original-header"]',
  uploadDateOriginalHeader: '[data-test-id="main-page-uploaded-date-original-header"]',
  docIdOriginalHeader: '[data-test-id="main-page-document-id-original-header"]',
  fileNameOriginalData: '[data-test-id="main-page-filename-original-data"]',
  uploadDateOriginalData: '[data-test-id="main-page-uploaded-date-original-data"]',
  docIdOriginalData: '[data-test-id="main-page-document-id-original-data"]',
  homeButton: '[data-test-id="main-page-home-button"]'
};