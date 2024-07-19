import { screen, render } from '@testing-library/react';
import { Reservation } from '@/components/reservations/Reservation';

test('', async () => {
  render(<Reservation showId={0} submitPurchase={() => {}} />);
  const seatCountText = await screen.findByText('10 seats left');
});
