describe('home page', () => {
    it('should be able to access the home page', () => {
        cy.visit('/')
        cy.get('#page-home main h1').should('contain', 'Seja um parceiro entregador pela Buger Eats')
    })
})