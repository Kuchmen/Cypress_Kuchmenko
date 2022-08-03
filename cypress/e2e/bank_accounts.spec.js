const {bank_accounts} = require("../selectors/bank_account_page");
const {users} = require("../support/users");
const {banks} = require('../support/bank_accounts');
require('../support/commands')


// create new spec file for bank_accounts tests, automate following tests:

// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding

describe('testing of bank accounts functionality', () => {
    const user = users.newUser
    const bank = banks.newBank
    beforeEach('visiting sign in page', () => {
        cy.visit('/')
        cy.ui_sign_up(user)
        cy.ui_login(user)
    })

     afterEach('logout', () => {
         cy.ui_logout()
     })
// 1. creates a new bank account

    it('creates a new bank account', () => {

        cy.get(bank_accounts.next_button).should('be.visible').click()
        cy.get(bank_accounts.bank_name_field).type(bank.bank_name)
        cy.get(bank_accounts.routing_number_field).type(bank.routing_number)
        cy.get(bank_accounts.account_number_field).type(bank.account_number)
        cy.get(bank_accounts.submit_button).click()
        cy.contains('Done').click()
    })
// 2. should display bank account form errors
    it('should display bank account form errors', () => {
        cy.contains('Bank Accounts').click()
        cy.get(bank_accounts.create_button).click()
        cy.get(bank_accounts.bank_name_field).focus().blur()
        cy.get(bank_accounts.bank_name_error).contains('Enter a bank name')
        cy.get(bank_accounts.bank_name_field).type('abc')
        cy.get(bank_accounts.bank_name_error).contains('Must contain at least 5 characters')
        cy.get(bank_accounts.routing_number_field).focus().blur()
        cy.get(bank_accounts.routing_number_error).contains('Enter a valid bank routing number')
        cy.get(bank_accounts.routing_number_field).type('abc')
        cy.get(bank_accounts.routing_number_error).contains('Must contain a valid routing number')
        cy.get(bank_accounts.routing_number_field).clear().type('01234567890')
        cy.get(bank_accounts.routing_number_error).contains('Must contain a valid routing number')
        cy.get(bank_accounts.account_number_field).focus().blur()
        cy.get(bank_accounts.account_number_error).contains('Enter a valid bank account number')
        cy.get(bank_accounts.account_number_field).type('abc')
        cy.get(bank_accounts.account_number_error).contains('Must contain at least 9 digits')
    })
// 3. user should be able to delete a bank account
    it('user should be able to delete a bank account', () => {
        cy.contains('Bank Accounts').click()
        cy.contains('Delete').should('be.enabled').click()
        cy.contains('(Deleted)')
    })
})