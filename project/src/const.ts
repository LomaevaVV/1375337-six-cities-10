import {OfferCity} from '../src/types/offer';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/hotels/:id'
}

export const APIRoute = {
  Offers: '/hotels',
  Login: '/login',
  Logout: '/logout',
  Reviews: '/comments/:id',
  NearbyOffers: '/hotels/:id/nearby',
  Offer: '/hotels/:id'
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum CardClassName {
  Cities = 'cities',
  NearPlaces = 'near-places'
}

export enum mapClassName {
  Cities = 'cities',
  Property = 'property'
}

export enum FavoriteBtnComponent {
  PropertyPage = 'propertyPage',
  Card = 'card'
}

export enum OffersSortTypes {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}

export const CitiesList: OfferCity[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    }
  }
];

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const MAX_REVIEWS_ON_PAGE = 10;

export const MAX_IMAGES_ON_PAGE = 6;

export const DEFAULT_CITY = 'Paris';

export const TIMEOUT_SHOW_ERROR = 2000;

export const REVIEW_MIN_LENGTH = 50;

export const REVIEW_MAX_LENGTH = 300;
