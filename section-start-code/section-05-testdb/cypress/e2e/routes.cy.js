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
