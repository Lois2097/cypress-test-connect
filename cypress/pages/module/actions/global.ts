import { Global } from '../../../locators/global'

export const GlobalPage = {
  progressBarAlertDialog: () => cy.get(Global.progressBarAlertDialog),
  alertDialogAlertDialog: () => cy.get(Global.alertDialogAlertDialog),
  mbccImage: () => cy.get(Global.mbccImage),
  mbccLogoImage: () => cy.get(Global.mbccLogoImage),
  accountButton: () => cy.get(Global.accountButton),
  accountImage: () => cy.get(Global.accountImage),
  accountNameText: () => cy.get(Global.accountNameText),
  accountEmailText: () => cy.get(Global.accountEmailText),
  accountSettingsImage: () => cy.get(Global.accountSettingsImage),
  accountSettingsText: () => cy.get(Global.accountSettingsText),
  accountSettingsButton: () => cy.get(Global.accountSettingsButton),
  logoutImage: () => cy.get(Global.logoutImage),

  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

   clickAccountButton: () => cy.get(Global.accountButton).click,
   clickAccountSettingsButton: () => cy.get(Global.accountSettingsButton).click,
}
