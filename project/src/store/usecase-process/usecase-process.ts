import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_CITY, OffersSortTypes } from '../../const';
import { UseCaseProcess } from '../../types/state';

const initialState: UseCaseProcess = {
  city: DEFAULT_CITY,
  sortType: OffersSortTypes.Popular,
  selectedOfferId: undefined
};

export const useCaseProcess = createSlice({
  name: NameSpace.UseCase,
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

export const {changeCity, setFocusedCardId, setSortType} = useCaseProcess.actions;
