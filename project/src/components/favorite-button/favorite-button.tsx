import {FavoriteBtnComponent} from '../../const';
import cn from 'classnames';

const favoriteButtonSpec = {
  propertyPage: {
    className: 'property',
    width: '31',
    height: '33'
  },
  card: {
    className: 'place-card',
    width: '18',
    height: '19'
  }
};

type FavoriteButtonProps = {
  isFavorite: boolean;
  pageType: string;
}

export default function FavoriteButton({isFavorite, pageType}: FavoriteButtonProps): JSX.Element {
  const buttonSpec =
    pageType === FavoriteBtnComponent.PropertyPage
      ? favoriteButtonSpec.propertyPage
      : favoriteButtonSpec.card;

  const buttonClassName = cn(`${buttonSpec.className}__bookmark-button button`, {'place-card__bookmark-button--active': isFavorite});

  return(
    <button className={buttonClassName} type="button">
      <svg className="place-card__bookmark-icon" width={buttonSpec.width} height={buttonSpec.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
