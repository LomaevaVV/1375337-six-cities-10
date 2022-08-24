import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { fetchFavoritesAction, postFavoriteStatusAction } from '../api-actions';
import { DataFavorites } from '../../types/state';

const initialState: DataFavorites = {
  offers: [],
  favoritesFetchStatus: FetchStatus.Idle,
  favoritesPostStatus: FetchStatus.Idle
};

export const dataFavorites = createSlice({
  name: NameSpace.DataFavorites,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.favoritesFetchStatus = FetchStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.favoritesFetchStatus = FetchStatus.Succecc;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoritesFetchStatus = FetchStatus.Rejected;
      })
      .addCase(postFavoriteStatusAction.pending, (state) => {
        state.favoritesPostStatus = FetchStatus.Loading;
      })
      .addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
        state.favoritesPostStatus = FetchStatus.Succecc;
      })
      .addCase(postFavoriteStatusAction.rejected, (state) => {
        state.favoritesPostStatus = FetchStatus.Rejected;
      });
  }
});
