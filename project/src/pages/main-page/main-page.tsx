import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeCity, setFocusedCardId } from '../../store/action';
import Header from '../../components/header/header';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CitiesFilterList from '../../components/city-filter/city-filter';
import {CardClassName, mapClassName, CitiesList} from '../../const';
import {Offers} from '../../types/offer';

type MainPageProps = {
  offers: Offers;
};


export default function MainPage({offers}: MainPageProps): JSX.Element {
  const currentCityName = useAppSelector((state) => state.city);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  // const offers = useAppSelector((state) => state.offers);

  const filteredOffersByCity = offers
    ? offers.filter((offer) => offer.city.name === currentCityName)
    : [];

  const currentCity = CitiesList.find((value) => value.name === currentCityName) || CitiesList[0];

  const dispatch = useAppDispatch();

  const onListItemHover = (listItemId?: number) => {
    dispatch(setFocusedCardId(listItemId));
  };

  const onChangeCityHandler = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesFilterList selectedCity={currentCityName} onChangeCity={onChangeCityHandler}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffersByCity.length} places to stay in {currentCityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CardsList offers = {filteredOffersByCity} cardClassName={CardClassName.Cities} onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <Map mapClassName={mapClassName.Cities} city={currentCity} points={filteredOffersByCity} selectedPointId={selectedOfferId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
