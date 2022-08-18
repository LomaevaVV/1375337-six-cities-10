import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, AuthorizationStatus } from '../const';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/review';
import { changeCity,
  loadOffers,
  loadOffer,
  loadNearbyOffers,
  loadRewies,
  setFocusedCardId,
  setSortType,
  setDataLoadedStatus,
  requireAuthorization,
  getUserEmail,
  setReviews
} from './action';

type InitalState = {
  city: string
  selectedOfferId: number | undefined;
  offers: Offers;
  offer?: Offer;
  nearbyOffers: Offers;
  reviews: Reviews;
  sortType: string;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean;
  userEmail: string;
};

const initialState: InitalState = {
  city: DEFAULT_CITY,
  selectedOfferId: undefined,
  offers: [],
  nearbyOffers: [],
  reviews: [],
  sortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  userEmail: ''
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadRewies, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setFocusedCardId, (state, action) => {
      state.selectedOfferId = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(getUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

