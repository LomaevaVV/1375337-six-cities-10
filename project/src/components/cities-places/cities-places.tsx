import { CardClassName, FetchStatus, mapClassName } from '../../const';
import { store } from '../../store';
import { fetchOffersAction } from '../../store/api-actions';
import Error from '../../components/full-page-error/error';
import CardsList from '../../components/cards-list/cards-list';
import Map from '../../components/map/map';
import CardsSorting from '../../components/cards-sorting/cards-sorting-form';
import { Offers } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFocusedCardId } from '../../store/app-process/selectors';
import { setFocusedCardId } from '../../store/app-process/app-process';

type CitiesPlacesProps = {
  offersFetchStatus: string;
  currentOffers: Offers
  currentCityName: string
};

export default function CitiesPlaces({offersFetchStatus, currentOffers, currentCityName}: CitiesPlacesProps): JSX.Element {
  const dispatch = useAppDispatch();

  const selectedOfferId = useAppSelector(getFocusedCardId);

  const onListItemHover = (listItemId?: number) => {
    dispatch(setFocusedCardId(listItemId));
  };

  const onErrorButtonHover = () => {
    store.dispatch(fetchOffersAction());
  };

  return (
    <div className="cities__places-container container">
      {offersFetchStatus === FetchStatus.Rejected
        ? <Error onClick={onErrorButtonHover}/>
        :
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {currentCityName}</b>
          <CardsSorting />
          <CardsList offers={currentOffers} cardClassName={CardClassName.Cities} onListItemHover={onListItemHover}/>
        </section>}
      <div className="cities__right-section">
        <Map mapClassName={mapClassName.Cities} cityName={currentCityName} points={currentOffers} selectedPointId={selectedOfferId} />
      </div>
    </div>
  );
}
