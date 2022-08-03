const {sign_in_page} = require("../selectors/sign_in_page");
const {sign_up_page} = require("../selectors/sign_up_page");
const {users} = require("../support/users");

describe('UI tests for sign in page', () => {

  before('visiting sign in page', () => {
    cy.visit('/')
  })

  it('should show "Real World App logo"', () => {
    cy.get(sign_in_page.logo_image).should('be.visible').and('have.attr', 'xmlns', 'http://www.w3.org/2000/svg')
  })

  it('should show "Sign in" title', () => {
    cy.get(sign_in_page.title_text).should('be.visible').and('have.text', 'Sign in')
     //   cy.get(sign_in_page.get_selector_for_date('some_data')).click()
  })

  // Homework 14.07:
  // 1. should show typeable Username field
  it('Should show typeable Username field', () => {
    cy.get(sign_in_page.username_field).should('be.visible')
        .type(users.testUser1.username)
        .should('have.value', users.testUser1.username).clear()
  })

  // 2. should show typeable Password field
  it('Should show typeable Password field', () => {
    cy.get(sign_in_page.password_field).should('be.visible')
        .type(users.testUser1.passwordWithoutHash)
        .should('have.value', users.testUser1.passwordWithoutHash).clear()
  })
  // 3. should show Username and Password placeholders
  it('should show Username and Password placeholders', ()=>{
  //  cy.get(sign_in_page.username_field).focus().blur()
    cy.get(sign_in_page.username_placeholder).should('be.visible').and('have.text', 'Username')
    cy.get(sign_in_page.password_placeholder).should('be.visible').and('have.text', 'Password')
  })

  // 4. should show 'Username is required' error if user clicks on it and then click outside this field and didn't enter any value
  it("'Username is required' error visible if user clicks on it and then click outside this field and didn't enter any value",()=>{
    cy.get(sign_in_page.password_field).click()
    cy.get(sign_in_page.username_error_required).should('be.visible').and('have.text', 'Username is required')

  })
  // 5. check "Remember me" checkbox
  it('Check "Remember me" checkbox',()=>{
    cy.get(sign_in_page.remember_me_checkbox).should('not.be.checked')
        .click().should('be.checked')
  })

  // 6. should show disabled by default sign in btn

  it('Disabled by default sign in btn', () =>{
    cy.get(sign_in_page.sign_in_button).should('be.visible').and('be.disabled')
  })
  // 7. should have 'Don't have an account? Sign Up' clickable link under 'Sign in' btn

  it("Should have 'Don't have an account? Sign Up' clickable link under 'Sign in' btn",()=>{
    cy.get(sign_in_page.sign_up_link).should('be.visible')
        .contains("Don't have an account? Sign Up").click()
    cy.location('pathname').should('equal', '/signup')
  })
  // 8. should show Cypress copyright link that leads to 'https://www.cypress.io/'

  it("should show Cypress copyright link that leads to 'https://www.cypress.io/'", ()=>{
    cy.get(sign_in_page.sypress_logo).should('be.visible')
        .and('have.attr', 'href', 'https://cypress.io')
  })
})

describe('UI tests for sign up page', () => {
  // Homework 19.07:
// 1. should allow a visitor to sign-up
    it('should allow a visitor to sign-up', ()=>{
      cy.visit('/signup')
      cy.location('pathname').should('equal', '/signup')
      cy.get(sign_up_page.firstname_field).type(users.newUser.firstName).should('have.value', users.newUser.firstName)
      cy.get(sign_up_page.lastname_field).type(users.newUser.lastName).should('have.value', users.newUser.lastName)
      cy.get(sign_up_page.username_field).type(users.newUser.username).should('have.value', users.newUser.username)
      cy.get(sign_up_page.password_field).type(users.newUser.password).should('have.value', users.newUser.password)
      cy.get(sign_up_page.confirm_password_field).type(users.newUser.password).should('have.value', users.newUser.password)
      cy.get(sign_up_page.sign_up_button).should('be.visible').click()
      cy.location('pathname').should('equal', '/signin')
    })

  // 2. should allow a visitor to login
  it('should allow a visitor to login',()=>{
    cy.get(sign_in_page.username_field).type(users.testUser1.username).should('have.value', users.testUser1.username)
    cy.get(sign_in_page.password_field).type(users.testUser1.passwordWithoutHash)
    cy.get(sign_in_page.sign_in_button).click()
    cy.location('pathname').should('equal', '/')
  })

// 3. should allow a visitor to logout
  it('should allow a visitor to logout', ()=>{
    cy.get(sign_in_page.logout_button).should('be.visible').click()
    cy.location('pathname').should('equal', '/signin')

  })


// -----------------------------------
})

describe('login, signup errors', () => {
  before('visiting sign in page', () => {
    cy.visit('/')
  })
// Homework 21.07
// 4. should display login errors
  it('should display login errors', ()=>{
    cy.get(sign_in_page.username_field).type(users.testUser1.username).clear().blur()
    cy.get(sign_in_page.username_error).should('be.visible').contains('Username is required')

    cy.get(sign_in_page.password_field).type('a').blur()
    cy.get(sign_in_page.password_error).should('be.visible').contains('Password must contain at least 4 characters')
  })

  // 5. should display signup errors
it('should display signup errors', ()=>{
  cy.visit('/signup')
  cy.location('pathname').should('equal', '/signup')

  cy.get(sign_up_page.firstname_field).click().blur()
  cy.get(sign_up_page.firstname_field_error).should('be.visible').contains('First Name is required')
  cy.get(sign_up_page.lastname_field).click().blur()
  cy.get(sign_up_page.lastname_field_error).should('be.visible').contains('Last Name is required')
  cy.get(sign_up_page.username_field).click().blur()
  cy.get(sign_up_page.username_field_error).should('be.visible').contains('Username is required')
  cy.get(sign_up_page.password_field).click().blur()
  cy.get(sign_up_page.password_field_error).should('be.visible').contains('Enter your password')
  cy.get(sign_up_page.password_field).type('a')
  cy.get(sign_up_page.password_field_error).should('be.visible').contains('Password must contain at least 4 characters')
  cy.get(sign_up_page.confirm_password_field).click().blur()
  cy.get(sign_up_page.confirm_password_field_error).should('be.visible').contains('Confirm your password')
  cy.get(sign_up_page.confirm_password_field).type('b')
  cy.get(sign_up_page.confirm_password_field_error).should('be.visible').contains('Password does not match')
})



// 6. should error for an invalid user

  it('should error for an invalid user',()=>{
    cy.visit('/')
    cy.get(sign_in_page.username_field).type(users.testUser1.username).should('have.value', users.testUser1.username)
    cy.get(sign_in_page.password_field).type(users.testUser1.uuid)
    cy.get(sign_in_page.sign_in_button).click()
    cy.get(sign_in_page.sign_in_error).should('be.visible').contains( 'Username or password is invalid')
    cy.location('pathname').should('equal', '/signin')
  })
// 7. should error for an invalid password for existing user
it('should error for an invalid password for existing user', ()=>{
  cy.visit('/')
  cy.get(sign_in_page.username_field).type(users.testUser1.username)
  cy.get(sign_in_page.password_field).type(users.testUser1.uuid)
  cy.get(sign_in_page.sign_in_button).click()
  cy.get(sign_in_page.sign_in_error).should('be.visible').contains( 'Username or password is invalid')
  cy.location('pathname').should('equal', '/signin')

 })


})

//  -------------------------------
// create new spec file for bank_accounts tests, automate following tests:
// 1. creates a new bank account
// 2. should display bank account form errors
// 3. user should be able to delete a bank account

// + create Cypress custom command for user ui_sign_up, ui_login, ui_logout, ui_onboarding

// homework 26.7 // use already existing users from database-seed.json file from app project; password - s3cret
// 1. navigates to the new transaction form, selects a user and submits a transaction payment
// 2. navigates to the new transaction form, selects a user and submits a transaction request"
// 3. displays new transaction errors
// 4. submits a transaction payment and verifies the deposit for the receiver
// 5. submits a transaction request and accepts the request for the receiver
// 6. searches for a user by attribute