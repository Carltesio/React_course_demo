describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('click button to change name and age', () => {
    beforeEach(() => {
      cy.get('#about-tab').click();
    });

    it('displays About Me header', () => {
      cy.get('#about-header').should('contain', 'About Me');
    });
  })
})