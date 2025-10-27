
// import { Loader } from "../../globalMethods"
// import * as newTransaction from './newTransactionModule'
// import * as newTransactionLocs from '../../../locators/newTransaction'

// const loader = new Loader()

// export class createTransPage {
//     private _type!: string
//     public get type(): string {
//         return this._type
//     }
//     public set type(value: string) {
//         this._type = value
//     }
//     private _transID!: string
//     public get transID(): string {
//         return this._transID
//     }
//     public set transID(value: string) {
//         this._transID = value
//     }
//     private _refCode!: string[]
//     public get refCode(): string[] {
//         return this._refCode
//     }
//     public set refCode(value: string[]) {
//         this._refCode = value
//     }
//     private _OTP!: string[]
//     public get OTP(): string[] {
//         return this._OTP
//     }
//     public set OTP(value: string[]) {
//         this._OTP = value
//     }
//     private _status!: string
//     public get status(): string {
//         return this._status
//     }
//     public set status(value: string) {
//         this._status = value
//     }
//     private _transType!: string
//     public get transType(): string {
//         return this._transType
//     }
//     public set transType(value: string) {
//         this._transType = value
//     }
//     private _account!: string
//     public get account(): string {
//         return this._account
//     }
//     public set account(value: string) {
//         this._account = value
//     }
//     private _approvers!: string[]
//     public get approvers(): string[] {
//         return this._approvers
//     }
//     public set approvers(value: string[]) {
//         this._approvers = value
//     }
//     private _dealer!: string
//     public get dealer(): string {
//         return this._dealer
//     }
//     public set dealer(value: string) {
//         this._dealer = value
//     }
//     private _mnemonic!: string
//     public get mnemonic(): string {
//         return this._mnemonic
//     }
//     public set mnemonic(value: string) {
//         this._mnemonic = value
//     }
//     private _email!: string[]
//     public get email(): string[] {
//         return this._email
//     }
//     public set email(value: string[]) {
//         this._email = value
//     }
//     private _documentAcceptance!: string[]
//     public get documentAcceptance(): string[] {
//         return this._documentAcceptance
//     }
//     public set documentAcceptance(value: string[]) {
//         this._documentAcceptance = value
//     }

//     generateJSON(action: string) {
//         const timestamp = new Date()
//         cy.readFile('cypress/fixtures/transactions.json').then((list) => {
//             let arr = [
//                 {
//                     transactionID: this.transID,
//                     referenceCode: this.refCode,
//                     status: this.status,
//                     productType: this.transType,
//                     mnemonic: this.mnemonic,
//                     transactionType: this.type,
//                     timeStamp: timestamp.toLocaleDateString('en-GB') + ' - ' + timestamp.toLocaleTimeString(),
//                     emails: this.email,
//                     account: this.account,
//                 },
//             ]
//             if (this.type == 'CORPORATE') {
//                 arr[0]['OTP'] = this.OTP
//                 arr[0]['approvers'] = this.approvers
//                 arr[0]['dealer'] = this.dealer
//             } else {
//                 arr[0]['OTP'] = ''
//             }
//             if (action.toUpperCase() == 'APPROVAL') {
//                 list = arr.concat(list)
//             } else {
//                 list[0].OTP = this.OTP
//                 list[0].status = this.status
//                 list[0].timeStamp = timestamp.toLocaleDateString('en-GB') + ' - ' + timestamp.toLocaleTimeString()
//                 if (this.documentAcceptance.length != 0) {
//                     list[0]['acceptance'] = this.documentAcceptance
//                 }
//             }
//             cy.writeFile('cypress/fixtures/transactions.json', list)
//         })
//     }

//     selectType(type: string) {

//         loader.checkLoading()
//         if (type == 'document') {
//             cy.get(new).click()
//         } else {
//             cy.url().then(($url) => {
//                 if (!$url.includes('corporates')) {
//                     newTransaction.NewTransactionModulePage.clickProductRadioButton()
//                 }
//             })
//             cy.get(newTransactionLocs.NewTransaction.productTypeDropdown)
//                 .its('length')
//                 .then((indx) => {
//                     cy.get(newTransactionLocs.NewTransaction.productTypeDropdown)
//                         .eq(indx - 1)
//                         .find('div')
//                         .eq(0)
//                         .click()
//                 })
//             let transCode = type
//             cy.get(`li[data-value="${transCode}"]`).click()
//             cy.get(`li[data-value="${transCode}"]`)
//                 .invoke('text')
//                 .then((element) => {
//                     this.transType = element
//                 })
//         }
//     }

//     selectCurrentDate() {
//         // cy.get(createTransLocators.datePickerField).click()
//         newTransaction.NewTransactionModulePage.datePickerPopperOption().click()
//         cy.get('div[class="react-datepicker__month"] > div[class="react-datepicker__week"] > div')
//             .filter((index, el) => {
//                 return el.className.includes('react-datepicker__day--keyboard-selected react-datepicker__day--today')
//             })
//             .should('have.length', 1)
//             .then(($selected) => {
//                 cy.wrap($selected).click()
//             })
//     }

//     setMnemonic(mnc: string) {
//         this.mnemonic = mnc
//         // cy.get(createTransLocators.mnemonicItem).type(`${mnc}{enter}`)
//         newTransaction.NewTransactionModulePage.mnemonicInput().type(`${mnc}{enter}`)
//         loader.checkLoading()
//         cy.wait(3000)

//         if (mnc.includes('DEVBAUC')) {
//             this.type = 'CORPORATE'
//         } else {
//             this.type = 'RETAIL'
//         }
//     }

//     setDealer(mnc: string) {
//         this.dealer = mnc

//         let temp: string = String(mnc).charAt(0).toUpperCase() + String(mnc).slice(1)
//         if (temp == '') {
//             return null
//         } else {
//             cy.get(`span:contains("Authorized Dealer Category ")`).should('exist')

//             cy.get(`td[title="${temp}"]`)
//                 .next()
//                 .next()
//                 .contains('@')
//                 .then((txt) => {
//                     cy.log('obtained text: ' + txt.text())
//                     this.email[this.email.length] = txt.text()
//                 })
//             cy.get(`td[title="${temp}"]`).prev().click()
//         }
//     }

//     setApprovers(mnc: string[]) {
//         this.approvers = mnc
//         this.email = []
//         cy.get(`span:contains("Approver Set ")`).should('exist')
//         if (mnc.some((element) => element.toUpperCase() == 'ALL')) {
//             cy.get(`span:contains("Approver Set ")`)
//                 .parent()
//                 .next()
//                 .find('input[type="checkbox"]')
//                 .then((lsp) => {
//                     for (let i = 0; i < lsp.length; i++) {
//                         cy.get(`span:contains("Approver Set ")`).parent().next().eq(i).find('input[type="checkbox"]').parentsUntil('tr').next().eq(1).as('temp1')
//                         cy.get('@temp1').then((txt) => {
//                             this.approvers[i] = txt.html()
//                             cy.get(`tr:contains("${this.approvers[i]}")`).find('input[type="checkbox"]').check()
//                             cy.get(`tr:contains("${this.approvers[i]}")`)
//                                 .find('td')
//                                 .contains('@')
//                                 .then((txt) => {
//                                     cy.log('obtained text: ' + txt.text())
//                                     this.email[i] = txt.text()
//                                 })
//                         })
//                     }
//                 })
//         } else {
//             cy.get(`span:contains("Approver Set ")`).should('exist')
//             cy.get(`span:contains("Approver Set ")`)
//                 .parent()
//                 .next()
//                 .find('input[type="checkbox"]')
//                 .each(($checkbox, index) => {
//                     cy.wrap($checkbox)
//                         .parentsUntil('tr')
//                         .next()
//                         .eq(1)
//                         .then(($textElement) => {
//                             for (let x = 0; x < this.approvers.length; x++) {
//                                 const actualText = $textElement.html().trim().toLowerCase()
//                                 const expectedText = this.approvers[x]?.toLowerCase()

//                                 cy.log(`ApproverAR #${x + 1}: ${expectedText}`)
//                                 cy.log(`Index: ${x}`)
//                                 cy.log(`ApproverLF #${x + 1}: ${actualText}`)

//                                 if (expectedText && actualText === expectedText) {
//                                     cy.wrap($checkbox).check()
//                                     cy.wrap($checkbox)
//                                         .parentsUntil('tr')
//                                         .next()
//                                         .next()
//                                         .next()
//                                         .then(($textElement) => {
//                                             this.email[x] = $textElement.html()
//                                             cy.log('obtained text: ' + this.email[x])
//                                         })
//                                 }
//                             }
//                         })
//                 })
//         }
//     }

//     populateDocuments(mnc: string) {
//         // cy.get(createTransLocators.requiredDocumentsTable)
//         newTransaction.NewTransactionModulePage.requiredDocumentsTable()
//             .find('tr')
//             .then((rows) => {
//                 let i = rows.length - 1
//                 for (let x = 1; x <= i; x++) {
//                     cy.task('readAFile', '${mnc}${x}.pdf')
//                         .then((cnt) => {
//                             if (cnt == null) {
//                                 //this.renameFile(mnc + x)
//                                 cy.task('duplicateAFile', `${mnc}${x}`)
//                             }
//                         })
//                         .then(() => {
//                             cy.get('table:contains("required Documents")').find('tr').eq(x).find('td').eq(1).find('button').click()
//                             cy.get('input[id="documentPath"]')
//                                 .eq(x - 1)
//                                 .selectFile(`cypress/fixtures/${mnc}${x}.pdf`, { force: true })
//                         })
//                 }
//             })
//     }

//     performConsistentClientVerify(action: string, transNum: string) {
//         let selector: number = 0
//         let otpCode: string = ''
//         let cycle: number = 1
//         this.documentAcceptance = []
//         this.status = 'For Processing - Approved'
//         if (action.toUpperCase() == 'APPROVED' || action.toUpperCase() == 'REJECTED') {
//             if (action.toUpperCase() == 'REJECTED') {
//                 selector = 1
//                 this.status = 'For Processing - Rejected'
//             }

//             if (this.type.toUpperCase() == 'CORPORATE') {

//                 cycle = this.approvers.length
//             }
//             this.OTP = []
//             for (let i = 0; i < cycle; i++) {
//                 cy.visit(Cypress.env('verifyFiles'))
//                 cy.wait(2000)
//                 cy.get(verifyClientLocators.refCodeInputField).type(this.refCode[i])
//                 cy.get(verifyClientLocators.refCodeSubmitButton).click({ multiple: true })
//                 cy.wait(2000)
//                 cy.get(verifyClientLocators.submitButton).click({ multiple: true })
//                 loader.checkLoading()
//                 assertErrorVisible('otpRequestSuccess')
//                 cy.wait(5000)
//                 cy.request({
//                     method: 'GET',
//                     url: Cypress.env('otpLogs'),
//                 }).then((response) => {
//                     for (let z = 0; z < response.body.length; z++) {
//                         if (response.body[z].transactionId == transNum) {
//                             otpCode = response.body[z].otp
//                             this.OTP[i] = response.body[z].otp
//                             break
//                         }
//                     }
//                     cy.wait(2000)
//                     cy.get(verifyClientLocators.otpCodeInputField).type(otpCode)
//                     cy.wait(5000)
//                     cy.get('div[role="alertdialog"]', { timeout: 20000 }).should('not.exist')
//                     cy.get(verifyClientLocators.submitButton).as('btn').click({ multiple: true, force: true })
//                     cy.get(createTransLocators.progressBar, { timeout: 20000 }).should('not.exist')
//                     assertErrorVisible('otpVerifySuccess')
//                     cy.get(verifyClientLocators.transactionTable)
//                         .find('tr')
//                         .then((rows) => {
//                             let i = rows.length - 1
//                             for (let x = 1; x <= i; x++) {
//                                 cy.get('table').find('tr').eq(x).find('td').eq(0).find('a').click()
//                                 cy.get('table').find('tr').eq(x).find('td').eq(2).find('button').eq(selector).click()
//                                 if (action.toUpperCase() == 'REJECTED') {
//                                     cy.get(verifyClientLocators.cancellationInputField).type('Automated rejection process')
//                                     cy.get(verifyClientLocators.cancellationConfirmButton).click()
//                                 }
//                                 cy.wait(2000)
//                             }
//                         })
//                     cy.get(verifyClientLocators.finalDialogConfirmButton).click()
//                     cy.wait(4000)
//                 })
//             }
//             // assertErrorVisible('verifyDocumentComplete')
//             this.generateJSON('verified')
//         } else if (action.toUpperCase() == 'CANCELLED') {
//             cy.go('back')
//             cy.get('span:contains("Cancel Transaction")').parent().click()
//             cy.get(createTransLocators.cancellationInputField).type('Automated cancellation process')
//             cy.get(`span:contains("Ok")`).parent().click()
//             this.status = 'Cancelled'
//             this.generateJSON('cancelled')
//         } else {
//             cy.log('Transaction marked as pending')
//         }
//     }

//     performVariedClientVerify(transNum: string, approval?: string[]) {
//         let selector: number = 0
//         let otpCode: string = ''
//         let cycle: number = 1
//         this.documentAcceptance = []
//         if (approval.length != 0) {
//             this.documentAcceptance = approval
//         }
//         this.status = 'Mixed Acceptance'

//         if (this.type.toUpperCase() == 'CORPORATE') {
//             cycle = this.approvers.length
//         }

//         this.OTP = []

//         for (let i = 0; i < cycle; i++) {
//             cy.visit(Cypress.env('verifyFiles'))
//             cy.wait(2000)
//             cy.get(verifyClientLocators.refCodeInputField).type(this.refCode[i])
//             cy.get(verifyClientLocators.refCodeSubmitButton).click({ multiple: true })
//             cy.wait(2000)
//             cy.get(verifyClientLocators.submitButton).click({ multiple: true })
//             cy.wait(5000)
//             cy.request({
//                 method: 'GET',
//                 url: Cypress.env('otpLogs'),
//             }).then((response) => {
//                 for (let z = 0; z < response.body.length; z++) {
//                     if (response.body[z].transactionId == transNum) {
//                         otpCode = response.body[z].otp
//                         this.OTP[i] = response.body[z].otp
//                         break
//                     }
//                 }
//                 cy.wait(2000)
//                 cy.get(verifyClientLocators.otpCodeInputField).type(otpCode)
//                 cy.wait(5000)
//                 cy.get('div[role="alertdialog"]', { timeout: 20000 }).should('not.exist')
//                 cy.get(verifyClientLocators.submitButton).as('btn').click({ multiple: true, force: true })
//                 cy.get(createTransLocators.progressBar, { timeout: 20000 }).should('not.exist')
//                 cy.wait(3000)
//                 cy.get(verifyClientLocators.transactionTable)
//                     .find('tr')
//                     .then((rows) => {
//                         let zi = rows.length - 1
//                         for (let x = 1; x <= zi; x++) {
//                             cy.log('x = ' + x)
//                             cy.log('i = ' + i)
//                             cy.log('zi = ' + zi)
//                             cy.log(this.documentAcceptance[i][x - 1])
//                             if (this.documentAcceptance[i][x - 1] == 'approve') {
//                                 selector = 0
//                             } else if (this.documentAcceptance[i][x - 1] == 'reject') {
//                                 selector = 1
//                             }
//                             cy.get('table').find('tr').eq(x).find('td').eq(0).find('a').click()
//                             cy.get('table').find('tr').eq(x).find('td').eq(2).find('button').eq(selector).click()
//                             if (selector == 1) {
//                                 cy.get(verifyClientLocators.cancellationInputField).type('Automated rejection process')
//                                 cy.get(verifyClientLocators.cancellationConfirmButton).click()
//                             }
//                             cy.wait(2000)
//                         }
//                     })
//                 cy.get(verifyClientLocators.finalDialogConfirmButton).click()
//                 cy.wait(5000)
//             })
//         }

//         this.generateJSON('verified')
//     }

//     submitTransaction() {
//         let refCode: string = ''
//         cy.get(createTransLocators.createTransactionButton).eq(1).click()
//         loader.checkLoading()
//         assertErrorVisible('successTransactionCreation')
//         cy.wait(5000)
//         cy.url().then((url) => {
//             let transNum = url.split('/').pop()
//             cy.wrap(transNum).as('resultTransNum')
//             this.transID = transNum
//         })
//         cy.get('span:contains("Transaction History")').parent().click()
//         if (this.type == 'CORPORATE') {
//             this.refCode = []
//             for (let i = 0; i < this.approvers.length; i++) {
//                 cy.get(`td:contains("${this.email[i]}")`)
//                     .invoke('text')
//                     .then((txt) => {
//                         this.refCode[i] = txt.slice(-10)
//                     })
//             }
//             if (this.dealer.length != 0) {
//                 cy.get(`td:contains("${this.email[this.approvers.length]}")`)
//                     .invoke('text')
//                     .then((txt) => {
//                         this.refCode[this.approvers.length] = txt.slice(-10)
//                     })
//             }
//         } else {
//             this.refCode = []
//             cy.get('td')
//                 .contains('Reference Code')
//                 .invoke('text')
//                 .then((txt) => {
//                     this.refCode[0] = txt.slice(-10)
//                 })
//         }

//         this.status = 'For Approval'
//         this.generateJSON('approval')
//         return refCode
//     }

//     renameFile(name: string) {
//         cy.readFile('cypress/fixtures/DEVBAURE21.pdf').then((content) => {
//             cy.writeFile(`cypress/fixtures/${name}.pdf`, content)
//         })
//     }

// }