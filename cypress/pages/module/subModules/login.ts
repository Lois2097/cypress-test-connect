import { Login } from '../../../locators/loginPage'

export const LoginPage = {
  backgroundImage: () => cy.get(Login.backgroundImage),
  metrobankImage: () => cy.get(Login.metrobankImage),
  usernameImage: () => cy.get(Login.usernameImage),
  passwordImage: () => cy.get(Login.passwordImage),
  usernameInput: () => cy.get(Login.usernameInput),
  passwordInput: () => cy.get(Login.passwordInput),
  loginSubmit: () => cy.get(Login.loginSubmit),
  
  //+--------------------------------------------------------------------+
  //|                                                                    |
  //|                       ACTION METHODS                               |
  //|                                                                    |
  //+--------------------------------------------------------------------+

  clickLoginSubmit: () => cy.get(Login.loginSubmit).click,
}
