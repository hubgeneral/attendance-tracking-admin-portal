describe('Header Component', () => {
    beforeEach(() => {
        
        cy.visit('http://localhost:5173/app');
    });

    it('should display the header', () => {
        cy.get('header.fixed.top-0.left-0').should('be.visible');
    });

       it('should have a logo', () => {
      
        cy.get('header a > img[alt="HM-Clockr-Logo"]').should('be.visible');
    });


    it('should have navigation links', () => {
       cy.contains('nav a', 'Dashboard').should('have.attr', 'href', '/app/dashboard')
       cy.contains('nav a', 'Attendance').should('have.attr', 'href', '/app/attendance')
       cy.contains('nav a', 'Manual Logs').should('have.attr', 'href', '/app/logs')
       cy.contains('nav a', 'Settings').should('have.attr', 'href', '/app/settings')

    });

      it('should have navigation links', () => {
       cy.get('.MuiButtonBase-root').should("be.visible")
    });
    
      it('should open the profile menu when the icon is clicked', () => {
      cy.get('button').find('svg[data-testid="AccountCircleOutlinedIcon"]').click()
      cy.get('ul[role="menu"]').should('be.visible')
  })

    it('should display user info in the menu', () => {
    cy.get('button').find('svg[data-testid="AccountCircleOutlinedIcon"]').click()

     cy.get('ul[role="menu"]').within(() => {
      cy.contains('Eric Joel Odoi').should('be.visible')
      cy.contains('ericodoi@heidelbergcement.com').should('be.visible')
    })
  })

   it('should show a logout option', () => {
    cy.get('button').find('svg[data-testid="AccountCircleOutlinedIcon"]').click()

    cy.get('ul[role="menu"]').within(() => {
      cy.contains('Log out').should('be.visible')
    })
  })

  it('should close the menu after clicking logout', () => {
    cy.get('button').find('svg[data-testid="AccountCircleOutlinedIcon"]').click()
    cy.contains('Log out').click()
    cy.get('ul[role="menu"]').should('not.exist')
  })

});