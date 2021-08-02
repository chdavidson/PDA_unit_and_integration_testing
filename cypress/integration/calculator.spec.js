describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('should update display with the result of an arithmical operation', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should be able to chain operations', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '6')
  })

  it('should output the expected result for boundary values', () => {
      for(let i=0; i<15; i++){
          cy.get('#number2').click();
      }
      cy.get('#operator_add').click();
      for(let i=0; i<15; i++){
        cy.get('#number1').click();
      }
      cy.get('#operator-equals').click();
      cy.get('.display').should('contain', '333333333333333')
  })

  it('should handle exceptional inputs', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Infinity');
  })
})