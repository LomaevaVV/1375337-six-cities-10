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
  NeaPlaces = 'near-places'
}

export enum FavoriteBtnComponent {
  PropertyPage = 'propertyPage',
  Card = 'card'
}
