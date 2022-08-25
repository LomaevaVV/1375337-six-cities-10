import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Offers } from '../../types/offer';

export const getFavorites = (state: State): Offers => state[NameSpace.DataFavorites].favorites;
export const getFavoritesFetchStatus = (state: State): string => state[NameSpace.DataFavorites].favoritesFetchStatus;
export const getFavoritesPostStatus = (state: State): string => state[NameSpace.DataFavorites].favoritesPostStatus;
