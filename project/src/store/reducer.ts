import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setFocusedCardId } from './action';
import { DEFAULT_CITY } from '../const';
import {Offers} from '../types/offer';

type InitalState = {
  city: string
  selectedOfferId: number | undefined;
  offers: Offers | undefined;
};

const initialState: InitalState = {
  city: DEFAULT_CITY,
  selectedOfferId: undefined,
  offers: undefined,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setFocusedCardId, (state, action) => {
      state.selectedOfferId = action.payload;
    });
});

