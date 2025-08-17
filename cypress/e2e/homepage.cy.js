describe('Homepage', () => {
  it('loads the homepage and finds intro text', () => {
    cy.visit('https://rwnewsom.github.io/');
    cy.contains('Welcome');
    cy.contains('I am a back-end programmer based in Columbus, Ohio.');
  });

  it('renders social icons', () => {
    cy.visit('https://rwnewsom.github.io/');
    cy.get('.social-icons').should('exist');
    cy.get('.social-icons a[aria-label="Github"]').should('exist');
    cy.get('.social-icons a[aria-label="Linkedin"]').should('exist');
    cy.get('.social-icons a[aria-label="Goodreads"]').should('exist');
  });
});
