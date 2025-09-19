///<reference types="Cypress"/>
describe ('first test suite', function ()
{
    it ('first test case', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        //parent-child chaining
        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART')
    
    })
}

)