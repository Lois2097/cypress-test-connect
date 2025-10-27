// import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
// import { parseAssertions } from '../../../support/utilities/assertionUtils';
// import { Loader } from '../../../pages/globalMethods';
// import { commonDashboardPage, TransactionDashboardPage } from '../../../pages/module/actions/dashboard';
// import { TMViewTransactionPage, TViewTransactionPage } from '../../../pages/module/actions/viewTransaction';
// import { NewTransactionModulePage } from '../../../pages/module/actions/newTransactionModule';
// import { viewTransaction } from '../../../locators/viewTransaction';
// import { NewTransaction } from '../../../locators/newTransaction';


// const loader = new Loader()

// interface Product {
//     productName: string;
//     productCode: string;
//     requiredDocs: Array<string>
// }


// Then('I click the {string} Dropdown and select {string}', (dropdownSelector: string, dropdownOption: string) => {

//     switch (dropdownSelector) {
//         case "Filter By": {
//             TransactionDashboardPage.clickFilterByDropdown()
//             break
//         }
//         case "Client Type": {
//             TransactionDashboardPage.clickClientTypeDropdown()
//             break
//         }
//         case "Retail Client Type": {
//             commonDashboardPage.clickRetailClientTypeDropdown()
//             break
//         }
//         default: {
//             break
//         }
//     }
//     loader.checkLoading()
//     switch (dropdownOption) {

//         case "MOSE Ref No": {
//             TransactionDashboardPage.selectMoseRefNoOption()
//             break
//         }
//         case "Client Mnemonic": {
//             TransactionDashboardPage.selectClientMnemonicOption()
//             break
//         }
//         case "Client Name": {
//             TransactionDashboardPage.selectClientNameOption()
//             break
//         }
//         case "Product": {
//             TransactionDashboardPage.selectProductOption()
//             break
//         }
//         case "Status": {
//             TransactionDashboardPage.selectStatusOption()
//             break
//         }
//         case "Branch Code": {
//             TransactionDashboardPage.selectBranchCodeOption()
//             break
//         }
//         case "Branch Mnemonic": {
//             TransactionDashboardPage.selectBranchMnemonicOption()
//             break
//         }
//         case "Originator": {
//             TransactionDashboardPage.selectOriginatorOption()
//             break
//         }
//         case "All": {
//             commonDashboardPage.clickAllOption()
//             break
//         }
//         case "Retail": {
//             commonDashboardPage.clickRetailOption()
//             break
//         }
//         case "Corporate": {
//             commonDashboardPage.clickCorporateOption()
//             break
//         }

//         case "Individual Account": {
//             TransactionDashboardPage.selectIndividualAccountOption()
//             break
//         }
//         case "Joint Account": {
//             TransactionDashboardPage.selectJointAccountOption()
//             break
//         }
//         default: {
//             break;
//         }
//     }
//     loader.checkLoading()
// })

// Then('the {string} column should only contain {string}', (columnName: string, value: string, dataTable: DataTable) => {

//     let loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

//     TransactionDashboardPage.viewTransactionTable().find('tbody').get('tr').its('length').then((count) => {
//         for (let i = 0; i < count - 1; i++) {
//             //cy.get(`[data-test-id="table-${loc}-data-${i}"]`).should('have.text',value)
//             cy.trackMultipleAssertion(cy.get(`[data-test-id="table-${loc}-data-${i}"]`), parseAssertions(dataTable))
//         }

//     })
// })

// Then('I click on Search Button', () => {
//     cy.get("button[aria-label='Search']").click()
//     loader.checkLoading()
// })

// Then('I click {string}', (parameter: string) => {

//     switch (parameter) {
//         case "Cancel Transaction": {
//             TMViewTransactionPage.clickCancelDocumentsButton()
//             break
//         }
//         case "Ok button": {
//             TMViewTransactionPage.clickCancelTransactionOkButton()
//             break
//         }
//         case "Cancel button": {
//             TMViewTransactionPage.clickCancelTransactionCancelButton()
//             break
//         }
//         case "Upload New Document": {
//             TMViewTransactionPage.clickUploadNewDocumentsButton()
//             break
//         }
//         case "Send button": {
//             cy.wait(3000)
//             NewTransactionModulePage.clickSendButton()
//             break
//         }
//     }
//     loader.checkLoading()

// })

// Then('I amend a document', () => {
//     let rowCount = 0
//     let selector = 0
//     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {
//         rowCount = row.length
//         cy.log('Total Rows found: ' + rowCount)
//         selector = Math.floor((Math.random() * rowCount) + 1);
//         cy.get(`[data-test-id^='main-page-file-name-text-${selector}']`).invoke('val').then((txt) => {
//             let currentFileName = txt?.toString().slice(0, -4)
//             NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
//                 let mnemonic = txt
//                 cy.task('readAFile', `${mnemonic}${selector}.pdf`).then((cnt) => {
//                     if (cnt == null) {
//                         cy.task('duplicateAFile', `${currentFileName}+A`)
//                     }
//                 }).then(() => {
//                     cy.get(`[data-test-id='main-page-upload-file-button-${selector}']`).click()
//                     cy.get(`[data-test-id='main-page-upload-file-button-${selector}']`).next().find('input')
//                         .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
//                 })
//             })
//         })
//     })

// })

// Then('I insert a remark on Row # {string}', (selector: number, dataTable: DataTable) => {
//     let input = dataTable.rows()[0]
//     cy.get(`[data-test-id='main-page-remarks-text-${selector}']`).type(input[0])

// })

// Then('I insert a remark on the following documents: {string}', (parameter: string) => {

//     let documents: any
//     if (parameter == 'All') {
//         cy.task('readAJsonFile', 'cypress/support/fixtures/documents.json').then((content: any) => {
//             cy.log(content)
//             NewTransactionModulePage.moseRefNoInput().invoke('val').then((txt) => {
//                 let text = txt?.toString().slice(0, 5)
//                 const products: Product[] = content as Product[];
//                 const product: any = products.find((p) => p.productCode == text);
//                 const docLength = product.requiredDocs.length
//                 documents = []
//                 for (let z = 0; z < docLength; z++) {
//                     cy.log('current state: ' + z)
//                     const remarks = 'Fixed Comment'
//                     documents.push([product.requiredDocs[z], remarks])
//                 }
//             })
//         })
//     } else if (parameter.startsWith('[[')) {
//         documents = JSON.parse(parameter.replace(/\'/g, "\""))
//     } else if (parameter == '') {
//         documents = []
//     } else {
//         documents = []
//         let temp = [parameter, 'Fixed Comment']
//         documents.push(temp)
//     }

//     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {

//         for (let i = 1; i <= row.length; i++) {

//             for (let x = 0; x < documents.length; x++) {
//                 cy.get(`[data-test-id^='main-page-document-name-label-${i}']`).invoke('text').then((txt) => {
//                     let string = txt.toString()
//                     if (string.includes(documents[x][0])) {
//                         cy.get(`[data-test-id='main-page-remarks-text-${i}']`).type(documents[x][1])
//                     }
//                 })
//             }
//         }
//     })

// })

// // Then('I insert a remark on the following documents:', (dataTable: DataTable) => {

// //     let documents = dataTable.raw()
// //     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {

// //         for (let i = 1; i <= row.length; i++) {
// //             for (const item of documents) {
// //                 cy.get(`[data-test-id^='main-page-document-name-label-${i}']`).invoke('text').then((txt) => {
// //                     let string = txt.toString()
// //                     if (string.includes(item[0])) {
// //                         cy.get(`[data-test-id='main-page-remarks-text-${i}']`).type(item[1])
// //                     }
// //                 })
// //             }
// //         }
// //     })

// // })

// // Then('I insert a remark and amend the following documents:', (dataTable: DataTable) => {
// //     let documents = dataTable.raw()
// //     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {

// //         for (let i = 1; i <= row.length; i++) {
// //             for (const item of documents) {
// //                 cy.get(`[data-test-id^='main-page-document-name-label-${i}']`).invoke('text').then((txt) => {
// //                     let string = txt.toString()
// //                     if (string.includes(item[0])) {
// //                         cy.get(`[data-test-id^='main-page-file-name-text-${i}']`).invoke('val').then((txt) => {
// //                             let currentFileName = txt?.toString().slice(0, -4)
// //                             NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
// //                                 let mnemonic = txt
// //                                 cy.task('readAFile', `${mnemonic}${i}.pdf`).then((cnt) => {
// //                                     if (cnt == null) {
// //                                         cy.task('duplicateAFile', `${currentFileName}+A`)
// //                                     }
// //                                 }).then(() => {
// //                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).click()
// //                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).next().find('input')
// //                                         .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
// //                                 })
// //                                 cy.get(`[data-test-id='main-page-remarks-text-${i}']`).type(item[1])
// //                             })
// //                         })
// //                     }
// //                 })
// //             }
// //         }
// //     })
// // })

// Then('I insert a remark and amend the following documents: {string}', (parameter: string) => {

//     let documents: any
//     if (parameter == 'All') {
//         cy.task('readAJsonFile', 'cypress/support/fixtures/documents.json').then((content: any) => {
//             cy.log(content)
//             NewTransactionModulePage.moseRefNoInput().invoke('val').then((txt) => {
//                 let text = txt?.toString().slice(0, 5)
//                 const products: Product[] = content as Product[];
//                 const product: any = products.find((p) => p.productCode == text);
//                 const docLength = product.requiredDocs.length
//                 documents = []
//                 for (let z = 0; z < docLength; z++) {
//                     cy.log('current state: ' + z)
//                     const remarks = 'Fixed Comment'
//                     documents.push([product.requiredDocs[z], remarks])
//                 }
//             })
//         })
//     } else if (parameter.startsWith('[[')) {
//         documents = JSON.parse(parameter.replace(/\'/g, "\""))
//     } else if (parameter == '') {
//         documents = []
//     } else {
//         documents = []
//         let temp = [parameter, 'Fixed Comment']
//         documents.push(temp)
//     }


//     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {

//         for (let i = 1; i <= row.length; i++) {

//             for (let x = 0; x < documents.length; x++) {
//                 cy.get(`[data-test-id^='main-page-document-name-label-${i}']`).invoke('text').then((txt) => {
//                     let string = txt.toString()
//                     if (string.includes(documents[x][0])) {
//                         cy.get(`[data-test-id^='main-page-file-name-text-${i}']`).invoke('val').then((txt) => {
//                             let currentFileName = txt?.toString().slice(0, -4)
//                             NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
//                                 let mnemonic = txt
//                                 cy.task('readAFile', `${mnemonic}${i}.pdf`).then((cnt) => {
//                                     if (cnt == null) {
//                                         cy.task('duplicateAFile', `${currentFileName}+A`)
//                                     }
//                                 }).then(() => {
//                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).click()
//                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).next().find('input')
//                                         .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
//                                     cy.wait(3000)
//                                 })
//                                 cy.get(`[data-test-id='main-page-remarks-text-${i}']`).type(documents[x][1])
//                             })
//                         })
//                     }
//                 })
//             }
//         }
//     })
// })

// Then('I amend a document on Row # {string}', (selector: number) => {
//     let rowCount = 0
//     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {
//         rowCount = row.length
//         cy.log('Total Rows found: ' + rowCount)
//         cy.get(`[data-test-id^='main-page-file-name-text-${selector}']`).invoke('val').then((txt) => {
//             let currentFileName = txt?.toString().slice(0, -4)
//             NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
//                 let mnemonic = txt
//                 cy.task('readAFile', `${mnemonic}${selector}.pdf`).then((cnt) => {
//                     if (cnt == null) {
//                         cy.task('duplicateAFile', `${currentFileName}+A`)
//                     }
//                 }).then(() => {
//                     cy.get(`[data-test-id='main-page-upload-file-button-${selector}']`).click()
//                     cy.get(`[data-test-id='main-page-upload-file-button-${selector}']`).next().find('input')
//                         .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
//                     cy.wait(3000)
//                 })
//             })
//         })
//     })
// })

// Then('the latest status of the document {string} should have the following conditions:', (documentName: string, dataTable: DataTable) => {

//     var documents: string[]

//     if (documentName.startsWith('[[')) {

//         documents = JSON.parse(documentName.replace(/\'/g, "\""))

//     } else {

//         documents = []
//         documents.push(documentName)

//     }

//     loader.checkLoading()
//     TViewTransactionPage.documentInformationTable().then((tables) => {
//         for (let x = 0; x < tables.length; x++) {


//             for (let document of documents) {

//                 let txt = tables.eq(x).find('div').first().find('div').first().find('div').find('p').text()

//                 cy.log('Table Text = ' + txt)
//                 cy.log('Document Text = ' + document)
//                 if (txt?.toString().includes(document)) {
//                     cy.log('it matched').then(() => {
//                         cy.trackMultipleAssertion(cy.wrap(tables).eq(x).get('[data-test-id="main-page-status-text"]').first(), parseAssertions(dataTable))
//                     })

//                 } else {
//                     cy.log('no matchy')
//                 }
//             }
//         }
//     })
// })

// // Then('I amend the following documents:', (dataTable: DataTable) => {

// //     let documents = dataTable.raw()
// //     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {

// //         for (let i = 1; i <= row.length; i++) {
// //             for (const item of documents) {
// //                 cy.get(`[data-test-id^='main-page-document-name-label-${i}']`).invoke('text').then((txt) => {
// //                     let string = txt.toString()
// //                     if (string.includes(item[0])) {

// //                         cy.get(`[data-test-id^='main-page-file-name-text-${i}']`).invoke('val').then((txt) => {
// //                             let currentFileName = txt?.toString().slice(0, -4)
// //                             NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
// //                                 let mnemonic = txt
// //                                 cy.task('readAFile', `${mnemonic}${i}.pdf`).then((cnt) => {
// //                                     if (cnt == null) {
// //                                         cy.task('duplicateAFile', `${currentFileName}+A`)
// //                                     }
// //                                 }).then(() => {
// //                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).click()
// //                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).next().find('input')
// //                                         .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
// //                                 })
// //                             })
// //                         })
// //                     }
// //                 })
// //             }
// //         }
// //     })

// // })

// Then('I amend the following documents: {string}', (parameter: string) => {

//     let documents: any
//     if (parameter == 'All') {
//         cy.task('readAJsonFile', 'cypress/support/fixtures/documents.json').then((content: any) => {
//             cy.log(content)
//             NewTransactionModulePage.moseRefNoInput().invoke('val').then((txt) => {
//                 let text = txt?.toString().slice(0, 5)
//                 const products: Product[] = content as Product[];
//                 const product: any = products.find((p) => p.productCode == text);
//                 const docLength = product.requiredDocs.length
//                 documents = []
//                 for (let z = 0; z < docLength; z++) {
//                     documents.push([product.requiredDocs[z]])
//                 }
//             })
//         })
//     } else if (parameter.startsWith('[[')) {
//         documents = JSON.parse(parameter.replace(/\'/g, "\""))
//     } else {
//         documents = []
//         let temp = [parameter, 'Fixed Comment']
//         documents.push(temp)
//     }

//     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {

//         for (let i = 1; i <= row.length; i++) {

//             for (let x = 0; x < documents.length; x++) {

//                 cy.get(`[data-test-id^='main-page-document-name-label-${i}']`).invoke('text').then((txt) => {
//                     let string = txt.toString()
//                     if (string.includes(documents[x][0])) {

//                         cy.get(`[data-test-id^='main-page-file-name-text-${i}']`).invoke('val').then((txt) => {
//                             let currentFileName = txt?.toString().slice(0, -4)
//                             NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
//                                 let mnemonic = txt
//                                 cy.task('readAFile', `${mnemonic}${i}.pdf`).then((cnt) => {
//                                     if (cnt == null) {
//                                         cy.task('duplicateAFile', `${currentFileName}+A`)
//                                     }
//                                 }).then(() => {
//                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).click()
//                                     cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).next().find('input')
//                                         .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
//                                     cy.wait(3000)
//                                 })
//                             })
//                         })
//                     }
//                 })

//             }
//         }
//     })

// })

// Then('I amend {string} documents', (parameter: string) => {
//     let rowCount = 0
//     let documentCount = parseInt(parameter)
//     cy.get("[data-test-id^='main-page-upload-file-button-").then((row) => {
//         rowCount = row.length
//         cy.log('Total Rows found: ' + rowCount)
//         for (let i = 1; i <= documentCount; i++)
//             cy.get(`[data-test-id^='main-page-file-name-text-${i}']`).invoke('val').then((txt) => {
//                 let currentFileName = txt?.toString().slice(0, -4)
//                 NewTransactionModulePage.mnemonicInput().invoke('val').then((txt) => {
//                     let mnemonic = txt
//                     cy.task('readAFile', `${mnemonic}${i}.pdf`).then((cnt) => {
//                         if (cnt == null) {
//                             cy.task('duplicateAFile', `${currentFileName}+A`)
//                         }
//                     }).then(() => {
//                         cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).click()
//                         cy.get(`[data-test-id='main-page-upload-file-button-${i}']`).next().find('input')
//                             .selectFile(`cypress/support/fixtures/${currentFileName}` + "+A.pdf", { force: true })
//                         cy.wait(3000)
//                     })
//                 })
//             })
//     })
// })

// Then('I type {string} on the cancel remarks', (remarks: string) => {
//     TMViewTransactionPage.cancelTransactionRemarksInput().type(remarks)
// })

// Then('I cancel the transaction', () => {
//     TMViewTransactionPage.clickCancelDocumentsButton()
//     TMViewTransactionPage.cancelTransactionRemarksInput().type('Automated Cancellation Process')
//     TMViewTransactionPage.clickCancelTransactionOkButton()
//     loader.checkLoading()

// })

// Then('I open MOSE Ref No {string}', (parameter: string) => {

//     let clientType = ''

//     cy.visit('https://omni.metrobank.ph/sit/moses/cc/moshome')
//     loader.checkLoading()

//     cy.get('input[id="selectedFilter-simple"]').parent().click()
//     cy.get('li[data-value="transactionId"]').click()
//     cy.get('input[id="filterText"]').clear().type(`${parameter}{enter}`)

//     // TransactionDashboardPage.clickFilterByDropdown()
//     // TransactionDashboardPage.selectMoseRefNoOption()
//     // TransactionDashboardPage.typeSearchInput(parameter)
//     // cy.get("button[aria-label='Search']").click()
//     loader.checkLoading()

//     // TransactionDashboardPage.clientTypeTableData(0).then((cellData) => {
//     //     clientType = cellData.text();
//     // })

//     cy.get('table').find('tbody').get('tr').first().get('td').eq(11).then((cellData) => {
//         clientType = cellData.text();
//         cy.log("Client Type: " + clientType)


//         if (clientType.includes('RETAIL')) {
//             cy.visit(`https://omni.metrobank.ph/dev/moses/cc/transaction/view/${parameter}`)
//         } else {
//             cy.visit(`https://omni.metrobank.ph/dev/moses/cc/transaction/corporates/view/${parameter}`)
//         }
//         cy.wait(5000)
//     })

// })

// Then('I forcebly open MOSE Ref No {string}', (parameter: string) => {
//     cy.visit(`https://omni.metrobank.ph/dev/moses/cc/transaction/view/${parameter}`)

//     cy.get('body').then((content) => {
//         if (content.find('.h2:contains("Page Restricted.")').length > 0) {
//             cy.visit(`https://omni.metrobank.ph/dev/moses/cc/transaction/corporates/view/${parameter}`)
//         }
//     })

// })

// Then('I click on Row # {string}', (number: string) => {
//     let int = parseInt(number) - 1
//     TransactionDashboardPage.clickViewTransactionTableRow(int.toString())
//     loader.checkLoading()
// })

// Then('I click on a random row', () => {
//     TransactionDashboardPage.viewTransactionTable().find('tbody').get('tr').its('length').then((count) => {
//         let selector = Math.floor(Math.random() * (count - 2));
//         TransactionDashboardPage.clickViewTransactionTableRow(selector.toString())
//     })

// })

// Then('I click on a row with the following parameters:', (dataTable: DataTable) => {
//     // let tableRow = cy.get("[data-test-id^='table-view-transaction-row-")

//     // const data = dataTable.hashes()

//     // tableRow.each((row) => {

//     //     let matchedRow = true

//     //     for (const row of data) {
//     //         for (let i = 0; i < (tableRow as unknown as number); i++) {
//     //             let columnName = row["column"]
//     //             let columnData = row["value"]
//     //             let loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

//     //             cy.wrap(row).find(`[data-test-id="table-${loc}-data-${i}"]`).invoke('text').then((text) => {
//     //                 if (!text.includes(columnData)) {
//     //                     matchedRow = false;
//     //                 }
//     //             })
//     //         }
//     //     }

//     //     if (matchedRow) {
//     //         cy.wrap(row).click();
//     //         loader.checkLoading()
//     //         cy.wait(2000)
//     //     }

//     // })


//     // const data = dataTable.hashes()

//     // cy.get("[data-test-id^='table-view-transaction-row-']").then(($rows) => {
//     //     const rowCount = $rows.length

//     //     const checkRow = (i: number) => {
//     //         if (i >= rowCount) return // Stop if all rows are checked

//     //         let matchCount = 0

//     //         const checks = data.map((row) => {
//     //             const columnName = row["column"]
//     //             const columnData = row["value"]
//     //             const loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

//     //             return cy.get(`[data-test-id="table-${loc}-data-${i}"]`).invoke('text').then((text) => {
//     //                 if (text.trim() === columnData) {
//     //                     matchCount++
//     //                 }
//     //             })
//     //         })

//     //         // Wait for all checks to complete
//     //         cy.wrap(Promise.all(checks)).then(() => {
//     //             if (matchCount === data.length) {
//     //                 cy.get(`[data-test-id="table-view-transaction-row-${i}"]`).click()
//     //             } else {
//     //                 checkRow(i + 1) // Check next row
//     //             }
//     //         })
//     //     }

//     //     checkRow(0) // Start checking from the first row
//     // })


//     // const data = dataTable.hashes()

//     // function checkPageForMatch() {
//     //     cy.get("[data-test-id^='table-view-transaction-row-']").then(($rows) => {
//     //         const rowCount = $rows.length

//     //         const checkRow = (i: number) => {
//     //             if (i >= rowCount) {
//     //                 // No match found on this page, go to next page
//     //                 commonDashboardPage.nextPageButton().then(($nextBtn) => {
//     //                     if (!$nextBtn.is(':disabled')) {
//     //                         cy.wrap($nextBtn).click()
//     //                         loader.checkLoading()
//     //                         checkPageForMatch() // recurse to check next page
//     //                     } else {
//     //                         cy.log("No matching row found in any page.")
//     //                     }
//     //                 })
//     //                 return
//     //             }

//     //             let matchCount = 0
//     //             const checks = data.map((row) => {
//     //                 const columnName = row["column"]
//     //                 cy.log('Target Column = ' + columnName)
//     //                 const columnData = row["value"]
//     //                 cy.log('Target Value = ' + columnData)
//     //                 const loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

//     //                 return cy.get(`[data-test-id="table-${loc}-data-${i}"]`).invoke('text').then((text) => {
//     //                     cy.log('Actual Value = ' + text)
//     //                     if (text.includes(columnData)) {
//     //                         matchCount++
//     //                     }
//     //                 })
//     //             })

//     //             cy.wrap(Promise.all(checks)).then(() => {
//     //                 if (matchCount === data.length) {
//     //                     cy.get(`[data-test-id="table-view-transaction-row-${i}"]`).click()
//     //                     loader.checkLoading()
//     //                 } else {
//     //                     checkRow(i + 1)
//     //                 }
//     //             })
//     //         }

//     //         checkRow(0)
//     //     })
//     // }

//     // // Start the search
//     // checkPageForMatch()

//     // const data = dataTable.hashes()
//     // let matchFound = false // Flag to stop recursion once a match is found

//     // function checkPageForMatch() {
//     //     if (matchFound) return // Stop if already matched

//     //     cy.get("[data-test-id^='table-view-transaction-row-']").then(($rows) => {
//     //         const rowCount = $rows.length
//     //         cy.wait(5000)
//     //         const checkRow = (i: number) => {
//     //             if (i >= rowCount || matchFound) {
//     //                 // No match found on this page, go to next page
//     //                 commonDashboardPage.nextPageButton().then(($nextBtn) => {
//     //                     if (!$nextBtn.is(':disabled')) {
//     //                         cy.wrap($nextBtn).click()
//     //                         loader.checkLoading()
//     //                         checkPageForMatch() // recurse to check next page
//     //                     } else {
//     //                         cy.log("No matching row found in any page.")
//     //                     }
//     //                 })
//     //                 return
//     //             }

//     //             let matchCount = 0
//     //             const checks = data.map((row) => {
//     //                 const columnName = row["column"]
//     //                 cy.log('Target Column = ' + columnName)
//     //                 const columnData = row["value"]
//     //                 cy.log('Target Value = ' + columnData)
//     //                 const loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')

//     //                 return cy.get(`[data-test-id="table-${loc}-data-${i}"]`).invoke('text').then((text) => {
//     //                     cy.log('Actual Value = ' + text)
//     //                     if (text.trim().includes(columnData)) {
//     //                         matchCount++
//     //                     }
//     //                 })
//     //             })

//     //             cy.wrap(Promise.all(checks)).then(() => {
//     //                 if (matchCount === data.length && !matchFound) {
//     //                     matchFound = true
//     //                     cy.get(`[data-test-id="table-view-transaction-row-${i + 1}"]`).click()
//     //                     loader.checkLoading()
//     //                 } else {
//     //                     checkRow(i + 1)
//     //                 }
//     //             })
//     //         }

//     //         checkRow(0)
//     //     })
//     // }

//     // // Start the search
//     // checkPageForMatch()

//     // const data = dataTable.hashes()
//     // const dataCount = data.length
//     // cy.log("Table Count: " + dataCount.toString())


//     // function recursiveRowCheck() {
//     //     let matchFound = false
//     //     let tableLength = 0
//     //     if (matchFound) return

//     //     const tableRows = cy.get("[data-test-id^='table-view-transaction-row-")
//     //     tableRows.then((rows) => {
//     //         tableLength = rows.length
//     //     })
//     //     let matchCount = 0

//     //     for (let i = 0; i < tableLength; i++) {

//     //         data.map((cell) => {
//     //             let columnName = cell["column"]
//     //             let columnData = cell["value"]
//     //             let loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

//     //             cy.get(`[data-test-id="table-${loc}-data-${i}"]`).invoke('text').then((text) => {
//     //                 if (text.trim() == columnData) {
//     //                     matchCount++
//     //                 }
//     //             })

//     //         })

//     //         if (matchCount == dataCount) {
//     //             matchFound = true
//     //             cy.get(`[data-test-id="table-view-transaction-row-${i}"]`).click()
//     //         }

//     //     }

//     //     if (matchCount != dataCount) {
//     //         commonDashboardPage.nextPageButton().click()
//     //         loader.checkLoading()
//     //         recursiveRowCheck()
//     //     }

//     // }

//     // recursiveRowCheck()

//     // const data = dataTable.hashes();
//     // const dataCount: number = data.length;
//     // cy.log("Table Count: " + dataCount.toString());

//     // function recursiveRowCheck(): void {
//     //   // Use a Cypress command chain to get the rows
//     //   cy.get("[data-test-id^='table-view-transaction-row-']").then(($rows: JQuery<HTMLElement>) => {
//     //     // If there are no rows on the current page, we assume the table has ended
//     //     if ($rows.length === 0) {
//     //       return;
//     //     }
//     //     // Start the row-checking process with the first row
//     //     checkRow(0, $rows);
//     //   });
//     // }

//     // function checkRow(rowIndex: number, $rows: JQuery<HTMLElement>): void {
//     //   // Exit condition for recursion
//     //   if (rowIndex >= $rows.length) {
//     //     // If all rows on the current page have been checked, try to go to the next page
//     //     commonDashboardPage.nextPageButton().then(($btn) => {
//     //       if ($btn.length > 0 && !$btn.prop('disabled')) {
//     //         cy.wrap($btn).click();
//     //         loader.checkLoading();
//     //         recursiveRowCheck();
//     //       } else {
//     //         cy.log("End of table or no more pages.");
//     //       }
//     //     });
//     //     return;
//     //   }

//     //   // Use a Cypress command chain to check the cells of the current row
//     //   cy.wrap($rows.eq(rowIndex)).then(($row: JQuery<HTMLElement>) => {
//     //     let matchCount = 0;
//     //     // Iterate through each data item
//     //     data.forEach((cell) => {
//     //       const columnName: string = cell["column"];
//     //       const columnData: string = cell["value"];
//     //       const loc: string = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

//     //       // Check each cell using Cypress commands chained with .then()
//     //       cy.wrap($row).find(`[data-test-id="table-${loc}-data-${rowIndex}"]`).invoke('text').then((text: string) => {
//     //         if (text.trim().includes(columnData)) {
//     //           matchCount++;
//     //         }
//     //       });
//     //     });

//     //     // After all cell checks are enqueued, use a final .then() to check the count
//     //     cy.wrap($row).then(() => {
//     //       if (matchCount === dataCount) {
//     //         cy.wrap($rows.eq(rowIndex)).click();
//     //       } else {
//     //         // If no match, check the next row
//     //         checkRow(rowIndex + 1, $rows);
//     //       }
//     //     });
//     //   });
//     // }

//     // recursiveRowCheck();




//     // No need for a separate interface if we are not enforcing its structure
//     const data = dataTable.hashes() as Record<string, string>[];
//     const dataCount: number = data.length;
//     cy.log("Table Count: " + dataCount.toString());

//     function checkTable(): void {
//         // Use a Cypress command to get all rows
//         cy.get("[data-test-id^='table-view-transaction-row-']").each(($row, rowIndex) => {
//             // Create a new Cypress chainable subject from the row
//             cy.wrap($row).then(() => {
//                 let matchCount = 0;

//                 // Iterate over each data cell
//                 data.forEach(cell => {
//                     const columnName = cell.column;
//                     const columnData = cell.value;
//                     const loc = columnName.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

//                     // Use cy.then to ensure the matchCount is updated after each cell check
//                     cy.wrap($row).find(`[data-test-id="table-${loc}-data-${rowIndex}"]`).invoke('text').then((cellText: string) => {
//                         if (cellText === columnData) {
//                             matchCount++;
//                         }
//                     });
//                 });

//                 // After all checks are enqueued, use a final cy.then() to check the count
//                 // This will run only after all the chained cell checks have completed
//                 cy.then(() => {
//                     if (matchCount === dataCount) {
//                         cy.wrap($row).click();
//                     }
//                 });
//             });
//         }).then(() => {
//             // This .then() runs after the .each() loop is finished for the current page
//             commonDashboardPage.nextPageButton().then(($btn) => {
//                 if ($btn.length && !$btn.prop('disabled')) {
//                     cy.wrap($btn).click();
//                     loader.checkLoading();
//                     checkTable();
//                 } else {
//                     cy.log("End of table or no more pages.");
//                 }
//             });
//         });
//     }

//     checkTable();


// })

// Then('I download {string} document', (parameter: string, dataTable: DataTable) => {
//      cy.log('first condition')
//     if (parameter === "All") {
//         cy.get('[data-test-id^="main-page-download-document-button-"]:not(:disabled)').then((button) => {
//             for (let i = 0; i < button.length; i++) {
//                 cy.wrap(button.eq(i)).click().then(() => {
//                     cy.wait(5000)
//                     cy.wrap(button.eq(i)).parent().parent().get("[data-test-id='main-page-file-name-text']:not([value=''])").eq(i).invoke('val').then((txt) => {
//                         cy.trackMultipleAssertion(cy.readFile(`cypress/downloads/${txt}`), parseAssertions(dataTable))
//                     })
//                 })
//             }
//         })
//     }
//     else if (parameter.includes('random')) {
//          cy.log('second condition')
//         parameter = parameter.replace('', "random")
//         cy.get('[data-test-id^="main-page-download-document-button-"]:not(:disabled)').then((button) => {
//             for (let i = 0; i < button.length; i++) {
//                 if (i == (parseInt(parameter) - 1)) {
//                     break
//                 }
//                 else {
//                     let value = Math.floor(Math.random() * button.length)
//                     cy.wrap(button.eq(value)).click().then(() => {
//                         cy.wait(5000)
//                         cy.wrap(button.eq(value)).parent().parent().get("[data-test-id='main-page-file-name-text']:not([value=''])").eq(value).invoke('val').then((txt) => {
//                             cy.trackMultipleAssertion(cy.readFile(`cypress/downloads/${txt}`), parseAssertions(dataTable))
//                         })
//                     })
//                 }
//             }


//         })
//     } else {
//         cy.get('[data-test-id^="main-page-download-document-button-"]:not(:disabled)').then((button) => {
//             cy.log('third condition')
//             for (let i = 0; i < button.length; i++) {
//                 if (i == (parseInt(parameter) - 1)) {
//                     break
//                 }
//                 else {
//                     cy.wrap(button.eq(i)).click().then(() => {
//                         cy.wait(5000)
//                         cy.wrap(button.eq(i)).parent().parent().get("[data-test-id='main-page-file-name-text']:not([value=''])").eq(i).invoke('val').then((txt) => {
//                             cy.trackMultipleAssertion(cy.readFile(`cypress/downloads/${txt}`), parseAssertions(dataTable))
//                         })
//                     })

//                 }
//             }
//         })
//     }
// })

// Then('I type {string} on the Search Bar', (parameter: string) => {
//     TransactionDashboardPage.typeSearchInput(parameter)
// })