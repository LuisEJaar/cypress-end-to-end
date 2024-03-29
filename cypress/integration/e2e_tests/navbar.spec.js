describe('', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('Should display online banking content', () => {
    cy.contains('Online Banking').click()
    cy.url().should('include', 'online-banking.html')
    cy.get('h1').should('be.visible')
  })

  it('Should display feedback content', () => {
    cy.contains('Feedback').click()
    cy.url().should('include', 'feedback.html')
    cy.get('#feedback-title').contains('Feedback')
  })

  it('Should display home content', () => {
    cy.contains('Zero Bank').click()
    cy.url().should('include', 'index.html')
    cy.get('#online-banking')
  })
})