import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import { Offers } from '../../types/offer';
import { CitiesList, MarkerUrl } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';
import { getFocusedCardId } from '../../store/app-process/selectors';

const defaultCustomIcon = leaflet.icon({
  iconUrl: MarkerUrl.DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: MarkerUrl.CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});


type MapProps = {
  mapClassName: string;
  cityName: string;
  points: Offers;
};

export default function Map({mapClassName, cityName, points}: MapProps): JSX.Element {
  const city = CitiesList.find((value) => value.name === cityName) || CitiesList[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const selectedPointId = useAppSelector(getFocusedCardId);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {location} = point;
        const marker = leaflet.marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedPointId && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPointId]);

  return <section className={`${mapClassName}__map map`} ref={mapRef}></section>;
}
