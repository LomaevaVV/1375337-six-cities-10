import { useAppDispatch, useAppSelector } from '../../hooks/index';
import Header from '../../components/header/header';
import CitiesFilterList from '../../components/cards-city-filter/city-filter';
import Loader from '../../components/loader/loader';
import Navigation from '../../components/header/navigation';
import { FetchStatus } from '../../const';
import { getOffersFetchStatus, selectCurrentOffers } from '../../store/data-offers/selectors';
import { getCity } from '../../store/app-process/selectors';
import { changeCity, setFocusedCardId } from '../../store/app-process/app-process';
import CitiesPlaces from '../../components/cities-places/cities-places';
import CitiesPlacesEmpty from '../../components/cities-places-empty/cities-places-empty';


export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentCityName = useAppSelector(getCity);
  const currentOffers = useAppSelector(selectCurrentOffers);
  const offersFetchStatus = useAppSelector(getOffersFetchStatus);
  dispatch(setFocusedCardId(undefined));

  if (
    offersFetchStatus === FetchStatus.Idle ||
    offersFetchStatus === FetchStatus.Loading
  ) {
    return <Loader />;
  }

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
            <CitiesFilterList
              selectedCity={currentCityName}
              onChangeCity={handleCityChange}
            />
          </section>
        </div>
        <div className="cities">
          { currentOffers.length === 0 && offersFetchStatus === FetchStatus.Success
            ? <CitiesPlacesEmpty cityName={currentCityName}/>
            :
            <CitiesPlaces
              offersFetchStatus={offersFetchStatus}
              currentOffers={currentOffers}
              currentCityName={currentCityName}
            /> }
        </div>
      </main>
    </div>
  );
}

