import { Link } from 'react-router-dom';
import { CardClassName } from '../../const';
import { FavoritesOffers } from '../../types/offer';
import Card from '../card/card';

type FavoritesListItemProps = {
  favorites: FavoritesOffers;
};

export default function FavoritesListItem({favorites}: FavoritesListItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{favorites.city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.offers.map((item) => (
          <Card
            key={item.id}
            offer={item}
            cardClassName={CardClassName.Favorites}
          />
        ))}
      </div>
    </li>

  );
}
