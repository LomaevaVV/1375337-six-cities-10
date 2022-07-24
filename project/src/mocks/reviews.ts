import { Reviews } from '../types/review';

export const reviews: Reviews = [
  {
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'date': '2022-06-01T12:25:36.938Z',
    'id': 1,
    'rating': 4,
    'user': {
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/1.jpg',
      'id': 1,
      'isPro': false,
      'name': 'Oliver.conner'
    }
  },
  {
    'comment': 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    'date': '2022-06-13T17:28:36.938Z',
    'id': 2,
    'rating': 5,
    'user': {
      'id': 3,
      'isPro': true,
      'name': 'Isaac',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/3.jpg'
    }
  },
  {
    'comment': 'Disappointing service at high prices',
    'date': '2022-07-13T08:08:36.938Z',
    'id': 3,
    'rating': 2,
    'user': {
      'id': 2,
      'isPro': true,
      'name': 'Emma',
      'avatarUrl': 'https://10.react.pages.academy/static/avatar/2.jpg'
    }
  }
];
