it('displays correct heading when navigating to shows route', () => {
  cy.visit('/');
  cy.findByRole('button', { name: 'Shows' }).click();
  cy.findByRole('heading', { name: 'Upcoming Shows' }).should('exist');
});

it('displays correct heading when navigating to bands route', () => {
  cy.visit('/');
  cy.findByRole('button', { name: 'Bands' }).click();
  cy.findByRole('heading', { name: 'Our Illustrious Performers' }).should(
    'exist',
  );
});

it('displays correct band name for band route that existed at build time', () => {
  cy.task('db:reset');
  cy.visit('/bands/1');
  cy.findByRole('heading', { name: 'Shamrock Pete' }).should('exist');
});

it('displays error for band not in db', () => {
  cy.task('db:reset').visit('/bands/12345');
  cy.findByRole('heading', { name: /error: band not found/i }).should('exist');
});
