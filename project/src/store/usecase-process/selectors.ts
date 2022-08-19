import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.UseCase].city;
export const getFocusedCardId = (state: State): number | undefined => state[NameSpace.UseCase].selectedOfferId;
export const getSortType = (state: State): string => state[NameSpace.UseCase].sortType;
