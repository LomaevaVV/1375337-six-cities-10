import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Offers } from '../../types/offer';
import { fetchFavoritesAction, postFavoriteStatusAction } from '../api-actions';

type DataFavorites = {
  favorites: Offers;
  favoritesFetchStatus: string;
  favoritesPostStatus: string
};

const initialState: DataFavorites = {
  favorites: [],
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
        state.favorites = action.payload;
        state.favoritesFetchStatus = FetchStatus.Success;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favoritesFetchStatus = FetchStatus.Rejected;
      })
      .addCase(postFavoriteStatusAction.pending, (state) => {
        state.favoritesPostStatus = FetchStatus.Loading;
      })
      .addCase(postFavoriteStatusAction.fulfilled, (state, action) => {
        state.favoritesPostStatus = FetchStatus.Success;
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {state.favorites = state.favorites.filter((offer) =>
          offer.id !== action.payload.id
        );}
      })
      .addCase(postFavoriteStatusAction.rejected, (state) => {
        state.favoritesPostStatus = FetchStatus.Rejected;
      });
  }
});
