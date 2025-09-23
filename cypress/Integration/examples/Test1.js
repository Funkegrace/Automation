///<reference types="Cypress"/>
describe ('first test suite', function ()
{
    it ('first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent-child chaining for cy test
        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        
        cy.get('.products').find('.product').each($el, indexedDB, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.include('cashews')) 
                {$el.find('button')}
        }
    
    })
}

)