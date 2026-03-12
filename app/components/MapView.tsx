'use client';
import { useCallback } from 'react';
import Map, {
  Popup,
  MapLayerMouseEvent,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getCurrentLocations } from '@/libs/utils/getCurrentLocations';
import { useEffect, useState } from 'react';
import MapLoading from './skeleton/MapLoading';
export default function MapView() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 0,
    bearing: 0,
    pitch: 0,
  });

  const [popupInfo, setPopupInfo] = useState<{
    lng: number;
    lat: number;
    city?: string;
    region?: string;
    name?: string;
  } | null>(null);

  useEffect(() => {
    getCurrentLocations()
      .then((position) => {
        setViewState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          zoom: 12,
          bearing: 0,
          pitch: 0,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleMapClick = useCallback(async (event: MapLayerMouseEvent) => {
    const { lng, lat } = event.lngLat;
    setPopupInfo({ lng, lat, name: 'Loading...' });

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
      );
      const data = await res.json();
      const addr = data.address;
      setPopupInfo({
        lng,
        lat,
        city: addr.city || addr.town || addr.village || 'Unknown',
        region: addr.state || addr.province || 'Unknown',
        name: data.display_name,
      });
    } catch (error) {
      setPopupInfo(null);
    }
  }, []);

  if (isLoading) {
    return <MapLoading />;
  }

  return (
    <>
      <Map
        initialViewState={{ ...viewState }}
        onMove={(evt) => setViewState(evt.viewState)}
        onClick={handleMapClick}
        mapStyle='/style/simple-dark-miracle-map.json'
      >
        <GeolocateControl position='bottom-left' />
        <FullscreenControl position='bottom-right' />
        <NavigationControl position='bottom-right' />
        <ScaleControl position='bottom-left' />
        {popupInfo && (
          <Popup
            anchor='top'
            longitude={popupInfo.lng}
            latitude={popupInfo.lat}
            onClose={() => setPopupInfo(null)}
            closeButton={false}
            maxWidth='300px'
            className='custom-map-popup'
          >
            <div className='overflow-hidden rounded-lg border border-accent bg-neutral shadow-2xl ring-1 ring-black/5'>
              {/* Header (Primary Color) */}
              <div className='flex items-center justify-between bg-primary px-3 py-2'>
                <h3 className='text-xs font-bold uppercase tracking-wider text-accent'>
                  Location Details
                </h3>
                <button
                  onClick={() => setPopupInfo(null)}
                  className='text-neutral hover:text-accent transition-colors text-lg leading-none'
                >
                  &times;
                </button>
              </div>

              {/* Body (Neutral & Primary Text) */}
              <div className='p-4 space-y-3'>
                <div>
                  <p className='text-[10px] font-bold uppercase text-primary/50 italic'>
                    City
                  </p>
                  <p className='text-sm font-semibold text-primary'>
                    {popupInfo.city}
                  </p>
                </div>

                <div>
                  <p className='text-[10px] font-bold uppercase text-primary/50 italic'>
                    Region
                  </p>
                  <p className='text-sm font-semibold text-primary'>
                    {popupInfo.region}
                  </p>
                </div>

                {/* Coordinates Footer */}
                <div className='mt-2 flex items-center justify-between border-t border-accent/20 pt-2'>
                  <div className='flex flex-col'>
                    <span className='text-[9px] text-primary/40 font-mono'>
                      LAT: {popupInfo.lat.toFixed(5)}
                    </span>
                    <span className='text-[9px] text-primary/40 font-mono'>
                      LNG: {popupInfo.lng.toFixed(5)}
                    </span>
                  </div>
                  <div className='h-2 w-2 rounded-full bg-accent animate-pulse' />
                </div>
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </>
  );
}
