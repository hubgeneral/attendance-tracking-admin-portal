/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("login", () => {
  cy.session("user-session", () => {
    cy.visit("/");
    cy.get('input[type="text"]').type("DHG2011");
    cy.get('input[type="password"]').type("password@123");
    cy.get(".loginbtn").click();

    cy.url().should((currentUrl) => {
      const routedToDashboard = currentUrl.includes("/app/");
      const routedToAccessDenied = currentUrl.includes("/access-denied");

      expect(
        routedToDashboard || routedToAccessDenied,
        "User should land on dashboard or access denied page"
      ).to.be.true;
    });
  });
});

// Cypress.Commands.add("waitForAttendance", () => {
//   cy.intercept("POST", "**/graphql").as("getAttendance");
//   cy.visit("/app/attendance");
//   cy.wait("@getAttendance");
// });
