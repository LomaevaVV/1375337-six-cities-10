
import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offer } from '../../types/offer';

export const getOffer = (state: State): Offer | undefined => state[NameSpace.DataOffer].offer;
export const getOfferFetchStatus = (state: State): string => state[NameSpace.DataOffer].offerFetchStatus;
