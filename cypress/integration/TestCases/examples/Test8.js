/// <reference types="Cypress"/>

    

describe('My First Test', function()  {

    

    it('My first Test case', function()  {
        

     cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html")
            
           cy.get('.form-control[placeholder="First Name"]').type('rahul')
           cy.get('.form-control[placeholder="Last Name"]').type('jain')
           cy.get('.form-control[placeholder="E-Mail Address"]').type('rahul@gmail.com')
           cy.get('.form-control[placeholder="(845)555-1212"]').type('7894546123')
           cy.get('.form-control[placeholder="Address"]').type('howara kolkata')
           cy.get('.form-control[placeholder="city"]').type('kolkata')
           cy.get('.form-control.selectpicker').select('Hawaii').should('have.value','Hawaii')
           cy.get('.form-control[placeholder="Zip Code"]').type('23545')
           cy.get('.form-control[placeholder="Project Description"]').type(' my descripyion is this')

           cy.get(':nth-child(1) > label > input').click();
           cy.get('.btn.btn-default').click();


    })

  })