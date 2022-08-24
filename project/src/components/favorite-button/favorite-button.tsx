import {AuthorizationStatus, FavoriteBtnComponent} from '../../const';
import cn from 'classnames';
import { postFavoriteStatusAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Offer } from '../../types/offer';
import { toast } from 'react-toastify';

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
  offer: Offer
}

export default function FavoriteButton({isFavorite, pageType, offer}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const buttonSpec =
    pageType === FavoriteBtnComponent.PropertyPage
      ? favoriteButtonSpec.propertyPage
      : favoriteButtonSpec.card;

  const buttonClassName = cn(`${buttonSpec.className}__bookmark-button button`, {'place-card__bookmark-button--active': isFavorite});

  const handleFavoriteBtnClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    if(authorizationStatus === AuthorizationStatus.Auth) {
      const offerStatus = {
        offerId: offer.id,
        status: isFavorite ? 0 : 1
      };
      dispatch(postFavoriteStatusAction(offerStatus));
      window.console.log(evt);
    } else {
      toast.warn('Please login to to work with favorites', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return(
    <button
      className={buttonClassName}
      type="button"
      onClick={handleFavoriteBtnClick}
    >
      <svg className="place-card__bookmark-icon" width={buttonSpec.width} height={buttonSpec.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
