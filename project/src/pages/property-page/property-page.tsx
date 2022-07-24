import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import ReviewCard from '../../components/review-card/review-card';
import ReviewForm from '../../components/review-form/review-form';
import CardsList from '../../components/cards-list/cards-list';
import {CardClassName} from '../../const';
import {Offers} from '../../types/offer';
import {Reviews} from '../../types/review';
import {setRatingStarsPercent, setHostProStatus} from '../../utils';

type PropertyPageProps = {
  offers: Offers,
  reviews: Reviews
};

const setPropertyStatus = (): JSX.Element => (
  <div className="property__mark">
    <span>Premium</span>
  </div>
);

export default function PropertyPage({offers, reviews}: PropertyPageProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === Number(params.id));
  const setFavoriteButton = (isFavorite: boolean) => isFavorite ? 'property__bookmark-button--active' : '';

  if (!offer) {
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
  } = offer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((img) => (
                  <div key={img} className="property__image-wrapper">
                    <img className="property__image" src={img} alt={type} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? setPropertyStatus() : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${setFavoriteButton(isFavorite)}`} type="button">
                  <svg className="place-card__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: setRatingStarsPercent(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
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
                      </li>))
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
                  {host.isPro ? setHostProStatus() : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">
                    {reviews.length}
                  </span>
                </h2>
                <ul className="reviews__list">
                  {reviews.map((item) => <ReviewCard key={item.id} review={item} />)}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardsList offers = {offers} cardClassName={CardClassName.PropertyPage}/>
          </section>
        </div>
      </main>
    </div>

  );
}
