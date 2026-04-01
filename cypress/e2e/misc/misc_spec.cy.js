describe('Outros testes', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]').each($el => cy.wrap($el).check().should('be.checked'))
  })

  it('marca/desmarca checkboxes', () => {
    cy.clock()
    cy.get('input[type="checkbox"]').check().should('be.checked')
    cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked')
  })

  it('exibe e oculta mensagens com invoke', () => {
    cy.get('.success').invoke('show').should('be.visible').invoke('hide').should('not.be.visible')
    cy.get('.error').invoke('show').should('be.visible').invoke('hide').should('not.be.visible')
  })

  it('preenche área de texto com invoke', () => {
    cy.get('#open-text-area').invoke('val','um texto qualquer').should('have.value','um texto qualquer')
  })

  it('faz requisição HTTP e valida', () => {
    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .as('getRequest')
      .its('status').should('eq',200)
      cy.get('@getRequest').its('body').should('include','CAC TAT')
  })

  it('encontra gato escondido e altera texto', () => {
    cy.get('#cat').invoke('show').should('be.visible')
    cy.get('#title').invoke('text','CAT TAT')
    cy.get('#subtitle').invoke('text','eu amo gatos')
  })
})