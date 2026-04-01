import { FORM_FIELDS } from '../../support/selectors.js'

describe('Formulário CAC TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('deve exibir o título correto da página inicial', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário com sucesso', () => {
    cy.clock()
    const longText = Cypress._.repeat('teste', 10)
    cy.fillForm({ firstName: 'Yago', lastName: 'Lima', email: 'yago8205@gmail.com', message: longText })
    cy.submitForm()
    cy.get(FORM_FIELDS.successMessage).should('be.visible')
    cy.tick(3000)
    cy.get(FORM_FIELDS.successMessage).should('not.be.visible')
  })

  it('exibe erro com email inválido', () => {
    cy.clock()
    cy.fillForm({ email: 'yago8205gmail.com' })
    cy.submitForm()
    cy.get(FORM_FIELDS.errorMessage).should('be.visible')
    cy.tick(3000)
    cy.get(FORM_FIELDS.errorMessage).should('not.be.visible')
  })

  it('telefone aceita apenas números', () => {
    cy.get(FORM_FIELDS.phone).type('aaaaa').should('have.value', '')
  })

  it('telefone obrigatório dispara erro se vazio', () => {
    cy.clock()
    cy.fillForm({ firstName: 'Yago', lastName: 'Lima', email: 'yago8205@gmail.com', message: 'teste' })
    cy.get(FORM_FIELDS.phoneCheckbox).check().should('be.checked')
    cy.submitForm()
    cy.get(FORM_FIELDS.errorMessage).should('be.visible')
    cy.tick(3000)
    cy.get(FORM_FIELDS.errorMessage).should('not.be.visible')
  })

  it('limpa campos após preenchimento', () => {
    const data = { firstName: 'Yago', lastName: 'Lima', email: 'yago8205@gmail.com', phone: '85999153037' }
    Object.entries(data).forEach(([field, value]) => {
      cy.get(FORM_FIELDS[field]).type(value).should('have.value', value).clear().should('have.value', '')
    })
  })

  it('exibe erro ao submeter sem preencher obrigatórios', () => {
    cy.clock()
    cy.get(FORM_FIELDS.submitButton).click()
    cy.get(FORM_FIELDS.errorMessage).should('be.visible')
    cy.tick(3000)
    cy.get(FORM_FIELDS.errorMessage).should('not.be.visible')
  })

  it('envia formulário com comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get(FORM_FIELDS.successMessage).should('be.visible')
  })
})