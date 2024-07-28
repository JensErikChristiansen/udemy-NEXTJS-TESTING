import { screen, render } from '@testing-library/react';
import { UserReservations } from '@/components/user/UserReservations';

test('Displays "Purchase tickets" when user has no reservations', async () => {
  render(<UserReservations userId={0} />);

  const button = await screen.findByRole('button', {
    name: 'Purchase tickets',
  });

  expect(button).toBeInTheDocument();

  const heading = screen.queryByRole('heading', { name: 'Your Tickets' });
  expect(heading).not.toBeInTheDocument();
});

test('Displays "Purchase more tickets" when user already has reservations', async () => {
  render(<UserReservations userId={1} />);

  const button = await screen.findByRole('button', {
    name: 'Purchase more tickets',
  });

  expect(button).toBeInTheDocument();

  const heading = screen.getByRole('heading', { name: 'Your Tickets' });
  expect(heading).toBeInTheDocument();
});
