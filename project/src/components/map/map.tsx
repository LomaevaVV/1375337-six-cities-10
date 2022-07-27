import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {OfferCity, Offers} from '../../types/offer';
import {URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


type MapProps = {
  mapClassName: string;
  city: OfferCity;
  points: Offers;
};

export default function Map({mapClassName, city, points}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const {location} = point;
        const marker = leaflet.marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points]);

  return <section className={`${mapClassName}__map map`} ref={mapRef}></section>;
}
