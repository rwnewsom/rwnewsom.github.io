describe('Homepage', () => {
  it('loads the homepage and finds intro text', () => {
    cy.visit('https://rwnewsom.github.io/');
    cy.contains('Welcome');
    cy.contains('I am a back-end programmer based in Columbus, Ohio.');
  });

  it('renders navigation with correct links', () => {
  cy.visit('https://rwnewsom.github.io/');
  cy.get('nav').should('exist');
  cy.get('nav a').should('have.length.at.least', 1); // At least one link
  cy.get('nav a').each(($el) => {
    cy.wrap($el).should('have.attr', 'href');
    cy.wrap($el).should('not.be.empty');
  });
});

  it('renders social icons', () => {
    cy.visit('https://rwnewsom.github.io/');
    cy.get('.social-icons').should('exist');
    cy.get('.social-icons a[aria-label="Github"]').should('exist');
    cy.get('.social-icons a[aria-label="Linkedin"]').should('exist');
    cy.get('.social-icons a[aria-label="Goodreads"]').should('exist');
  });
});
