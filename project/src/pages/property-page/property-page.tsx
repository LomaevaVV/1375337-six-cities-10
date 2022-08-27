import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Header from '../../components/header/header';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import CardsList from '../../components/cards-list/cards-list';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import Map from '../../components/map/map';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import {CardClassName, FavoriteBtnComponent, mapClassName, FetchStatus, PageSettings} from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks/index';
import {formatRatingToStars, ucFirstLetter} from '../../utils';
import Navigation from '../../components/header/navigation';
import Loader from '../../components/loader/loader';
import { fetchOfferAction, fetchNearbyOffersAction, fetchReviewsAction } from '../../store/api-actions';
import Reviews from '../../components/reviews/reviews';
import { getOfferFetchStatus } from '../../store/data-offer/selectors';
import { getOffer } from '../../store/data-offer/selectors';
import { getNearbyOffers } from '../../store/data-nearby-offers/selectors';
import { Offer } from '../../types/offer';

function PropertyStatus (): JSX.Element {
  return (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  );
}

function HostProStatus (): JSX.Element {
  return (
    <span className="property__user-status">
      Pro
    </span>
  );
}

export default function PropertyPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!isRenderedRef.current) {
      dispatch(fetchOfferAction(Number(id)));
      dispatch(fetchNearbyOffersAction(Number(id)));
      dispatch(fetchReviewsAction(Number(id)));
      isRenderedRef.current = true;
    }
  }, [dispatch, id]);

  const offerFetchStatus = useAppSelector(getOfferFetchStatus);
  const offer = useAppSelector(getOffer);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, PageSettings.NEARBY_CARDS_AMOUNT);

  if (
    offerFetchStatus === FetchStatus.Idle ||
    offerFetchStatus === FetchStatus.Loading
  ) {
    return <Loader />;
  }

  if (!offer || offerFetchStatus === FetchStatus.Rejected) {
    return (<NotFoundPage />);
  }

  const {
    bedrooms,
    description,
    goods,
    host,
    images,
    isFavorite,
    isPremium,
    maxAdults,
    price,
    rating,
    title,
    type
  } = offer as Offer;

  return (
    <div className="page">
      <Header>
        <Navigation />
      </Header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <OfferGallery images={images} type={type}/>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PropertyStatus />}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <FavoriteButton
                  isFavorite={isFavorite}
                  pageType={FavoriteBtnComponent.PropertyPage}
                  offer={offer}
                />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: formatRatingToStars(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {ucFirstLetter(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((item) => (
                      <li key={item} className="property__inside-item">
                        {item}
                      </li>)
                    )
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <HostProStatus />}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews offerId={Number(id)} />
            </div>
          </div>
          <Map
            mapClassName={mapClassName.Property}
            cityName={offer.city.name}
            points={[...nearbyOffers, offer]}
            selectedPointId={Number(id)}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers={nearbyOffers} cardClassName={CardClassName.NearPlaces} />
          </section>
        </div>
      </main>
    </div>

  );
}
