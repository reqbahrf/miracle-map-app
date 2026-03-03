'use client';
import MapView from '../components/MapView';
import SearchBar from '../components/common/SeachBar';
import Header from '../components/common/Header';

export default function Home() {
  return (
    <div className='w-full h-dvh'>
      <main className='w-full h-full overflow-hidden relative'>
        <Header />
        <MapView />
      </main>
    </div>
  );
}
