import dayjs from 'dayjs';
import { CitiesList, OffersSortTypes } from './const';
import { FavoritesOffers, Offers } from './types/offer';

const STARS_MAX = 5;

export const formatRatingToStars = (rating: number): string => `${(Math.round(rating) * 100) / STARS_MAX}%`;

export const ucFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const humanizeEventDate = (date: string, format: string) => dayjs(date).format(format);

export const getSortedCards = (offers: Offers, sortType:string): Offers => {
  switch (sortType) {
    case OffersSortTypes.Popular:
      return offers;
    case OffersSortTypes.PriceToHigh:
      return offers?.sort((offerB, offerA) => offerB.price - offerA.price);
    case OffersSortTypes.PriceToLow:
      return offers?.sort((offerB, offerA) => offerA.price - offerB.price);
    case OffersSortTypes.TopRatedFirst:
      return offers?.sort((offerB, offerA) => offerA.rating - offerB.rating);
  }
  return offers;
};

export const validateLoginForm = (email: HTMLInputElement, password: HTMLInputElement) => {
  const regExpPassword = /^.*(?=.{1,})(?=.*[a-zA-Z])(?=.*\d)/;
  const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !!(password.value.match(regExpPassword) && email.value.match(regExpEmail));
};

export const getPath = (path: string, offerId: number) => (`${path}/${offerId}`);

export const getOffersByCity = (offers: Offers | []) => {
  const favoritesOffers: FavoritesOffers[] = [];

  for (const city of CitiesList) {

    if (offers?.find((offer) => offer.city.name === city.name)) {
      favoritesOffers.push({
        city: city.name,
        offers: offers.filter((offer) => offer.city.name === city.name),
      });
    }
  }

  return favoritesOffers;
};
