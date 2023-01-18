describe('', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html');
	});

	it('Should click on the sign in button', () => {
		cy.get('#signin_button').click();
  });
  
  it('Should visit log in page', () => {
    cy.get('h3').contains('Log in to ZeroBank')
  })

  it('Should click Forgot your password? Link', () => {
    cy.get('a').contains('Forgot your password ?').click()
  })

  it('Should visit Forgotten Password Page', () => {
    cy.get('h3').contains('Forgotten Password')
  })

  it('Should fill email input', () => {
    cy.get('#user_email').type('email')
  })
  
  it('Should click send Password', () => {
    cy.get('input').contains('Send Password').click()
  })

  it('Should display password sent message', () => {
    cy.get('div').contains('Your password will be sent to the following email: email')
  })
});
