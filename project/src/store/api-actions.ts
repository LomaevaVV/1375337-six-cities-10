import { createAsyncThunk } from '@reduxjs/toolkit';
import { generatePath } from 'react-router';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { Offers, Offer } from '../types/offer';
import { Reviews } from '../types/review';
import { AppDispatch, State } from '../types/state';
import { AuthData } from '../types/auth-data';
import { ReviewComment } from '../types/review';
import { UserData } from '../types/user-data';
import {
  redirectToRoute
} from './action';
import { toast } from 'react-toastify';
import { dropToken, saveToken } from '../services/token';


export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);

      return data;
    } catch(e) {
      toast.error('Offers loading error', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });

export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    try {
      const {data: {email}} = await api.get(APIRoute.Login);

      return email;
    } catch {

      toast.warn('You are not authorized or Unable to check authorization status', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  },
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(redirectToRoute(AppRoute.Main));

      return email;
    } catch(e) {
      toast.error('Unable to login', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
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
    } catch {
      toast.error('Unable to logout', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  },
);

export const fetchOfferAction = createAsyncThunk<Offer, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(generatePath(APIRoute.Offer, {id: String(offerId)}));
      return data;
    } catch(e) {
      toast.error('Offer details loading error', {
        position: toast.POSITION.TOP_CENTER,
      });
      throw e;
    }
  });

export const fetchReviewsAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviews',
  async (offerId, {extra: api}) => {
    try {
      const {data} = await api.get<Reviews>(generatePath(APIRoute.Reviews, {id: String(offerId)}));

      return data;
    } catch(e) {
      toast.error('Reviews loading error', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });

export const fetchNearbyOffersAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offers>(generatePath(APIRoute.NearbyOffers, {id: String(offerId)}));

      return data;
    } catch(e) {
      toast.error('Nearby offers loading error', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  });

export const postReviewAction = createAsyncThunk<Reviews, ReviewComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/post reviewComment',
  async ({offerId, comment, rating, resetData}, {extra: api}) => {
    try {
      const {data} = await api.post<Reviews>(
        generatePath(APIRoute.Reviews, {id: String(offerId)}),
        {comment, rating}
      );

      resetData();
      return data;
    } catch(e) {
      toast.error('Unable to to post a review', {
        position: toast.POSITION.TOP_CENTER,
      });

      throw e;
    }
  },
);
