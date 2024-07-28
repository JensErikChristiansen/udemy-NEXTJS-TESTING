import { render, screen } from '@testing-library/react';
import { Reservation } from '@/components/reservations/Reservation';

test('Reservation page shows correct number of available seats', async () => {
  render(<Reservation showId={0} submitPurchase={() => {}} />);
  const seatCount = await screen.findByText('10 seats left');
  expect(seatCount).toBeInTheDocument();
});

test('Reservation page shows "sold out" message nd NO purchase button if there are no seats available', async () => {
  render(<Reservation showId={1} submitPurchase={() => {}} />);
  const seatCount = await screen.findByRole('heading', {
    name: 'Show is sold out!',
  });
  expect(seatCount).toBeInTheDocument();

  const button = screen.queryByRole('button', { name: 'purchase' });
  expect(button).not.toBeInTheDocument();
});
