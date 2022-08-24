import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offers } from '../../types/offer';
import { createSelector } from 'reselect';
import { getCity, getSortType } from '../app-process/selectors';
import { getSortedCards } from '../../utils';

export const getOffers = (state: State): Offers | [] => state[NameSpace.DataOffers].offers;
export const getOffersFetchStatus = (state: State): string => state[NameSpace.DataOffers].offersFetchStatus;

export const selectCurrentOffers = createSelector(
  [getCity, getSortType, getOffers],
  (cityName: string, sortType: string, offers: Offers | []) => {
    const filteredOffersByCity = offers.filter((offer) => offer.city.name === cityName);
    return getSortedCards(filteredOffersByCity, sortType);
  }
);
