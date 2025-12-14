describe('Blog', () => {
  it('loads the blog page and finds intro text', () => {
    cy.visit('https://rwnewsom.github.io/blog.html');
    cy.contains('Latest Posts');
    cy.get('.about ul li').should('have.length.at.least', 2);
  });
});