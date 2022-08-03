import {sign_up_page} from "../selectors/sign_up_page";
import {sign_in_page} from "../selectors/sign_in_page";
import {bank_accounts} from "../selectors/bank_account_page";
import {banks} from '../support/bank_accounts';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('ui_sign_up', (user) => {
    cy.visit('/signup')
    cy.get(sign_up_page.firstname_field).type(user.firstName).should('have.value', user.firstName)
    cy.get(sign_up_page.lastname_field).type(user.lastName).should('have.value', user.lastName)
    cy.get(sign_up_page.username_field).type(user.username).should('have.value', user.username)
    cy.get(sign_up_page.password_field).type(user.password).should('have.value', user.password)
    cy.get(sign_up_page.confirm_password_field).type(user.password).should('have.value', user.password)
    cy.get(sign_up_page.sign_up_button).should('be.enabled').click()
    cy.location("pathname").should("equal", "/signin");
})

Cypress.Commands.add('ui_login', (user) => {
    cy.get(sign_in_page.username_field).type(user.username).should('have.value', user.username)
    cy.get(sign_in_page.password_field).type(user.password).should('have.value', user.password)
    cy.get(sign_in_page.sign_in_button).click()
    cy.location("pathname").should("equal", "/");
})

Cypress.Commands.add('ui_logout', () => {
    cy.get(sign_in_page.logout_button).should('be.visible').click()
    cy.location("pathname").should("equal", "/signin");
})

Cypress.Commands.add('ui_onboarding', (bank) => {
    cy.contains('Bank Accounts').click()
    cy.get(bank_accounts.create_button).click()
    cy.get(bank_accounts.bank_name_field).type(bank.bank_name).should('have.value', bank.bank_name)
    cy.get(bank_accounts.routing_number_field).type(bank.routing_number).should('have.value', bank.routing_number)
    cy.get(bank_accounts.account_number_field).type(bank.account_number).should('have.value', bank.account_number)
    cy.get(bank_accounts.submit_button).click()
})