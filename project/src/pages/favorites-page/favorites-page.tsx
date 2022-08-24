import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesEmpty from '../../components/favorites-list/favorites-empty';
import FavoritesListItem from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import Navigation from '../../components/header/navigation';
import Loader from '../../components/loader/loader';
import { AppRoute, FetchStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites, getFavoritesFetchStatus } from '../../store/data-favorites/selectors';
import { FavoritesOffers } from '../../types/offer';
import { getOffersByCity } from '../../utils';
import NotFoundPage from '../not-found-page/not-found-page';

export default function FavoritesPage(): JSX.Element {
  const favoritesOffers = useAppSelector(getFavorites);
  const favorites: FavoritesOffers[] = getOffersByCity(favoritesOffers);
  const favoritesFetchStatus = useAppSelector(getFavoritesFetchStatus);

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, []);

  if (
    favoritesFetchStatus === FetchStatus.Idle ||
    favoritesFetchStatus === FetchStatus.Loading
  ) {
    return <Loader />;
  }

  if (!favorites || favoritesFetchStatus === FetchStatus.Rejected) {
    return (<NotFoundPage />);
  }

  return (
    <div className="page">
      <Header>
        <Navigation />
      </Header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            { favoritesOffers.length === 0 && favoritesFetchStatus === FetchStatus.Succecc
              ? <FavoritesEmpty />
              :
              <ul className="favorites__list">
                {favorites.map((item) => (
                  <FavoritesListItem
                    key={item.city}
                    favorites={item}
                  />
                ))}
              </ul>}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}
