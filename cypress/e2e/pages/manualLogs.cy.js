// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:5173/app/logs')
//   })
//   it('should display the correct heading of the page', () => {
//     cy.visit('http://localhost:5173/app/logs');
//     cy.get('.md\\:p-6 > :nth-child(1) > .MuiTypography-root').should('be.visible').and('contain.text', 'Manual Logs');
//   })

//   it('should display the request cards with take action button', () => {
//     cy.visit('http://localhost:5173/app/logs');
//     cy.get(':nth-child(1) > .flex-1 > .flex > .MuiTypography-subtitle2').should('be.visible').and('contain.text','Kwamena Abelkoo Addo')
//     cy.get(':nth-child(2) > .flex-1 > .flex > .MuiTypography-subtitle2').should('be.visible').and('contain.text','Kwamena Abelkoo Addo')
//     cy.get(':nth-child(3) > .flex-1 > .flex > .MuiTypography-subtitle2').should('be.visible').and('contain.text','Kwame Agyemang Osei')
//     cy.get('.space-y-3 > :nth-child(1)').should('be.visible').and('contain.text', 'Take Action')
//     cy.get('.space-y-3 > :nth-child(2)').should('be.visible').and('contain.text', 'Take Action')
//     cy.get('.space-y-3 > :nth-child(3)').should('be.visible').and('contain.text', 'Take Action')

//   })

//   it('should display the correct headers of the History table', () => {
//     cy.visit('http://localhost:5173/app/logs');
//     cy.get('nth-child(3) > .MuiCardContent-root').within(() => {
//       cy.contains('Employee');
//   })


// })

// });
