import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { fetchOfferAction } from '../api-actions';
import { DataOffer } from '../../types/state';

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
        state.offerFetchStatus = FetchStatus.Succecc;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerFetchStatus = FetchStatus.Rejected;
      });
  }
});
