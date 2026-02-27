import MapView from './components/MapView';
import SearchBar from './components/SeachBar';

export default function Home() {
  return (
    <div className='w-full h-dvh'>
      <main className='w-full h-full overflow-hidden relative'>
        <MapView />
        <SearchBar />
      </main>
    </div>
  );
}
