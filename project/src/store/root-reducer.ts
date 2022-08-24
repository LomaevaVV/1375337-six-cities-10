import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataOffer } from './data-offer/data-offer';
import { dataOffers } from './data-offers/data-offers';
import { dataReviews } from './data-reviews/data-reviews';
import { dataNearbyOffers } from './data-nearby-offers/data-nearby-offers';
import { appProcess } from './app-process/app-process';
import { userProcess } from './user-process/user-process';
import { dataFavorites } from './data-favorites/data-favorites';

export const rootReducer = combineReducers({
  [NameSpace.DataOffer]: dataOffer.reducer,
  [NameSpace.DataOffers]: dataOffers.reducer,
  [NameSpace.DataFavorites]: dataFavorites.reducer,
  [NameSpace.DataNearbyOffers]: dataNearbyOffers.reducer,
  [NameSpace.DataReviews]: dataReviews.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
