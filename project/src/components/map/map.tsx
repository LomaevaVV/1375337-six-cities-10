import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {OfferCity, Offer, Offers} from '../../types/offer';
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
  selectedPoint: Offer | undefined;
};

export default function Map({mapClassName, city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const pointsToRender = selectedPoint && !points.includes(selectedPoint) ? [...points, selectedPoint] : points;

      pointsToRender.forEach((point) => {
        const {location} = point;
        const marker = leaflet.marker({
          lat: location.latitude,
          lng: location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className={`${mapClassName}__map map`} ref={mapRef}></section>;
}
