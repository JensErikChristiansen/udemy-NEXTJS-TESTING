import { render, screen } from '@testing-library/react';

import { readFakeData } from '@/__tests__/__mocks__/fakeData';
import Band from '@/pages/bands/[bandId]';

test('band component displays correct band information', async () => {
  const { fakeBands } = await readFakeData();

  const props = {
    band: fakeBands[0],
    error: null,
  };

  render(<Band {...props} />);

  const heading = screen.getByRole('heading', {
    name: 'The Wandering Bunnies',
  });

  expect(heading).toBeInTheDocument();
});

test('band component displays error when no band is found', async () => {
  const error = 'nope';
  render(<Band band={null} error={error} />);

  const heading = screen.getByRole('heading', {
    name: `Could not retrieve band data: ${error}`,
  });

  expect(heading).toBeInTheDocument();
});
