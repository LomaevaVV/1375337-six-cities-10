import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesFilterList from '../../components/cards-city-filter/city-filter';
import CardsSorting from '../../components/cards-sorting/cards-sorting-form';
import Loader from '../../components/loader/loader';
import Error from '../../components/full-page-error/error';
import Navigation from '../../components/header/navigation';
import { CardClassName, mapClassName, FetchStatus } from '../../const';
import { getOffersFetchStatus, selectCurrentOffers } from '../../store/data-offers/selectors';
import { getCity, getFocusedCardId } from '../../store/app-process/selectors';
import { changeCity, setFocusedCardId } from '../../store/app-process/app-process';
import { store } from '../../store';
import { fetchOffersAction } from '../../store/api-actions';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCity);
  const selectedOfferId = useAppSelector(getFocusedCardId);
  const currentOffers = useAppSelector(selectCurrentOffers);
  const offersFetchStatus = useAppSelector(getOffersFetchStatus);

  if (
    offersFetchStatus === FetchStatus.Idle ||
    offersFetchStatus === FetchStatus.Loading
  ) {
    return <Loader />;
  }

  const onListItemHover = (listItemId?: number) => {
    dispatch(setFocusedCardId(listItemId));
  };

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  const onErrorButtonHover = () => {
    store.dispatch(fetchOffersAction());
  };

  return (
    <div className="page page--gray page--main">
      <Header>
        <Navigation />
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesFilterList selectedCity={currentCity.name} onChangeCity={handleCityChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {offersFetchStatus === FetchStatus.Rejected
              ? <Error onClick={onErrorButtonHover}/>
              :
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
                <CardsSorting />
                <CardsList offers={currentOffers} cardClassName={CardClassName.Cities} onListItemHover={onListItemHover}/>
              </section>}
            <div className="cities__right-section">
              <Map mapClassName={mapClassName.Cities} city={currentCity} points={currentOffers} selectedPointId={selectedOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
