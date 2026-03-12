'use client';
import MapView from '../components/MapView';
import Header from '../components/common/Header';

export default function Home() {
  return (
    <div className='w-screen h-screen relative'>
      <Header />
      <MapView />
    </div>
  );
}
