import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchNearbyOffersAction } from '../api-actions';
import { DataNearbyOffers } from '../../types/state';

const initialState: DataNearbyOffers = {
  nearbyOffers: []
};

export const dataNearbyOffers = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
