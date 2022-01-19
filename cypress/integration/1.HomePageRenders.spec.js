describe('Get Home screen details',()=>{
    it('Should have on page',()=>{
        cy.visit('/')
        // Should have navbar with title 
        cy.get('h5').contains('Where in the world?')
        // Should have a theme button
        cy.get('.light-text').contains('Dark Mode')

        // Should have search bar
        cy.get('.search-bar input').invoke('attr','placeholder').should('contain','Search for a country...')

        // Should have region select
        // cy.get('input.').invoke('attr',placeholder).should('contain','Search for Country')

        // // Count for elements of countries
        cy.get('.countries-main').find('.CountryCard').its('length').should('eq',250)
        
        
    })
    
    it("Countries loaded on page ",()=>{
        cy.visit('/')
        cy.get('.countries-main').find('.CountryCard').its('length').should('eq',250)
    })
    
    it("Theme changes",()=>{
        cy.visit('/')
        cy.get('#theme-btn').contains('Dark Mode')
        cy.get('#theme-btn').click()
    })
})