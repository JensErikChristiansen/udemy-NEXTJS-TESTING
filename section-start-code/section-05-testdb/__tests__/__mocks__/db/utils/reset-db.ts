/* eslint-disable no-console */
import { readFakeData } from '@/__tests__/__mocks__/fakeData/';
import { filenames, writeJSONToFile } from '@/lib/db/db-utils';

export async function resetDB() {
  const isSafeToReset = process.env.NODE_ENV === 'test' || process.env.CYPRESS;

  if (!isSafeToReset) {
    console.log(
      'WARNING: database reset unavailable outside test environment!',
    );

    return;
  }

  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
}
