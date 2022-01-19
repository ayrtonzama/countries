describe('Navigation to respective Single Country page',()=>{
    it('Visit Single Country',()=>{

        cy.visit('/')

        // Click on first country 
        cy.get('.countries-main').find('.country-card').first().click()
    })
    it('Back button on Single Country',()=>{

        cy.visit('/')

        // Click on first country 
        cy.get('.countries-main').find('.country-card').first().click()
        
        // Click back button 
        cy.get('.backButton').click()

    })
    it('Select Border Country',()=>{

        cy.visit('/')

        // Click on first country 
        cy.get('.countries-main').find('.country-card').first().click()

        // Click on border country        
        cy.get('.border-container').find('.border-btns').first().click()
    })
    
})