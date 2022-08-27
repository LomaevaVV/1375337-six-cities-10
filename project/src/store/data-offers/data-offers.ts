import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offers } from '../../types/offer';
import { fetchOffersAction, postFavoriteStatusAction } from '../api-actions';

type DataOffers = {
  offers: Offers;
  offersFetchStatus: string
};

const initialState: DataOffers = {
  offers: [],
  offersFetchStatus: FetchStatus.Idle,
};

export const dataOffers = createSlice({
  name: NameSpace.DataOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.offersFetchStatus = FetchStatus.Rejected;
      })
      .addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
        state.offers = state.offers.map( (offer) => (
          offer.id === action.payload.id
            ? action.payload
            : offer
        ));
      });
  }
});
