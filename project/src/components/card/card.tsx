import { Link } from 'react-router-dom';
import { AppRoute, CardClassName, FavoriteBtnComponent } from '../../const';
import { generatePath } from 'react-router';
import { Offer } from '../../types/offer';
import { formatRatingToStars, ucFirstLetter } from '../../utils';
import FavoriteButton from '../favorite-button/favorite-button';
import { memo } from 'react';

type CardProps = {
  offer: Offer;
  cardClassName: string;
  onListItemHover?: (listItemId?: number) => void;
  onListItemClick?: () => void;
}

function Card ({offer, cardClassName, onListItemHover, onListItemClick}: CardProps): JSX.Element {

  return (
    <article
      onMouseOver={() => onListItemHover?.(offer.id)}
      onMouseLeave={() => onListItemHover?.()}
      onClick={() => onListItemClick?.()}
      className={`${cardClassName}__card place-card`}
    >
      <div className={`place-card__mark ${!offer.isPremium && 'visually-hidden'}`}>
        <span>Premium</span>
      </div>
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(AppRoute.Room, {id: String(offer.id)})}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={cardClassName === CardClassName.Favorites ? '150' : '260'}
            height={cardClassName === CardClassName.Favorites ? '110' : '200'}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton
            isFavorite={offer.isFavorite}
            pageType={FavoriteBtnComponent.Card}
            offer={offer}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: formatRatingToStars(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, {id: String(offer.id)})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{ucFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default memo(Card);
