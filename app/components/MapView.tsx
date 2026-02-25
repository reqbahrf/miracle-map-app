'use client';
import Map from 'react-map-gl/maplibre';
import { getCurrentLocations } from '@/libs/utils/getCurrentLocations';
import { useEffect, useState } from 'react';
import MapLoading from './skeleton/MapLoading';
export default function MapView() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 0,
  });

  useEffect(() => {
    getCurrentLocations()
      .then((position) => {
        setViewState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          zoom: 12,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <MapLoading />
  ) : (
    <Map
      initialViewState={viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: '100%', height: '100%' }}
      mapStyle='https://tiles.openfreemap.org/styles/liberty'
    />
  );
}
