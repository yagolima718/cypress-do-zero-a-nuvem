import { PRODUCT } from '../../support/selectors.js'

describe('Seleção de produtos', () => {
  beforeEach(() => cy.visit('./src/index.html'))

  it('seleciona produto pelo texto', () => {
    cy.get(PRODUCT.dropdown).select('YouTube').should('have.value', 'youtube')
  })

  it('seleciona produto pelo valor', () => {
    cy.get(PRODUCT.dropdown).select('Mentoria').should('have.value', 'mentoria')
  })

  it('seleciona produto pelo índice', () => {
    cy.get(PRODUCT.dropdown).select(1).should('have.value', 'blog')
  })
})