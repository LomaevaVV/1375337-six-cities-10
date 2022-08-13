import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';
import { changeCity,
  loadOffers,
  setFocusedCardId,
  setSortType,
  setDataLoadedStatus,
  requireAuthorization,
  getUserEmail
} from './action';

type InitalState = {
  city: string
  selectedOfferId: number | undefined;
  offers: Offers;
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
    .addCase(getUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});

