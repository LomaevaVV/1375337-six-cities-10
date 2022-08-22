import { OfferCity } from '../src/types/offer';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/hotels/:id',
  Error = '/error'
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

export const enum FetchStatus {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Succecc = 'SUCCESS',
  Rejected = 'REJECTED',
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
      zoom: 12,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 12,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 12,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 12,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 12,
    }
  }
];

export const DEFAULT_CITY = 'Paris';

export enum MarkerUrl {
  DEFAULT = 'img/pin.svg',
  CURRENT = 'img/pin-active.svg'
}

export enum PageSettings {
  MAX_REVIEWS_AMOUNT = 10,
  MAX_IMAGES_AMOUNT = 6,
  NEARBY_CARDS_AMOUNT = 3
}

export enum ReviewLenght {
  MIN = 50,
  MAX = 300
}

export enum NameSpace {
  DataOffers = 'OFFERS',
  DataOffer = 'OFFER',
  DataReviews = 'REVIEWS',
  DataNearbyOffers = 'NEARBY_OFFERS',
  Data = 'DATA',
  App = 'APP',
  User = 'USER',
}
