import { FILE_UPLOAD } from '../../support/selectors.js'

describe('Upload de arquivos', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('seleciona arquivo da fixtures', () => {
    cy.get(FILE_UPLOAD.input).selectFile('cypress/fixtures/example.json')
      .should(input => expect(input[0].files[0].name).to.equal('example.json'))
  })

  it('simula drag-and-drop', () => {
    cy.get(FILE_UPLOAD.input).selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should(input => expect(input[0].files[0].name).to.equal('example.json'))
  })

  it('seleciona arquivo com alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get(FILE_UPLOAD.input).selectFile('@sampleFile')
      .should(input => expect(input[0].files[0].name).to.equal('example.json'))
  })
})