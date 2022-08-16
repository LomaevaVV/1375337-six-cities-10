import dayjs from 'dayjs';
import { OffersSortTypes } from './const';
import { Offers } from './types/offer';

const STARS_MAX = 5;

const formatRatingToStars = (rating: number): string => `${Math.round((rating * 100 / STARS_MAX))}%`;

const ucFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const humanizeEventDate = (date: string, format: string) => dayjs(date).format(format);

const getSortedCards = (offers: Offers, sortType:string): Offers => {
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

const validateLoginForm = (email: HTMLInputElement, password: HTMLInputElement) => {
  const regExpPassword = /^.*(?=.{1,})(?=.*[a-zA-Z])(?=.*\d)/;
  const regExpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return !!(password.value.match(regExpPassword) && email.value.match(regExpEmail));
};

const getPath = (path: string, offerId: number) => (`${path}/${offerId}`);

export {getPath, formatRatingToStars, ucFirstLetter, humanizeEventDate, getSortedCards, validateLoginForm};
