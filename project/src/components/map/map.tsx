import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {OfferCity, Offers} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});


type MapProps = {
  mapClassName: string;
  city: OfferCity;
  points: Offers;
  selectedPointId: number | undefined;
};

export default function Map({mapClassName, city, points, selectedPointId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView(leaflet.latLng(city.location.latitude, city.location.longitude), city.location.zoom);

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
  }, [map, points, selectedPointId, city]);

  return <section className={`${mapClassName}__map map`} ref={mapRef}></section>;
}
