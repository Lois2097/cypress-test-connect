import * as dashboardPages from '../pages/module/actions/dashboard'
import { MnemonicDashboardPage } from '../pages/module/actions/dashboard'
import * as Login from '../locators/loginPage'
import * as Dashboard from '../locators/dashboard'
import * as CustomerMaintenance from '../locators/customerMaintenance'
import { NewTransaction, products, afterAction, newRetail, newCorporate } from '../locators/newTransaction'
import { viewTransaction ,transactionMaker, transactionMakerCancelModal, viewTransactionHistory} from '../locators/viewTransaction'


export class Button {
  isClicked(button: string) {
    cy.contains('button', `${button}`).click()
  }

  Pagination(num: number) {
    cy.contains('Rows').parent('div').children('div').eq(1).click()
    cy.get(`li[data-value="${num}"]`).click()
  }

  goNextPage(count: number): Cypress.Chainable<boolean> {
    let success = true;

    const iterate = (i: number): Cypress.Chainable => {
      cy.log(`${i} vs ${count}`)
      if (i >= count) {
        return cy.wrap(success);
      }

      loader.checkLoading();

      return cy.get('button[aria-label="Next Page"]').then($nextBtn => {
        if ($nextBtn.is(':disabled')) {
          cy.log('No more pages to check.');
          success = false;
          return cy.wrap(success);
        }

        cy.wrap($nextBtn).click();
        return iterate(i + 1);
      });
    };

    return iterate(1);
  }


}

export class Loader {
  checkLoading() {
    return cy.get('div[role="progressbar"]', { timeout: 30000 }).should('not.exist')
  }
}

export class Filter {
  byMnemonic(mnc: string) {
    cy.get('input[id="selectedFilter-simple"]').parent().click()
    cy.get('li[data-value="customerId"]').click()
    cy.get('input[id="filterText"]').clear().type(`${mnc}{enter}`)
  }

  byStatus(status: string) {
    cy.get('input[id="selectedFilter-simple"]').parent().click()
    cy.get('li[data-value="status"]').click()
    cy.get('input[id="filterText"]').clear().type(`${status}{enter}`)
  }

  byClient(client: string) {
    // insert logic here
  }

  byReference(reference: string) {
    cy.get('input[id="selectedFilter-simple"]').parent().click()
    cy.get('li[data-value="transactionId"]').click()
    cy.get('input[id="filterText"]').clear().type(`${reference}{enter}`)
  }

  byProduct(product: string) {
    // insert logic here
  }

  byBranch(branch: string) {
    // insert logic here
  }

  byBranchMnc(branchMnc: string) {
    // insert logic here
  }

  byOrigin(Origin: string) {
    // insert logic here
  }
}

const loader = new Loader();

export class locators {
  locatorMap: Record<string, any> = {
    Login: Login.Login,
    commonDashboard: Dashboard.commonDashboard,
    TMakerDashboard: Dashboard.TMakerDashboard,
    TCheckerDashboard: Dashboard.TCheckerDashboard,
    NewTransaction: NewTransaction,
    products: products,
    afterAction: afterAction,
    newRetail: newRetail,
    newCorporate: newCorporate,
    viewTransaction: viewTransaction,
    transactionMaker:transactionMaker,
    transactionMakerCancelModal:transactionMakerCancelModal,
    viewTransactionHistory:viewTransactionHistory,

  };

  checker(locatorKey: string) {
    const locatorObj = this.locatorMap[locatorKey];
    loader.checkLoading()

    if (!locatorObj) {
      cy.log(`⚠️ Locator object "${locatorKey}" not found.`);
      return;
    }

    cy.log(`🔍 Checking locators in: ${locatorKey}`);

    Object.entries(locatorObj).forEach(([key, selector]) => {
      cy.get('body').then(($body) => {
        if ($body.find(`${selector}`).length > 0) {
          cy.get(`${selector}`)
        } else {
          cy.log(`❌ "${key}" with selector "${selector}" does NOT exist.`);

          cy.writeFile(
            'cypress/logs/missing-locators.txt',
            `${locatorKey} | ${key} | ${selector} NOT FOUND\n`,
            { flag: 'a+' }
          );

        }
      });
    });
  }
}