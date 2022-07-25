import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { setRatingStarsPercent } from '../../utils';

type CardProps = {
  offer: Offer;
  cardClassName: string;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export default function Card ({offer, cardClassName, onMouseOver, onMouseOut,}: CardProps): JSX.Element {
  const setFavoriteButton = (isFavorite: boolean) => isFavorite ? 'place-card__bookmark-button--active' : '';

  return (
    <article onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`${cardClassName}__card place-card`}>
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${setFavoriteButton(offer.isFavorite)}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: setRatingStarsPercent(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
