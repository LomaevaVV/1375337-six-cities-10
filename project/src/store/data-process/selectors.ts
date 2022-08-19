
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offers, Offer } from '../../types/offer';
import { Reviews } from '../../types/review';

export const getOffers = (state: State): Offers | [] => state[NameSpace.Data].offers;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getOffer = (state: State): Offer | undefined => state[NameSpace.Data].offer;
export const getReviews = (state: State): Reviews | [] => state[NameSpace.Data].reviews;
export const getNearbyOffers = (state: State): Offers | [] => state[NameSpace.Data].nearbyOffers;
