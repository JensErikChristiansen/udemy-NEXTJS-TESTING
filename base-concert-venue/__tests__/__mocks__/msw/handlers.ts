import { http, HttpResponse } from 'msw';
import { readFakeData } from '@/__tests__/__mocks__/fakeData/index';
import { fakeUserReservations } from '@/__tests__/__mocks__/fakeData/userReservations';

const baseUrl = 'http://localhost:3000';

export const handlers = [
  http.get(`${baseUrl}/api/shows/:showId`, async ({ params }) => {
    const { showId } = params;
    const { fakeShows } = await readFakeData();

    return HttpResponse.json({
      show: fakeShows[Number(showId)],
    });
  }),

  http.get(`${baseUrl}/api/users/:userId/reservations`, ({ params }) => {
    const { userId } = params;

    return HttpResponse.json({
      userReservations: fakeUserReservations.filter(
        (r) => r.userId === Number(userId),
      ),
    });
  }),
];
