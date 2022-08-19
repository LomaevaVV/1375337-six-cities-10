import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchOffersAction, fetchNearbyOffersAction, fetchReviewsAction, fetchOfferAction, postReviewAction } from '../api-actions';
import { DataProcess } from '../../types/state';

const initialState: DataProcess = {
  offers: [],
  nearbyOffers: [],
  reviews: [],
  isDataLoaded: false
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.isDataLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
