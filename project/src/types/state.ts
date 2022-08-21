import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string | undefined
};

export type DataOffers = {
  offers: Offers;
  offersFetchStatus: string
};

export type DataReviews = {
  reviews: Reviews;
  reviewPostStatus: string
};

export type DataNearbyOffers = {
  nearbyOffers: Offers
};

export type DataOffer = {
  offer?: Offer;
  offerFetchStatus: string
};

export type AppProcess = {
  city: string
  selectedOfferId: number | undefined
  sortType: string
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
