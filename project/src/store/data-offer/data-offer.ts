import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offer } from '../../types/offer';
import { fetchOfferAction, postFavoriteStatusAction } from '../api-actions';

type DataOffer = {
  offer?: Offer;
  offerFetchStatus: string
};

const initialState: DataOffer = {
  offerFetchStatus: FetchStatus.Idle
};

export const dataOffer = createSlice({
  name: NameSpace.DataOffer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerFetchStatus = FetchStatus.Rejected;
      })
      .addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
        if (state.offer?.id === action.payload.id) {
          state.offer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});
