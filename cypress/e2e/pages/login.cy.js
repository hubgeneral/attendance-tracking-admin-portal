!describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should display the login page", () => {
    cy.url().should("include", "/");
    cy.get('input[type="text"]').should("be.visible");
    cy.get('input[type="password"]').should("be.visible");
    cy.get(".loginbtn").should("be.visible");
    cy.get(".loginbtn").should("have.text", "Login");
  });

  it("user can enter username, password and login", () => {
    cy.get('input[type="text"]').type("DHG2011");
    cy.get('input[type="password"]').type("password@123");
    cy.get(".loginbtn").click();
    cy.url().should("include", "/app/dashboard");
  });
});
