describe('Home Test Page Selenium Easy', function()  {

    before(' Visit Website' ,() =>{
      cy.visit("  ")
    })

    it('Go to the Input Forms', function()  {
    cy.contains("No, thanks!").click()
    cy.get('.dropdown-toggle').contains('Input Forms').click()
    cy.get('.open > .dropdown-menu > :nth-child(5) > a').click()

    })


    it('Fill Input Form & Submit', function()  {
    cy.get('.form-control[placeholder="First Name"]').type('aman')
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