import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { parseAssertions } from '../../../support/utilities/assertionUtils';
import { Loader } from '../../../pages/globalMethods';
import { NewTransactionModulePage as Transaction, TMakerDashboardPage as TDashboard, commonDashboardPage as Dashboard } from '../../../pages'

const loader = new Loader()

When('I click New Transaction in the sidebar', () => {
  loader.checkLoading();
  TDashboard.clickNewTransactionDropdown();
})

Then('I click {string} transaction', (transType) => {
  transType === 'Retail'
    ? TDashboard.clickRetailOptions()
    : transType === 'Corporate'
      ? TDashboard.clickCorporateOptions()
      : cy.log('Invalid transaction type')
})

Then('I select {string} product', (product) => {
  Transaction.clickProductTypeDropdown()
  switch (product) {
    case 'ASWAP':
      Transaction.clickAssetSwapOption()
      break
    case 'COCDS':
      Transaction.CreditDefaultSwapOption()
      break
    case 'CCHSD':
      Transaction.CrossCurrencySwapOption()
      break
    case 'DPPHP':
      Transaction.DepositPlusFxAgainstPhpOption()
      break
    case 'DPTRD':
      Transaction.DepositPlusThirdCurrencyOption()
      break
    case 'FXOSO':
      Transaction.DerivativeTermsheetRdsOnlyOption()
      break
    case 'PFXOP':
      Transaction.DerivativeWithOrderAtExpiryOption()
      break
    case 'FWDHD':
      Transaction.FxForwardOption()
      break
    case 'FXOBO':
      Transaction.FxOptionOption()
      break
    case 'EPFXT':
      Transaction.FxSpotOption()
      break
    case 'EPFXB':
      Transaction.FxSpotAndFixedIncomeOption()
      break
    case 'FFXSW':
      Transaction.FxSwapOption()
      break
    case 'FIREG':
      Transaction.FixedIncomeOption()
      break
    case 'INTRS':
      Transaction.InterestRateSwapOption()
      break
    case 'LEINV':
      Transaction.LeverageForInvestorsOption()
      break
    case 'TDCTD':
      Transaction.MbChinaTimeDepositOption()
      break
    case 'ONNDF':
      Transaction.NonDeliverableForwardOption()
      break
    case 'MBCLH':
      Transaction.NonDeliverableSwapOption()
      break
    case 'GBBSP':
      Transaction.StructuredProductGpnBookBuildingOrderOption()
      break
    case 'GPNSP':
      Transaction.StructuredProductGlobalPesoNoteOption()
      break
    case 'SPROD':
      Transaction.StructuredProductsOption()
      break
    case 'TDPRT':
      Transaction.TreasuryTimeDepositOption()
      break
    case 'UNSEC':
      Transaction.UnwideAssetSwapOption()
      break
    case 'UNTDL':
      Transaction.UnwindDepositPlusOption()
      break
    case 'UWCFF':
      Transaction.UnwindFixedIncomeAndStandaloneDerivativeOption()
      break
    case 'UNWSP':
      Transaction.UnwindStructuredProductOption()
      break
  }
})

Then('I select Value Date', () => {
  Transaction.clickValueDateDropdown()
  cy.get('.react-datepicker__day--today').click()
})

Then('I input the {string} mnemonic and press enter', (mnemonic: string) => {
  Transaction.mnemonicInput().type(`${mnemonic}{enter}`)
})

Then('I select {string} as approver rule', (approverrule: string) => {

  switch (approverrule.toUpperCase()) {

    case '1A, 1B':
      Transaction.clickApproverRuleDropdown()
      cy.get('[role="listbox"]')
        .contains('1A, 1B')
        .click();
      break;

    case '1A':
      Transaction.clickApproverRuleDropdown()
      cy.get('[role="listbox"]')
        .contains('1A')
        .click();
      break;

    case '1B':
      Transaction.clickApproverRuleDropdown()
      cy.get('[role="listbox"]')
        .contains('1B')
        .click();
      break;

    case '1C':
      Transaction.clickApproverRuleDropdown()
      cy.get('[role="listbox"]')
        .contains('1C')
        .click();
      break;

  }
});

Then('I click {string} as my approvers', (approvers: string) => {

  switch (approvers.toUpperCase()) {
    case 'ALL':
      [0, 1].forEach(set => {
        cy.get('[style="display: block;"] span [type="checkbox"]')
          .eq(set)
          .each($checkbox => cy.wrap($checkbox).click());
      });
      break;

    case 'DARRYLL':
      cy.get('[style="display: block;"] span [type="checkbox"]')
        .eq(0)
        .click()

      break;

    case 'ALLAN':
      cy.get('[style="display: block;"] span [type="checkbox"]')
        .eq(1)
        .click()

      break;

    case 'MIGS':
      cy.get('[style="display: block;"] span [type="checkbox"]')
        .eq(2)
        .click()

      break;

    default:
      cy.log('There is no existing approver with this mnemonic');
  }
})

Then('I want {string} as my approvers', (approvers: string) => {
  switch (approvers.toUpperCase()) {
    case 'ALL':
      ['A', 'B'].forEach(set => {
        Transaction.approverSetTable(set)
          .find('input[type="checkbox"]')
          .each($checkbox => cy.wrap($checkbox).click());
      });
      break;

    case 'ALLAN':
      Transaction.approverSetTable('A')
        .find('input[type="checkbox"]')
        .click();
      break;

    case 'DARRYLL':
      Transaction.approverSetTable('B')
        .find('input[type="checkbox"]')
        .click();
      break;

    default:
      cy.log('There is no existing approver with this mnemonic');
  }
})

Then('I want {string} as my dealers', (dealers: string) => {

  switch (dealers.toUpperCase()) {
    case 'ALL':
      ['A', 'B'].forEach(set => {
        Transaction.authorizedDealerSetTable(set)
          .find('input[type="checkbox"]')
          .each($checkbox => cy.wrap($checkbox).click());
      });
      break;

    case 'ALLAN':
      Transaction.authorizedDealerSetTable('A')
        .find('input[type="checkbox"]')
        .click();
      break;

    case 'DARRYLL':
      Transaction.authorizedDealerSetTable('B')
        .find('input[type="checkbox"]')
        .click();
      break;

    default:
      cy.log('There is no existing authorized dealer with this mnemonic');
  }
})

Then('I upload the Documents for the {string} mnemonic', (mnemonic: string) => {

  Transaction.uploadFileButton().each(($el, index) => {
    const fileName = `${mnemonic}${index}.pdf`
    const filePath = `cypress/support/fixtures/${fileName}`

    cy.task('renamePdf', { mnemonic, index }).then(() => {
      cy.wrap($el).click()
      cy.get('input[id="documentPath"]').eq(index).selectFile(filePath, { force: true })
      //Transaction.remarksInputText().eq(index).type("DAT test remarks")
    })
  })
})

Then("Input {string} as remarks", (remarks: string) => {

  Transaction.remarksInputText().each(($el, index) => {
    cy.wrap($el).click()
    Transaction.remarksInputText().eq(index).type(remarks)
  })
})

Then('I click the Send Button', () => {
  loader.checkLoading()
  Transaction.clickSendButton()
})

Then('I click the clear button', () => {
  Transaction.clickClearButton()
})

//ASSERTIONS
Then('I want to check the {string} if its successful', (component: string, dataTable: DataTable) => {
  loader.checkLoading()
  component == 'Snackbar'
    ? cy.trackMultipleAssertion(cy.get('div[role="alertdialog"]'),parseAssertions(dataTable)) : 'None'
})

Then('I check the state of the {string} button', (button: String, dataTable: DataTable) => {

  switch (button.toUpperCase()) {
    case 'SEND':
      cy.trackMultipleAssertion(cy.get('[data-test-id="sidebar-send-button"] svg'),
        parseAssertions(dataTable))

      break;

    case 'UPLOAD':

      cy.trackMultipleAssertion(Transaction.uploadFileButton().each(($el, index) => {
        cy.wrap($el)
        Transaction.uploadFileButton().eq(index)
      }),
        parseAssertions(dataTable))
      break;

    case 'CLEAR':
      cy.trackMultipleAssertion(Transaction.clearButton(),
        parseAssertions(dataTable))

      break;
  }

})

Then('the {string} should be disabled', (textbox, dataTable: DataTable) => {

  switch (textbox) {
    case 'Mose Ref No':
      cy.trackMultipleAssertion(Transaction.moseRefNoInput(),
        parseAssertions(dataTable))
      break;

    case 'Client Name':
      cy.trackMultipleAssertion(Transaction.clientNameInput(),
        parseAssertions(dataTable))
      break;

    case 'Branch Code':
      cy.trackMultipleAssertion(Transaction.branchCodeInput(),
        parseAssertions(dataTable))
      break;

    case 'Branch Mnemonic':
      cy.trackMultipleAssertion(Transaction.branchMnemonicInput(),
        parseAssertions(dataTable))
      break;

    case 'Threshold':
      cy.trackMultipleAssertion(Transaction.thresholdInput(),
        parseAssertions(dataTable))
      break;
  }

  cy.trackMultipleAssertion(cy.get('#transRefNo'), //Transaction.moseRefNoInput()
    parseAssertions(dataTable))
})

Then('all form fields should be empty', (dataTable: DataTable) => {

  cy.trackMultipleAssertion(Transaction.mnemonicInput(),
    parseAssertions(dataTable))
  cy.trackMultipleAssertion(Transaction.clientNameInput(),
    parseAssertions(dataTable))
  cy.trackMultipleAssertion(Transaction.branchCodeInput(),
    parseAssertions(dataTable))
  cy.trackMultipleAssertion(Transaction.branchMnemonicInput(),
    parseAssertions(dataTable))
  cy.trackMultipleAssertion(Transaction.thresholdInput(),
    parseAssertions(dataTable))

})

Then('all select options are empty', (dataTable: DataTable) => {
  cy.trackMultipleAssertion(cy.get('#selectedDocument-simple'),
    parseAssertions(dataTable))

  cy.trackMultipleAssertion(Transaction.valueDateDropdown(),
    parseAssertions(dataTable))

})