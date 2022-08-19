import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesFilterList from '../../components/cards-city-filter/city-filter';
import CardsSorting from '../../components/cards-sorting/cards-sorting-form';
import LoadingScreen from '../../components/loader/loader';
import Navigation from '../../components/header/navigation';
import { CardClassName, mapClassName, CitiesList } from '../../const';
import { getSortedCards } from '../../utils';
import { getLoadedDataStatus, getOffers } from '../../store/data-process/selectors';
import { getCity, getFocusedCardId, getSortType } from '../../store/usecase-process/selectors';
import { changeCity, setFocusedCardId } from '../../store/usecase-process/usecase-process';

export default function MainPage(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const currentCityName = useAppSelector(getCity);
  const selectedOfferId = useAppSelector(getFocusedCardId);
  const selectedSortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();

  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const filteredOffersByCity = offers.filter((offer) => offer.city.name === currentCityName);
  const sortedOffers = getSortedCards(filteredOffersByCity, selectedSortType);

  const currentCity = CitiesList.find((value) => value.name === currentCityName) || CitiesList[0];

  const onListItemHover = (listItemId?: number) => {
    dispatch(setFocusedCardId(listItemId));
  };

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
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
            <CitiesFilterList selectedCity={currentCityName} onChangeCity={handleCityChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{sortedOffers.length} places to stay in {currentCityName}</b>
              <CardsSorting />
              <CardsList offers={sortedOffers} cardClassName={CardClassName.Cities} onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <Map mapClassName={mapClassName.Cities} city={currentCity} points={sortedOffers} selectedPointId={selectedOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
