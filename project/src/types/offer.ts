type OfferHost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

type LocationСoordinates = {
    latitude: number;
    longitude: number;
    zoom: number;
  };

export type OfferCity = {
  location: LocationСoordinates;
  name: string;
};

export type Offer = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: LocationСoordinates;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string
};

export type OfferFavoriteStatus = {
  offerId: number;
  status: number
}

export type FavoritesOffers = {
  city: string;
  offers: Offers | [];
}

export type Offers = Offer[];
