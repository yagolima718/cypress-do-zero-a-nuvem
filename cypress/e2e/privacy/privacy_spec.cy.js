import { PRIVACY } from '../../support/selectors.js'

describe('Política de Privacidade', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('verifica link abre em nova aba', () => {
    cy.contains('a','Política de Privacidade')
      .should('have.attr','href','privacy.html')
      .and('have.attr','target','_blank')
  })

  it('remove target e acessa link', () => {
    cy.contains('a','Política de Privacidade').invoke('removeAttr','target').click()
  })
})