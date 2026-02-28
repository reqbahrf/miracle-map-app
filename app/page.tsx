import Image from 'next/image';
import icon from './icon1.png';
import { RiCompass3Line } from '@remixicon/react';
export default function Home() {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 h-[9dvh] bg-primary text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex items-center'>
              <div className='shrink-0 flex items-center'>
                <div className='w-8 h-8 rounded-full flex items-center justify-center mr-3 ring-2 ring-accent ring-offset-2 ring-offset-primary'>
                  <Image
                    src={icon}
                    alt='icon'
                    width={32}
                    height={32}
                  />
                </div>
                <span className='text-xl font-semibold'>Miracle Map</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className='hidden md:flex space-x-8'>
              <a
                href='#'
                className='text-white hover:text-gray-300 px-3 py-2 text-sm font-medium'
              >
                Map
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-300 px-3 py-2 text-sm font-medium'
              >
                Share a Story
              </a>
              <a
                href='#'
                className='text-white hover:text-gray-300 px-3 py-2 text-sm font-medium'
              >
                About Us
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className='flex items-center space-x-4'>
              <button className='text-white hover:text-gray-300 px-3 py-2 text-sm font-medium'>
                Log In
              </button>
              <button className='bg-accent hover:bg-yellow-600 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors'>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className='w-full h-dvh pt-[4dvh]'>
        <main className='w-full h-full overflow-hidden relative'>
          {/* <!-- Background Map Image Overlay --> */}
          <div
            className='absolute inset-0 z-0 opacity-40 bg-cover bg-center bg-[url("/hero.webp")]'
            data-alt='Dark blue world map view from space with glowing city lights'
          ></div>
          {/* <!-- Glow Overlay --> */}
          <div className='absolute inset-0 z-0 bg-hero-glow'></div>
          <div className='absolute inset-0 z-0 bg-linear-to-b from-primary/50 via-primary/80 to-primary'></div>
          <div className='relative z-10 mx-auto max-w-full px-6 py-24 text-center lg:py-32'>
            <div className='inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-8 backdrop-blur-sm'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-accent'></span>
              </span>
              <span className='text-xs font-semibold uppercase tracking-wider text-accent'>
                Live Miracles Reported Now
              </span>
            </div>
            <h1 className='font-serif text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-2xl'>
              Discover Miracles <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-white via-accent to-accent'>
                Happening Right Now
              </span>
            </h1>
            <p className='mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl'>
              A global community of faith, sharing divine interventions and
              sparking hope across continents. Witness the impossible becoming
              reality.
            </p>
            <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <button className='group relative flex h-14 min-w-[200px] items-center justify-center overflow-hidden rounded-full bg-accent px-8 text-base font-bold text-white shadow-[0_0_40px_rgba(184,134,11,0.4)] transition-all hover:bg-accent hover:shadow-[0_0_60px_rgba(184,134,11,0.6)]'>
                <span className='mr-2'>See Miracles on Map</span>
                <span className='material-symbols-outlined transition-transform group-hover:translate-x-1'>
                  <RiCompass3Line />
                </span>
              </button>
              <button className='flex h-14 min-w-[200px] items-center justify-center rounded-full border border-accent/50 bg-transparent px-8 text-base font-bold text-white transition-all hover:bg-accent/10 hover:border-accent'>
                Share Your Miracle
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
