import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeCity, setFocusedCardId } from '../../store/action';
import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesFilterList from '../../components/cards-city-filter/city-filter';
import CardsSorting from '../../components/cards-sorting/cards-sorting-form';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { CardClassName, mapClassName, CitiesList } from '../../const';
import { Offers } from '../../types/offer';
import { getSortedCards } from '../../utils';


type MainPageProps = {
  offers: Offers;
};


export default function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.city);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  const selectedSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();

  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const filteredOffersByCity = offers?.filter((offer) => offer.city.name === currentCityName) || [];
  const sortedOffers: Offers = filteredOffersByCity.length > 0
    ? getSortedCards(filteredOffersByCity, selectedSortType)
    : [];

  const currentCity = CitiesList.find((value) => value.name === currentCityName) || CitiesList[0];

  const onListItemHover = (listItemId?: number) => {
    dispatch(setFocusedCardId(listItemId));
  };

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="page page--gray page--main">
      <Header />

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
