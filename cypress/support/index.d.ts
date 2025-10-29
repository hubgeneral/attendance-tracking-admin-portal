/// <reference types="cypress" />

declare namespace Cypress{
    interface Chainable{
        /*
        Custom command to login and preserve session
        *@examaple cy.login()
        */

        login(): Chainable<void>;
        //waitForAttendance(): Chainable<void>;
    }
}