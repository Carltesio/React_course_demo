describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('click button to change name and age', () => {
    it('displays Ida and Carlos', () => {
      cy.get('body').should('contain', "I'm Carlos and I am 35 years old!");
    });
    beforeEach(() => {
      cy.get('#button').click();
    });

    
  })
})