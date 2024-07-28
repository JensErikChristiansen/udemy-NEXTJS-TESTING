import { render, screen } from '@testing-library/react';
import { Reservation } from '@/components/reservations/Reservation';

test('Reservation page shows correct numbe rof available seats', async () => {
  render(<Reservation showId={0} submitPurchase={() => {}} />);
  const seatCount = await screen.findByText('10 seats left');
  expect(seatCount).toBeInTheDocument();
});
