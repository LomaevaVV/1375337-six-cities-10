import { createSelector } from 'reselect';
import {AuthorizationStatus, NameSpace} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State) => state[NameSpace.User].userEmail;

export const getIsUserAuth = createSelector(
  [getAuthorizationStatus],
  (authorizationStatus: string) => authorizationStatus === AuthorizationStatus.Auth
);
