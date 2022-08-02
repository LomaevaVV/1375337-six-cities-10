export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

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

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const MAX_REVIEWS_ON_PAGE = 10;

export const MAX_IMAGES_ON_PAGE = 6;

