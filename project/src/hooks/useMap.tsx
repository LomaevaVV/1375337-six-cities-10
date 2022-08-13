import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {OfferCity} from '../types/offer';
import leaflet, {Map} from 'leaflet';

const OPEN_MAP = {
  layer:'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

export default function useMap( mapRef: MutableRefObject<HTMLElement | null>, city: OfferCity): Map | null {
  const isRenderedRef = useRef<boolean>(false);
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const {location} = city;
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom
      });

      leaflet
        .tileLayer(
          OPEN_MAP.layer,
          {
            attribution: OPEN_MAP.attribution,
          },
        )
        .addTo(instance);


      setMap(instance);
      isRenderedRef.current = true;
    } else {
      const {location} = city;
      map?.setView({lat: location.latitude, lng: location.longitude});
    }
  }, [mapRef, map, city]);

  return map;
}
