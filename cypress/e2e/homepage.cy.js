describe('Homepage', () => {
  it('loads the homepage and finds intro text', () => {
    cy.visit('http://localhost:4000');
    cy.contains('Welcome');
    cy.contains('I am a back-end programmer based in Columbus, Ohio.');
  });
});
