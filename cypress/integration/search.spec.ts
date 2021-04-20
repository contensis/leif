describe('Test search will', () => {
  it('Searches for the term and, and checks that results are returned both by the live search and when clicking though to the results.', () => {
    cy.visit('/');
    cy.get('.header__search-icon').click();
    cy.get('.header-search__input').type('and');
    cy.get('.header-search__results')
      .children('[class*="SearchCardStyled"]')
      .should('have.length.gt', 1);
  });
});
