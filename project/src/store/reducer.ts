import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setFocusedCardId, setSortType, setDataLoadedStatus, requireAuthorization } from './action';
import { DEFAULT_CITY, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';

type InitalState = {
  city: string
  selectedOfferId: number | undefined;
  offers: Offers;
  sortType: string;
  authorizationStatus: AuthorizationStatus,
  error: string | null,
  isDataLoaded: boolean;
};

const initialState: InitalState = {
  city: DEFAULT_CITY,
  selectedOfferId: undefined,
  offers: [],
  sortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoaded: false
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
    });
});

