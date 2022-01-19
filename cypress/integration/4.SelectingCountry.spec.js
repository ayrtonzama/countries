describe('Navigation to respective Single Country page',()=>{
    it('Visit Single Country',()=>{

        cy.visit('/')
    
        cy.get('.countries-main').find('.CountryCard').first().click()
    })
    it('Select Border Country',()=>{

        cy.visit('/')
    
        cy.get('.countries-main').find('.CountryCard').first().click()

        
        
        cy.get('.border-container').find('.border-btns').first().click()
    })
    
})