/* eslint-disable @typescript-eslint/no-namespace */
import { mount } from 'cypress/react';

// Add "mount" as a custom Cypress command
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);
