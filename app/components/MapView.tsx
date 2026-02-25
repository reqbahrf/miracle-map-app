'use client';
import Map from 'react-map-gl/maplibre';
export default function MapView() {
  return (
    <Map
      initialViewState={{
        longitude: 120.9842,
        latitude: 14.5995,
        zoom: 12,
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle='https://tiles.openfreemap.org/styles/liberty'
    />
  );
}
