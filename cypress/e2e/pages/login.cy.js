!describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })
  it('should display the login page', () => {
    cy.url().should('eq', 'http://localhost:5173/login');
    cy.get('[placeholder="Email"]').should('be.visible');
    cy.get('[placeholder="Password"]').should('be.visible');
    cy.get('.loginbtn').should('be.visible');
    cy.get('.loginbtn').should('have.text', 'Login');
  })
})




