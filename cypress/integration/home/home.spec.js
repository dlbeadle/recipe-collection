describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("header contains recipe heading with a message that there are no recipes", () => {
        cy.get('.App-header').should('contain', 'My Recipes')
        cy.get('p').should('contain', 'There are no recipes to list.')
    })

    it("contains an add recipe button that when clicked opens a form", () => {
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click()
      
        expect(cy.get('#recipe-form')).to.exist
      })

    it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click()

        expect(cy.get('input[name="newRecipeName"]')).to.exist
        expect(cy.get('textarea[name="newRecipeInstructions"]')).to.exist
    })

    it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click().then(() => {  
          cy.get('input[name="newRecipeName"]').type("Tofu Scramble Tacos")
          cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
          cy.get('input[type="submit"]').click()
          cy.get('ul').then(() => { 
            cy.get('ul').contains("Tofu Scramble Tacos")
          }) 
        }) 
      })

    it("contains a list of multiple recipes when more than one is entered", () => {
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click().then(() => {
            // First recipe
            cy.get('input[name="newRecipeName"]').type("Tofu Scramble Tacos")
            cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
            cy.get('input[type="submit"]').click()
            cy.get('input[name="newRecipeName"]').clear()
            cy.get('textarea[name="newRecipeInstructions"]').clear()
 

            // Second recipe
            cy.get('input[name="newRecipeName"]').type("Fish Scramble Tacos")
            cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
            cy.get('input[type="submit"]').click()
            // cy.get('input[name="newRecipeName"]').clear()
            // cy.get('textarea[name="newRecipeInstructions"]').clear()

            cy.get('li').then(() => { 
                cy.get('li').contains("Tofu Scramble Tacos")
                cy.get('li').contains("Fish Scramble Tacos")
            }) 
        })

        

    })
    
})