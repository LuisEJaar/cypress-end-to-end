describe('', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
		cy.get('#feedback').click();
	});

	it('Should load feedback form', () => {
		cy.get('form').should('be.visible');
	});

	it('Should fill feedback form', () => {
		cy.get('#name').type('name');
		cy.get('#email').type('email.gmail.com');
		cy.get('#subject').type('subject example');
		cy.get('#comment').type('question example');
	});

	it('Should submit feedback form', () => {
		cy.get('input').contains('Send Message').click();
	});

	it('Should verify proper content', () => {
		cy.get('#feedback-title').contains('Feedback');
	});
});
