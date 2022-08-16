import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/review';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { ReviewComment } from '../types/review';
import { UserData } from '../types/user-data';
import { loadOffers,
  loadOffer,
  loadNearbyOffers,
  loadRewies,
  setDataLoadedStatus,
  requireAuthorization,
  redirectToRoute,
  getUserEmail,
  setReviews
} from './action';
import { toast } from 'react-toastify';
import { dropToken, saveToken } from '../services/token';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  });

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main));
      dispatch(getUserEmail(email));
    } catch {
      toast.error('Server connection error');
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch {
      toast.error('Server connection error');
    }
  },
);

export const fetchOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offer>(generatePath(APIRoute.Offer, {id: String(offerId)}));
    dispatch(loadOffer(data));
    dispatch(setDataLoadedStatus(false));
  });

export const fetchReviewsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Reviews>(generatePath(APIRoute.Reviews, {id: String(offerId)}));
    dispatch(loadRewies(data));
    dispatch(setDataLoadedStatus(false));
  });

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Offers>(generatePath(APIRoute.NearbyOffers, {id: String(offerId)}));
    dispatch(loadNearbyOffers(data));
    dispatch(setDataLoadedStatus(false));
  });

export const postReviewAction = createAsyncThunk<void, ReviewComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/post reviewComment',
  async ({offerId, comment, rating, resetData}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(
        generatePath(APIRoute.Reviews, {id: String(offerId)}),
        {comment, rating}
      );
      window.console.log(data);
      dispatch(setReviews(data));
      resetData();
    } catch {
      toast.error('Server connection error');
    }
  },
);
