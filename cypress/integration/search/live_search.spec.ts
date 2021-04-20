describe('Test that a user can search for content using the live search.', () => {
  it('Searches for the term and, and checks that results are returned by the live search.', () => {
    cy.visit('/');
    cy.get('.header__search-icon').click();
    cy.get('.header-search__input').type('and');
    cy.get('.header-search__results')
      .children('[class*="SearchCardStyled"]')
      .should('have.length.gt', 1);
  });
});
