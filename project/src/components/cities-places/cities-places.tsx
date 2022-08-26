import { CardClassName, FetchStatus, mapClassName } from '../../const';
import Error from '../../components/full-page-error/error';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CardsSorting from '../../components/cards-sorting/cards-sorting-form';
import { Offers } from '../../types/offer';

type CitiesPlacesProps = {
  offersFetchStatus: string;
  currentOffers: Offers
  currentCityName: string
};

export default function CitiesPlaces({offersFetchStatus, currentOffers, currentCityName}: CitiesPlacesProps): JSX.Element {
  return (
    <div className="cities__places-container container">
      {offersFetchStatus === FetchStatus.Rejected
        ? <Error />
        :
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {currentCityName}</b>
          <CardsSorting />
          <CardsList offers={currentOffers} cardClassName={CardClassName.Cities} />
        </section>}
      <div className="cities__right-section">
        <Map mapClassName={mapClassName.Cities} cityName={currentCityName} points={currentOffers} />
      </div>
    </div>
  );
}
