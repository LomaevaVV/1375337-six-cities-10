import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_CITY, OffersSortTypes } from '../../const';

type AppProcess = {
  city: string
  selectedOfferId: number | undefined
  sortType: string
};

const initialState: AppProcess = {
  city: DEFAULT_CITY,
  sortType: OffersSortTypes.Popular,
  selectedOfferId: undefined
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    setFocusedCardId: (state, action) => {
      state.selectedOfferId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const {changeCity, setFocusedCardId, setSortType} = appProcess.actions;
