describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("header contains recipe heading with a message that there are no recipes", () => {
        cy.get('.App-header').should('contain', 'My Recipes')
        cy.get('p').should('contain', 'There are no recipes to list.')
    })
})