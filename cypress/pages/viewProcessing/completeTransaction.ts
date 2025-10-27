import { Button, Loader, Filter } from "../globalMethods";

const button = new Button();
const loader = new Loader();
const filter = new Filter();

export class trxn {
    completeTransaction(action: string,mnemonic: string, count?: number, reference?: string, maker?: string) {
        switch (action) {
            case 'manual':
                this.manualComplete(mnemonic, count, reference, maker)
                break;
            case 'bulk':
                this.bulkComplete(mnemonic, count, reference, maker)
                break;
            default:
                break;
        }
    }

    manualComplete(mnemonic: string, count?: number, reference?: string, maker?: string) {
        let transactionType;
        let counter = 0;
        let stopFlag = false;
        let currentPage = 1;
        if (!count) { count = 1; }
        if (!reference) { reference = 'null' }
        if (!maker) { maker = 'null' }
        if (mnemonic.includes('DEVBAURE')) {
            transactionType = 'Retail'
        } else { transactionType = 'Corporate' }

        const tryCompleteTransaction = (nub: number = 0) => {
            if (stopFlag) {
                cy.log(`stopFlag!`);
                return;
            }

            cy.log(`📄 Page: ${currentPage}, Row Index: ${nub + 1}`);
            cy.log(`target : ${mnemonic} by ${maker} - ${counter + 1} / ${count}`);
            loader.checkLoading();


            //CHANGE TO LOCATOR
            cy.contains('View For Processing').parent('div').parent('div').then(($div) => {
                const isExpanded = $div.attr('aria-expanded') === 'true';

                if (isExpanded) {
                    cy.log('Expanded is true');
                    cy.contains(`${transactionType}`).click();
                } else {
                    cy.log('Expanded is false');
                    cy.contains('View For Processing').click();
                    cy.contains(`${transactionType}`).click();
                }

                loader.checkLoading();

                if (!mnemonic) {
                    filter.byReference(reference);
                } else {
                    filter.byMnemonic(mnemonic);
                }

                loader.checkLoading();

                cy.get('tr').then((tr) => {
                    stopFlag = tr.length <= 1;

                    if (stopFlag) {
                        cy.log(`No transaction found`);
                        return;
                    }

                    loader.checkLoading();
                    button.Pagination(25);
                    loader.checkLoading();

                    button.goNextPage(currentPage).then((success) => {
                        stopFlag = !success;

                        if (stopFlag) {
                            cy.log(`No More Pages Available`);
                            return;
                        }

                        loader.checkLoading();

                        cy.get(`tr`, { timeout: 0 }).then(($rows) => {
                            const filteredRows = $rows.filter((index, row) => {
                                const text = row.innerText;
                                cy.log(`${text.includes(mnemonic)} & ${text.includes(maker)} Or ${text.includes(reference)}`);
                                cy.log(`${(text.includes(mnemonic) && text.includes(maker)) || text.includes(reference)}`);

                                return ((text.includes(mnemonic) && text.includes(maker)) || text.includes(reference));
                            });

                            cy.log(`found ${filteredRows.length} matches`);

                            if (filteredRows.length > nub) {
                                cy.wrap(filteredRows.eq(nub)).click();
                                loader.checkLoading();

                                cy.contains('Complete Transaction').then(($btn) => {
                                    if ($btn.css('cursor') === 'not-allowed') {
                                        cy.log(`Transaction #${counter + 1} is not availble to complete. Trying next one.`);
                                        cy.get('header').children('div').children('button').click();
                                        tryCompleteTransaction(nub + 1);
                                    } else {
                                        cy.wrap($btn).click();
                                        loader.checkLoading();

                                        cy.contains('div', 'Confirm Submit Transaction')
                                            .parent('div')
                                            .within(() => {
                                                cy.contains('button', 'Ok').then((button) => {
                                                    const isHidden = button.is(':disabled');
                                                    cy.log(`Element is ${isHidden ? 'disabled' : 'not disabled'}`);

                                                    if (!isHidden) {
                                                        cy.contains('button', 'Ok').click();
                                                        loader.checkLoading();
                                                        cy.contains('button', 'Ok').click();
                                                        loader.checkLoading();
                                                        cy.log(`Transaction #${counter} has been completed successfully.`);
                                                    } else {
                                                        cy.get('textarea').eq(2).type('Automated Completion Process');
                                                        cy.contains('button', 'Ok').click();
                                                        loader.checkLoading();
                                                        cy.log(`Transaction #${counter} has been completed successfully.`);
                                                    }
                                                });
                                            });

                                        counter++;
                                        loader.checkLoading();
                                        cy.contains('button', 'Ok').click();
                                        if (counter >= count || currentPage === 5) {
                                            cy.log(`✅ Finished cancelling ${count} transactions.`);
                                            stopFlag = true;
                                            return;
                                        }
                                        tryCompleteTransaction(nub);
                                    }
                                });
                            } else {
                                cy.log(`No more matches on page ${currentPage}, clicking Next...`);
                                currentPage++;
                                nub = 0;
                                loader.checkLoading();
                                tryCompleteTransaction(nub);
                            }
                        });
                    });
                });
            });
        };
        tryCompleteTransaction();
    }

    bulkComplete(mnemonic: string, count?: number, reference?: string, maker?: string) {

    }
}