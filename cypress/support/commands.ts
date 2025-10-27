/// <reference types="cypress" />

// Assertion Counter //
// DAT- AP

let assertionCount = 0;
let totalAssertCount = 0;
let passedAssertCount = 0;
let skippedAssertCount = 0;
let failedAssertCount = 0;


Cypress.Commands.add("trackAssertion", () => {
  assertionCount++;
  passedAssertCount++;
  skippedAssertCount--;
});

Cypress.Commands.add("addTotalAssertion", (assertions: number) => {
  totalAssertCount = totalAssertCount + assertions;
  skippedAssertCount = skippedAssertCount + assertions;
});


Cypress.Commands.add("getAssertionCount", () => {

  const assertCount = [
    assertionCount,
    totalAssertCount,
    passedAssertCount,
    skippedAssertCount,
    failedAssertCount
  ];

  return cy.wrap(assertCount);
});

Cypress.Commands.add("resetAssertionCount", () => {
  assertionCount = 0;
  totalAssertCount = 0;
  passedAssertCount = 0;
  skippedAssertCount = 0;
  failedAssertCount = 0;
});


Cypress.Commands.add("addFailedOutsideAssertion", () => {
  totalAssertCount++;
  failedAssertCount++;
});

Cypress.Commands.add("addFailedAssertion", () => {
  failedAssertCount++;
  passedAssertCount--;
});


// DAT- AP

Cypress.Commands.add('trackMultipleAssertion', (
  target: string | Cypress.Chainable<JQuery<HTMLElement>> | Cypress.Chainable<any>,
  assertions: Array<[string, any?, any?]>
) => {

  cy.log(`Assertion Count: ${assertionCount}`);
  cy.log(`Total Assertions: ${totalAssertCount}`);
  cy.log(`Passed Assertions: ${passedAssertCount}`);
  cy.log(`Skipped Assertions: ${skippedAssertCount}`);
  cy.log(`Failed Assertions: ${failedAssertCount}`);

  cy.log(`length ${assertions.length}`)

  cy.addTotalAssertion(assertions.length);

  const isElement = typeof target === 'string' || Cypress.dom.isJquery(target);
  const element = typeof target === 'string' ? cy.get(target) : target;

  assertions.forEach(([assertion, value1, value2]) => {
    cy.trackAssertion();
    if (isElement) {
      if (value2 !== undefined) {
        element.should(assertion, value1, value2)
      } else if (value1 !== undefined) {
        element.should(assertion, value1)
      } else {
        element.should(assertion);
      }
    } else {
      // For API response or other objects
      value1 !== undefined
        ? target.should(assertion, value1)
        : target.should(assertion);
    }
  });
});



// Declaration //
declare namespace Cypress {
    interface Chainable {
        trackMultipleAssertion(
            target: string | Cypress.Chainable<JQuery<HTMLElement>> | Cypress.Chainable<any>,
            assertions: Array<[string, any?, any?]>
        ): void

        trackAssertion(): Chainable<void>;
        /**
         * Add Failed Outside Assertion
         */
        addFailedOutsideAssertion(): Chainable<void>;
        /**
         * Add Failed Outside Assertion
         */
        addFailedAssertion(): Chainable<void>;
        addPassedAssertion(): Chainable<void>;
        /**
         * Resets the assertion count.
         */
        resetAssertionCount(): Chainable<void>;
        /**
         * Disables animation and css styles
         */
        disableAnimations(): Chainable<void>;
        /**
          * Gets the current assertion count, total assertions, passed assertions and skipped assertions.
        */
        getAssertionCount(): Chainable<number[]>;
        /**
         * Performs total add assertions
         */
        addTotalAssertion(assertions: number): Chainable<any>;

    }

}