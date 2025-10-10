/// <reference types="Cypress" />
 
describe('My Third Test Suite', function() 
{
 
it('My Third Test case',function() {
 
 //checkboxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])

//select
cy.get('select').select('option3').should('have.value', 'option3') //selecting static dropdown

cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($el,index,$list) =>{
if($el.text() === 'India')
    {
        $el.click()
    }
})

})
})