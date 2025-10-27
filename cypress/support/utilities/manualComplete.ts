import { Loader } from "../../pages/globalMethods";
import { TCViewTransactionPage, TViewTransactionPage } from "../../pages/module/actions/viewTransaction";
import { TCViewProcessingPage } from "../../pages/module/actions/viewProcessing";

const loader = new Loader()

export function ManualComplete(countParam: string, mnemonic: string, originator: string, referenceNo: string, product: string) {
    // Set default count to 1 if not provided
    const count = countParam ? parseInt(countParam) : 1;

    // Track how many transactions have been processed
    let processedCount = 0;

    // Track which matching row to process next
    let currentMatchIndex = 0;

    // Helper to clean up optional parameters
    const normalize = (val: string) =>
        val && val.trim() !== '' && val !== 'null' && val !== 'undefined' ? val.trim() : null;

    const originatorVal = normalize(originator);
    const referenceVal = normalize(referenceNo);
    const productVal = normalize(product);

    // Main recursive function to find and process matching rows
    const processMatchingRows = () => {
        loader.checkLoading();

        // Get all rows in the table
        cy.get('[data-test-id^="table-view-transaction"]').then(($rows) => {
            const matchingRows: JQuery<HTMLElement>[] = [];

            // Filter rows that match the given parameters
            $rows.each((_, row) => {
                if (_ === 0) return;
                // cy.log(`${productVal}`)
                const $row = Cypress.$(row);
                const rowMnemonic = $row.find('[data-test-id^="table-client-mnemonic-"]').text().trim();
                const rowOriginator = $row.find('[data-test-id^="table-originator-"]').text().trim();
                const rowReference = $row.find('[data-test-id^="table-mose-ref-no-"]').text().trim();
                const rowProduct = $row.find('[data-test-id^="table-product-"]').text().trim();
                // cy.log(`rowproduct: ${rowProduct}`)
                const matchesMnemonic = rowMnemonic.includes(mnemonic);
                const matchesOriginator = originatorVal ? rowOriginator.includes(originatorVal) : true;
                const matchesReference = referenceVal ? rowReference.includes(referenceVal) : true;
                const matchesProduct = productVal ? rowProduct.includes(productVal) : true;
                // cy.log(`match?: ${matchesProduct}`)

                // cy.log(`Matching row: Mnemonic=${rowMnemonic}, Originator=${rowOriginator}, Reference=${rowReference}, Product=${rowProduct}`);
                if (matchesMnemonic && matchesOriginator && matchesReference && matchesProduct) {
                    matchingRows.push($row);
                }
            });

            // Stop if we've processed enough
            if (processedCount >= count) {
                cy.log(`Processed ${processedCount} transactions. Done.`);
                return;
            }

            // If no matches found, try next page
            if (matchingRows.length === 0) {
                cy.log('No matching rows on this page. Trying next page...');
                tryNextPage();
                return;
            }



            // If we've reached the end of matches on this page, go to next page
            if (currentMatchIndex >= matchingRows.length) {
                cy.log('Reached end of matches on this page. Trying next page...');
                currentMatchIndex = 0;
                tryNextPage();
                return;
            }

            cy.log(`${matchingRows[currentMatchIndex].text()}`)
            // Click the matching row
            cy.wrap(matchingRows[currentMatchIndex])
                .scrollIntoView()
                .click()
                .then(() => {
                    loader.checkLoading()

                    // Check if the transaction is rejected
                    cy.get('[data-test-id^="main-page-status-text"]').then(($statusElements) => {
                        let allAccepted = true;

                        // Loop through each status element
                        $statusElements.each((_, el) => {
                            const statusValue = Cypress.$(el).attr('value')?.trim().toLowerCase();

                            // If any status is not 'accepted', mark as not accepted
                            if (statusValue !== 'accepted') {
                                allAccepted = false;
                                return false; // break out of .each() early
                            }
                        });

                        if (!allAccepted) {
                            cy.log('One or more statuses are not accepted. Skipping...');
                            TCViewTransactionPage.clickpreviousPageButton()
                        } else {
                            cy.log('All statuses are accepted. Processing transaction...');
                            // Perform manual complete actions
                            TCViewTransactionPage.clickCompleteDocumentsButton()

                            TCViewTransactionPage.confirmSubmitTransactionOkButton().then((button) => {
                                const isHidden = button.is(':disabled');
                                cy.log(`Element is ${isHidden ? 'disabled' : 'not disabled'}`);

                                if (!isHidden) {
                                    TCViewTransactionPage.clickConfirmSubmitTransactionOkButton()
                                    loader.checkLoading();
                                    TCViewTransactionPage.clickcompletedTransactionOkButton()
                                    loader.checkLoading();
                                } else {
                                    TCViewTransactionPage.confirmSubmitTransactionRemarksInput().type('Automated Completion Process');
                                    TCViewTransactionPage.clickConfirmSubmitTransactionOkButton()
                                    loader.checkLoading();
                                    TCViewTransactionPage.clickcompletedTransactionOkButton()
                                }
                            });
                            processedCount++;
                        }

                        // Go back to the table and continue
                        cy.log(`${processedCount}`)
                        loader.checkLoading();
                        currentMatchIndex++;
                        processMatchingRows(); // Recurse
                    })
                });
        });
    };

    // Function to handle pagination
    const tryNextPage = () => {
        cy.get('[data-test-id="button-next-page-button"]').then(($btn) => {
            const isDisabled = $btn.attr('disabled') !== undefined;
            if (!isDisabled) {
                cy.wrap($btn).click().then(() => {
                    loader.checkLoading();
                    processMatchingRows(); // Recurse on next page
                });
            } else {
                cy.log('No more pages to check. Ending process.');
            }
        });
    };

    // Start the process
    processMatchingRows();
}