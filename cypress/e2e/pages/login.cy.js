!describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })
  it('should display the login page', () => {
    cy.url().should('eq', 'http://localhost:5173/');
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('.loginbtn').should('be.visible');
    cy.get('.loginbtn').should('have.text', 'Login');
  })

  it('user can enter email, password and login', ()=> {
    cy.get('input[type="email"]').type('sampleUser@gmail.com');
    cy.get('input[type="password"]').type('samplePass');
    cy.get('.loginbtn').click();
    cy.url('http://localhost:5173/app/dashboard')
  })
});




