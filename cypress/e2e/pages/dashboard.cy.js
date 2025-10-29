// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:5173/app/dashboard')
//   })


// })


describe('Dashboard Header', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/app/dashboard') 
  })

  it('should display the correct title', () => {
    cy.contains('h1', 'Dashboard')
      .should('be.visible')
      .and('have.class', 'text-2xl') 
  })

  it('should show the date range picker', () => {
    cy.get('input[placeholder="Select Date"]').should('be.visible')
  })

     it('shows the date range picker', () => {
    cy.get('input[placeholder="Select Date"]').should('exist')
    cy.get('.rs-input-group-addon').should('exist')
    cy.get('#rs-«r1»').should('exist')
  })

 

    it('renders the correct labels and values', () => {
    cy.get('.grid .MuiCard-root').first().within(() => {
      cy.get('p').should('not.be.empty') 
      cy.get('h2').should('not.be.empty') 
        cy.get('img').should('exist')    
    })
  })

    // bar 

    it('renders the card and title', () => {
    cy.contains('h3', 'Total Employees').should('be.visible')
    cy.get('.MuiCard-root').should('exist')
  })


  it('renders the custom legend', () => {
   
    cy.contains('Clocked In').should('be.visible')
    cy.contains('Absent').should('be.visible')
    cy.contains('On Leave').should('be.visible')
  })


  // Working Hours
  
    it('shows Clock-In and Clock-Out cards', () => {
    cy.contains('p', 'Average Clock-In Time').should('be.visible')
    cy.contains('h2', '08:30 AM').should('be.visible')

    cy.contains('p', 'Average Clock-Out Time').should('be.visible')
    cy.contains('h2', '08:30 AM').should('be.visible')
  })

    it('shows Work Hour Summary card with legend', () => {
    cy.contains('h3', 'Work Hour Summary').should('be.visible')
    cy.get('svg').should('exist')
  })


    it('show  Requests card with items and buttons', () => {
    cy.contains('h3', 'Requests').should('be.visible')
    cy.get(':nth-child(2) > .flex-1 > .MuiPaper-root > .MuiCardContent-root > :nth-child(2)').should('exist')
    cy.get(':nth-child(2) > .bg-white').should('exist')

  })

  // RankingCard 
     it('show Ranking Card', () => {
    cy.get('.mt-3 > :nth-child(1) > .MuiCardContent-root').should('exist')
   
   cy.get(':nth-child(1) > .MuiCardContent-root > .space-y-1 > :nth-child(1) > .flex-col > .text-md').should('exist')
   cy.get(':nth-child(3) > .MuiCardContent-root > .space-y-1 > :nth-child(1) > .flex-col > .flex > .text-sm').should('exist')
 

  })

 it('should have a text', () => {
    cy.get(':nth-child(1) > .MuiCardContent-root > .space-y-1 > :nth-child(1) > .flex-col > .flex > .text-sm').should('exist')
   cy.get(':nth-child(1) > .MuiCardContent-root > .mb-4 > .relative > .absolute').should('exist')
   })

       it('renders the Average Clock-Out Time card', () => {
       cy.get('[data-testid="avg-clockout-card"]').should('exist')
      })

      it('displays the correct label and time', () => {
        cy.get('[data-testid="avg-clockout-card"]').within(() => {
          cy.contains('Average Clock-Out Time')
          cy.contains('08:30 AM')
        })
      })
      it('renders the Average Clock-In Time card', () => {
        cy.get('[data-testid="avg-clockin-card"]').should('exist')
      })

          it('shows the correct label and clock-in time', () => {
      cy.get('[data-testid="avg-clockin-card"]').within(() => {
        cy.contains('Average Clock-In Time')
        cy.contains('08:30 AM')
      })
    })


          it('has the correct classes', () => {
        cy.get('[data-testid="avg-clockin-card"]')
          .should('have.class', 'shadow-sm')
          .and('have.class', 'rounded-lg')
      })




           it('check whether the svg icons exist', () => {
            cy.get('[data-testid="rank1-icon"]').should('exist')
              cy.get('[data-testid="rank2-icon"]').should('exist')
               cy.get('[data-testid="rank3-icon"]').should('exist')
                cy.get('[data-testid="rank4-icon"]').should('exist')
              
      })


  
  })

 


  



    



