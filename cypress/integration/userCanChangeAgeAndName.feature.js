describe('User can navigate the app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  describe('when render is active', () => {
    it('displays Ida and Carlos', () => {
      cy.get('body').should('contain', "I'm Carlos and I am 33 years old!");
      cy.get('body').should('contain', "I'm Ida and I am 29 years old!");
      cy.get('button').should('have.css', 'background-color', 'rgb(255, 0, 0)')
    });
    it('changes button color and hides divs', () => {
      cy.get('button').click();
      cy.get('button').should('have.css', 'background-color', 'rgb(0, 128, 0)');
      cy.get('page').should('not.exist', 'Text too short');

    })
    // beforeEach(() => {
    //   cy.get('#button').click();
    // });

    
  })
})