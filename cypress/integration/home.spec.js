describe('home page', () => {
    it('should be able to access the home page', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('contain', 'Seja um parceiro entregador pela Buger Eats')
    })
})