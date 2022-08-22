import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { fetchOffersAction } from '../api-actions';
import { DataOffers } from '../../types/state';

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
        state.offersFetchStatus = FetchStatus.Succecc;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.offersFetchStatus = FetchStatus.Rejected;
      });
  }
});
