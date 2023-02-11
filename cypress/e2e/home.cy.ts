describe('home page', () => {
  context('Desktop resolution', () => {
    beforeEach(() => {
      cy.viewport(1536, 960)
    })
  })
  it('the h1 contains the correct text', () => {
    cy.visit('https://monster-rolodex-react-2.netlify.app/')
    cy.get("h1").should('be.visible').contains('Monsters Rolodex')
  })
  it("the features on the homepage are correct", () => {
    cy.visit('https://monster-rolodex-react-2.netlify.app/')
    cy.get('.search-box').should('be.visible').should('have.attr', 'type', 'search')
    cy.get('.card-list').get('.card-container').should('have.length', 10)
  })
})