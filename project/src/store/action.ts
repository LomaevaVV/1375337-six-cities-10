import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('filter/changeCity', (value) => ({
  payload: value
}));

export const loadOffers = createAction('load/loadOffers', (value) => ({
  payload: value
}));

export const setFocusedCardId = createAction('cardsList/setFocusedCardId', (value) => ({
  payload: value
}));

export const setSortType = createAction('sorting/setSortingType', (value) => ({
  payload: value
}));
