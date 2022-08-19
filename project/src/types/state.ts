import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/review';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userEmail: string
};

export type DataProcess = {
  offers: Offers;
  offer?: Offer;
  nearbyOffers: Offers;
  reviews: Reviews;
  isDataLoaded: boolean;
};

export type UseCaseProcess = {
  city: string
  selectedOfferId: number | undefined
  sortType: string
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
