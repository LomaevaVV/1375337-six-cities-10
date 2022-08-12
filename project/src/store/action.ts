import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';
import { AuthorizationStatus, AppRoute } from '../const';

export const loadOffers = createAction<Offers>('loadData/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const redirectToRoute = createAction<AppRoute>('login/redirectToRoute');

export const changeCity = createAction('filter/changeCity', (value) => ({
  payload: value
}));

export const setFocusedCardId = createAction('cardsList/setFocusedCardId', (value) => ({
  payload: value
}));

export const setSortType = createAction('sorting/setSortingType', (value) => ({
  payload: value
}));

// export const setError = createAction<string | null>('game/setError');
