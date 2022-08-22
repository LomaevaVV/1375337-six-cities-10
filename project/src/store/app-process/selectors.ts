import {CitiesList, NameSpace} from '../../const';
import { OfferCity } from '../../types/offer';
import {State} from '../../types/state';

export const getCity = (state: State): OfferCity => {
  const currentCityName = state[NameSpace.App].city;
  const currentCity = CitiesList.find((value) => value.name === currentCityName) || CitiesList[0];
  return currentCity;
};
export const getFocusedCardId = (state: State): number | undefined => state[NameSpace.App].selectedOfferId;
export const getSortType = (state: State): string => state[NameSpace.App].sortType;


