import Account from './Account';
import SearchBar from './SeachBar';
import Image from 'next/image';
import Icon from '@/app/icon1.png';

export default function Header() {
  return (
    <header className='bg-none absolute top-0 left-1/2 transform -translate-x-1/2 z-50 w-full text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='shrink-0 flex items-center'>
          <div className='md:w-8 md:h-8 w-6 h-6 rounded-full flex items-center justify-center mr-3 ring-2 ring-accent ring-offset-2 ring-offset-primary'>
            <Image
              src={Icon}
              alt='icon'
              width={32}
              height={32}
            />
          </div>
          <span className='hidden md:block text-xl font-semibold'>
            Miracle Map
          </span>
        </div>
        <SearchBar />
        <Account />
      </div>
    </header>
  );
}
