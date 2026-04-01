import { FORM_FIELDS } from './selectors.js'

Cypress.Commands.add('fillForm', ({ firstName, lastName, email, phone, message }) => {
  if(firstName) cy.get(FORM_FIELDS.firstName).type(firstName)
  if(lastName) cy.get(FORM_FIELDS.lastName).type(lastName)
  if(email) cy.get(FORM_FIELDS.email).type(email)
  if(phone) cy.get(FORM_FIELDS.phone).type(phone)
  if(message) cy.get(FORM_FIELDS.message).type(message)
})

Cypress.Commands.add('submitForm', () => {
  cy.get(FORM_FIELDS.submitButton).click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.fillForm({
    firstName: 'Yago',
    lastName: 'Lima',
    email: 'yago8205@gmail.com',
    message: 'Mensagem de teste'
  })
  cy.submitForm()
})