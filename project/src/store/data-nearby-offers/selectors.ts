import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offers } from '../../types/offer';

export const getNearbyOffers = (state: State): Offers | [] => state[NameSpace.DataNearbyOffers].nearbyOffers;
