import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { OfferCity, Offers } from '../../types/offer';
import { createSelector } from 'reselect';
import { getCity, getSortType } from '../app-process/selectors';
import { getSortedCards } from '../../utils';

export const getOffers = (state: State): Offers | [] => state[NameSpace.DataOffers].offers;
export const getOffersFetchStatus = (state: State): string => state[NameSpace.DataOffers].offersFetchStatus;

export const selectCurrentOffers = createSelector(
  [getCity, getSortType, getOffers],
  (city: OfferCity, sortType: string, offers: Offers | []) => {
    const filteredOffersByCity = offers.filter((offer) => offer.city.name === city.name);
    return getSortedCards(filteredOffersByCity, sortType);
  }
);
