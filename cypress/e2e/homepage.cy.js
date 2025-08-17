describe('Homepage', () => {
  it('loads the homepage and finds intro text', () => {
    cy.visit('https://rwnewsom.github.io/');
    cy.contains('Welcome');
    cy.contains('I am a back-end programmer based in Columbus, Ohio.');
  });
});
