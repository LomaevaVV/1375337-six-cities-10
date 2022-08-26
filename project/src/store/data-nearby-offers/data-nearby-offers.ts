import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { fetchNearbyOffersAction, postFavoriteStatusAction } from '../api-actions';

type DataNearbyOffers = {
  nearbyOffers: Offers
};

const initialState: DataNearbyOffers = {
  nearbyOffers: []
};

export const dataNearbyOffers = createSlice({
  name: NameSpace.DataNearbyOffers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
        for (const offer of state.nearbyOffers) {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.isFavorite;
          }
        }
      });
  }
});
