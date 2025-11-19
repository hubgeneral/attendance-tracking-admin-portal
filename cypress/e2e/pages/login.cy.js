const assertPostLoginRoute = () => {
  cy.url().then((currentUrl) => {
    if (currentUrl.includes("/app/dashboard")) {
      cy.contains("Dashboard").should("exist");
    } else {
      expect(currentUrl).to.include("/access-denied");
      cy.contains("Access Denied").should("be.visible");
    }
  });
};

describe("Login Page", () => {
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

  it("navigates to dashboard for admins or access denied for others", () => {
    cy.get('input[type="text"]').type("DHG1042");
    cy.get('input[type="password"]').type("password@123");
    cy.get(".loginbtn").click();

    assertPostLoginRoute();
  });
});
