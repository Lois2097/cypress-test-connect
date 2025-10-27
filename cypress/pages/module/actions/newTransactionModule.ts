import { NewTransaction, products, newRetail,newCorporate,afterAction,afterActionRetail,afterActionCorp} from '../../../locators/newTransaction'

export const NewTransactionModulePage = {
  // Texts
  marketSalesTitle: () => cy.get(NewTransaction.marketSalesTitle),
  retailAccountsLabel: () => cy.get(newRetail.retailAccountsText),
  corporateAccountLabel: () => cy.get(newCorporate.corporateAccountsText),
  moseRefNoText: () => cy.get(NewTransaction.moseRefNoText),
  selectTypeLabel: () => cy.get(newRetail.selectTypeText),
  documentRadioLabel: () => cy.get(newRetail.documentText),
  selectProductTypeLabel: () => cy.get(NewTransaction.selectProductTypeText),
  valueDateLabel: () => cy.get(NewTransaction.valueDateText),
  mnemonicLabel: () => cy.get(NewTransaction.mnemonicText),
  clientNameLabel: () => cy.get(NewTransaction.clientNameText),
  clientEmailLabel: () => cy.get(newRetail.clientEmailText),
  clientMobileNoLabel: () => cy.get(newRetail.clientMobileNoText),
  branchCodeLabel: () => cy.get(NewTransaction.branchCodeText),
  branchMnemonicLabel: () => cy.get(NewTransaction.branchMnemonicText),
  documentNameText: () => cy.get(afterAction.documentNameText),
  selectDocumentText: () => cy.get(afterActionRetail.selectDocumentText),
  thresholdLabel: () => cy.get(afterActionCorp.thresholdText),
  approverRuleLabel: () => cy.get(afterAction.approverRuleText),

  // Buttons
  previousPageButton: () => cy.get(NewTransaction.previousPageButton),
  sendButton: () => cy.get(NewTransaction.sendSubmit),
  clearButton: () => cy.get(NewTransaction.clearButton),
  productRadioButton: () => cy.get(newRetail.productRadio),
  documentRadioButton: () => cy.get(newRetail.documentRadio),
  uploadFileButton: () => cy.get(afterAction.uploadFileButton),
  //previousYearSelectButton: () => cy.get(NewTransaction.previousYearSelectButton),
  // nextYearSelectButton: () => cy.get(NewTransaction.nextYearSelectButton),

  // Input Box
  moseRefNoInput: () => cy.get(NewTransaction.moseRefNoInput),
  mnemonicInput: () => cy.get(NewTransaction.mnemonicInput),
  clientNameInput: () => cy.get(NewTransaction.clientNameInput),
  // clientEmailInput: () => cy.get(NewTransaction.clientEmailInput),
  // clientMobileNoInput: () => cy.get(NewTransaction.clientMobileNoInput),
  branchCodeInput: () => cy.get(NewTransaction.branchCodeInput),
  branchMnemonicInput: () => cy.get(NewTransaction.branchMnemonicInput),
  fileNameInput: () => cy.get(afterAction.fileNameInput),
  remarksInput: () => cy.get(afterAction.remarksInput),
  thresholdInput: () => cy.get(afterActionCorp.thresholdInput),

  // Dropdown
  productTypeDropdown: () => cy.get(NewTransaction.productTypeDropdown),
  // documentDropdown: () => cy.get(NewTransaction.documentDropdown),
  approverRuleDropdown: () => cy.get(afterAction.approverRuleDropdown),
  valueDateDropdown: () => cy.get(afterAction.valueDateDropdown),

  //Options
  assetSwapOption: () => cy.get(products.assetSwapOption),
  creditDefaultSwapOption: () => cy.get(products.creditDefaultSwapOption),
  crossCurrencySwapOption: () => cy.get(products.crossCurrencySwapOption),
  depositPlusFxAgainstPhpOption: () => cy.get(products.depositPlusFxAgainstPhpOption),
  depositPlusThirdCurrencyOption: () => cy.get(products.depositPlusThirdCurrencyOption),
  derivativeTermsheetRdsOnlyOption: () => cy.get(products.derivativeTermsheetRdsOnlyOption),
  derivativeWithOrderAtExpiryOption: () => cy.get(products.derivativeWithOrderAtExpiryOption),
  fxForwardOption: () => cy.get(products.fxForwardOption),
  fxOptionOption: () => cy.get(products.fxOptionOption),
  fxSpotOption: () => cy.get(products.fxSpotOption),
  fxSpotAndFixedIncomeOption: () => cy.get(products.fxSpotAndFixedIncomeOption),
  fxSwapOption: () => cy.get(products.fxSwapOption),
  fixedIncomeOption: () => cy.get(products.fixedIncomeOption),
  interestRateSwapOption: () => cy.get(products.interestRateSwapOption),
  leverageForInvestorsOption: () => cy.get(products.leverageForInvestorsOption),
  mbChinaTimeDepositOption: () => cy.get(products.mbChinaTimeDepositOption),
  nonDeliverableForwardOption: () => cy.get(products.nonDeliverableForwardOption),
  nonDeliverableSwapOption: () => cy.get(products.nonDeliverableSwapOption),
  structuredProductGpnBookBuildingOrderOption: () => cy.get(products.structuredProductGpnBookBuildingOrderOption),
  structuredProductGlobalPesoNoteOption: () => cy.get(products.structuredProductGlobalPesoNoteOption),
  structuredProductsOption: () => cy.get(products.structuredProductsOption),
  treasuryTimeDepositOption: () => cy.get(products.treasuryTimeDepositOption),
  unwideAssetSwapOption: () => cy.get(products.unwindAssetSwapOption),
  unwindDepositPlusOption: () => cy.get(products.unwindDepositPlusOption),
  unwindFixedIncomeAndStandaloneDerivativeOption: () => cy.get(products.unwindFixedIncomeAndStandaloneDerivativeOption),
  unwindStructuredProductOption: () => cy.get(products.unwindStructuredProductOption),
  datePickerPopperOption: () => cy.get(NewTransaction.datePickerPopperOption),
  //suitabilityAssessmentFormLetterOfAppointmentOption: () => cy.get(NewTransaction.suitabilityAssessmentFormLetterOfAppointmentOption),

  //Table
  requiredDocumentsTable: () => cy.get(NewTransaction.requiredDocumentsTable),
  //authorizedDealerCategoryATable: () => cy.get(afterActionCorp.authorizedDealerCategoryATable),
  //authorizedDealerCategoryBTable: () => cy.get(NewTransaction.authorizedDealerCategoryBTable),
  // approverSetATable: () => cy.get(NewTransaction.approverSetATable),
  // approverSetBTable: () => cy.get(NewTransaction.approverSetBTable),

  //Table Header
  requireddocumentsTableHeader: () => cy.get(NewTransaction.requiredDocumentsTableHeader),
  uploadFilesTableHeader: () => cy.get(NewTransaction.uploadFilesTableHeader),
  remarksTableHeader: () => cy.get(NewTransaction.remarksTableHeader),
  nameTableHeader: () => cy.get(afterAction.nameTableHeader),
  emailAddressTableHeader: () => cy.get(afterAction.emailAddressTableHeader),
  mobileNumberTableHeader: () => cy.get(afterAction.mobileNumberTableHeader),

  //Table Row
  requiredDocumentsTableRow: (id: number) => cy.get(`${afterAction.requiredDocumentsTableRow}${id}'`),
  authorizedDealerSetTable: (letter: string) => cy.get(afterActionCorp.authorizedDealerSetTable(letter)),
  approverSetTable: (letter:string) => cy.get(afterActionCorp.approverSetTable(letter)),
  // remarksInputText: (index:number)  => cy.get(afterActionCorp.remarksInputText(index)),
  remarksInputText: ()  => cy.get(afterActionCorp.remarksInputText),
  

  //Test-id A
  //approverSetTable: (id: string) => cy.get(`${afterAction.approverSetTable}${id}'`),
  approverSetTableRow: (id: string) => cy.get(`${afterAction.approverSetTableRow}${id}'`),

  // approverSetATableRow: (id: number) => cy.get(`${afterAction.approverSetATableRow}${id}'`),
  // approverSetBTableRow: (id: number) => cy.get(`${NewTransaction.approverSetBTableRow}${id}'`),
  // approverSetTableRow: (id: number) => cy.get(`${NewTransaction.approverSetBTableRow}${id}'`),

  //Table Cell Data
  nameTableData: (id: number) => cy.get(`${afterAction.nameTableData}${id}'`),
  emailAddressTableData: (id: number) => cy.get(`${afterAction.emailAddressTableData}${id}'`),
  mobileNumberTableData: (id: number) => cy.get(`${afterAction.mobileNumberTableData}${id}'`),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  typeMoseRefNoInput: (input: string) => cy.get(NewTransaction.moseRefNoInput).type(input),
  typeMnemonicInput: (input: string) => cy.get(NewTransaction.mnemonicInput).type(input),
  typeClientNameInput: (input: string) => cy.get(NewTransaction.clientNameInput).type(input),
  // typeClientEmailInput: (input: string) => cy.get(NewTransaction.clientEmailInput).type(input),
  // typeClientMobileNoInput: (input: string) => cy.get(NewTransaction.clientMobileNoInput).type(input),
  typeBranchCodeInput: (input: string) => cy.get(NewTransaction.branchCodeInput).type(input),
  typeBranchMnemonicInput: (input: string) => cy.get(NewTransaction.branchMnemonicInput).type(input),
  typeFileNameInput: (input: string) => cy.get(afterAction.fileNameInput).type(input),
  typeRemarksInput: (input: string) => cy.get(afterAction.remarksInput).type(input),
  typeThresholdInput: (input: string) => cy.get(afterActionCorp.thresholdInput).type(input),

  clickProductTypeDropdown: () => cy.get(NewTransaction.productTypeDropdown).click(),
  // clickDocumentDropdown: () => cy.get(NewTransaction.documentDropdown).click(),
  clickApproverRuleDropdown: () => cy.get(afterAction.approverRuleDropdown).click(),
  clickValueDateDropdown: () => cy.get(afterAction.valueDateDropdown).click(),

  clickPreviousPageButton: () => cy.get(NewTransaction.previousPageButton).click(),
  clickSendButton: () => cy.get(NewTransaction.sendSubmit).click(),
  clickClearButton: () => cy.get(NewTransaction.clearButton).click(),
  // clickProductRadioButton: () => cy.get(NewTransaction.productRadio).click(),
  // clickDocumentRadioButton: () => cy.get(NewTransaction.documentRadio).click(),
  clickUploadFileButton: () => cy.get(afterAction.uploadFileButton).click(),
  // clickPreviousYearSelectButton: () => cy.get(NewTransaction.previousYearSelectButton).click(),
  // clickNextYearSelectButton: () => cy.get(NewTransaction.nextYearSelectButton).click(),

  clickAssetSwapOption: () => cy.get(products.assetSwapOption).click(),
  CreditDefaultSwapOption: () => cy.get(products.creditDefaultSwapOption).click(),
  CrossCurrencySwapOption: () => cy.get(products.crossCurrencySwapOption).click(),
  DepositPlusFxAgainstPhpOption: () => cy.get(products.depositPlusFxAgainstPhpOption).click(),
  DepositPlusThirdCurrencyOption: () => cy.get(products.depositPlusThirdCurrencyOption).click(),
  DerivativeTermsheetRdsOnlyOption: () => cy.get(products.derivativeTermsheetRdsOnlyOption).click(),
  DerivativeWithOrderAtExpiryOption: () => cy.get(products.derivativeWithOrderAtExpiryOption).click(),
  FxForwardOption: () => cy.get(products.fxForwardOption).click(),
  FxOptionOption: () => cy.get(products.fxOptionOption).click(),
  FxSpotOption: () => cy.get(products.fxSpotOption).click(),
  FxSpotAndFixedIncomeOption: () => cy.get(products.fxSpotAndFixedIncomeOption).click(),
  FxSwapOption: () => cy.get(products.fxSwapOption).click(),
  FixedIncomeOption: () => cy.get(products.fixedIncomeOption).click(),
  InterestRateSwapOption: () => cy.get(products.interestRateSwapOption).click(),
  LeverageForInvestorsOption: () => cy.get(products.leverageForInvestorsOption).click(),
  MbChinaTimeDepositOption: () => cy.get(products.mbChinaTimeDepositOption).click(),
  NonDeliverableForwardOption: () => cy.get(products.nonDeliverableForwardOption).click(),
  NonDeliverableSwapOption: () => cy.get(products.nonDeliverableSwapOption).click(),
  StructuredProductGpnBookBuildingOrderOption: () => cy.get(products.structuredProductGpnBookBuildingOrderOption).click(),
  StructuredProductGlobalPesoNoteOption: () => cy.get(products.structuredProductGlobalPesoNoteOption).click(),
  StructuredProductsOption: () => cy.get(products.structuredProductsOption).click(),
  TreasuryTimeDepositOption: () => cy.get(products.treasuryTimeDepositOption).click(),
  UnwideAssetSwapOption: () => cy.get(products.unwindAssetSwapOption).click(),
  UnwindDepositPlusOption: () => cy.get(products.unwindDepositPlusOption).click(),
  UnwindFixedIncomeAndStandaloneDerivativeOption: () => cy.get(products.unwindFixedIncomeAndStandaloneDerivativeOption).click(),
  UnwindStructuredProductOption: () => cy.get(products.unwindStructuredProductOption).click(),
  UatePickerPopperOption: () => cy.get(NewTransaction.datePickerPopperOption).click(),
  // SuitabilityAssessmentFormLetterOfAppointmentOption: () => cy.get(NewTransaction.suitabilityAssessmentFormLetterOfAppointmentOption).click(),

  clickRequiredDocumentsTableRow: (id: number) => cy.get(`${afterAction.requiredDocumentsTableRow}${id}'`).click(),
  //clickAuthorizedDealerTableRow: (id: string) => cy.get(`${afterActionCorp.authorizedDealerTableRow}${id}'`).click(),
  clickApproverSetATableRow: (id: number) => cy.get(`${afterAction.approverSetTableRow}${id}'`).click(),
  // clickApproverSetBTableRow: (id: number) => cy.get(`${NewTransaction.approverSetBTableRow}${id}'`).click(),
  // clickApproverSetTableRow: (id: number) => cy.get(`${NewTransaction.approverSetBTableRow}${id}'`).click(),
}
