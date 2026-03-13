import Image from 'next/image';
import icon from './icon1.png';
import Link from 'next/link';
import {
  RiCompass3Line,
  RiSunFill,
  RiHeartPulseFill,
  RiShieldCheckFill,
  RiMapPinFill,
  RiTeamFill,
} from '@remixicon/react';
import Step from './components/Step';
import TestimonialCard from './components/TestimonialCard';
import ValuePropositionCard from './components/ValuePropositionCard';
export default function Home() {
  const features = [
    {
      icon: <RiHeartPulseFill />,
      title: 'Spark Hope',
      description:
        'Read uplifting stories that remind you you are not alone in your journey.',
    },
    {
      icon: <RiShieldCheckFill />,
      title: 'Verified & Meaningful',
      description:
        'Every story is reviewed to ensure authenticity, respect, and truth.',
    },
    {
      icon: <RiMapPinFill />,
      title: 'Pinpoint Location',
      description:
        'See exactly where miracles are happening geographically around the globe.',
    },
    {
      icon: <RiTeamFill />,
      title: 'Community Connection',
      description:
        'Connect with others who have experienced similar divine moments.',
    },
  ];
  const Steps = [
    {
      number: 1,
      title: 'Find Location',
      description:
        'Pinpoint exactly where your miracle took place on our interactive map.',
    },
    {
      number: 2,
      title: 'Tell the Story',
      description:
        'Share the details of what happened. Add photos if you have them.',
    },
    {
      number: 3,
      title: 'Submit & Wait',
      description:
        'Our team reviews every submission to ensure community safety.',
    },
    {
      number: 4,
      title: 'Shine on Map',
      description:
        'Your story goes live, lighting up the globe and inspiring others.',
    },
  ];

  const testimonials = [
    {
      profileImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCUHwMORQOkCRPK5-0G8Chl6GrCvC6Ox4BvnKVV6tp1lndO3pRZkSBAcMCq7wKQf_yPZMTkvXeBb74Iqd9coFHiMR3JsmsTbM2GQIVCGl-iyPUQlM-l0weJ_6v4FfKQJBzly1iP_Eo9XZ6Bqx6swwPiSIiwFdpZex4woiSqxodixEemdhuzaFY3fdzG_4ZCnyB1qAfZxzmMmwu2fZdzQ34mR-ssA1dMX15cL8CnwkYdus4VRIMl3WtiE_8hMoTm4aoUJvWKspM3xI8',
      name: 'Sarah M.',
      location: 'New York, NY',
      quote:
        'Found my miracle story on the map and it gave me hope during my darkest days.',
    },
    {
      profileImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAmcWbB5_T6JylzISAmrSYdpelDkcVV--xY_inD4KSvK3AstgmH0P-ybxHkmIhvzOSkXB4-Xrol-7TAw3GgR4cZY6HZpWt5qnQWfvhBJeC9sbkUomFFd_k7o7OkXvOCjq_CUZ7KHEQH87BcCAiTTjTFttc5ldgmIdGl-kvjJZPw3Oj4HNmWerxKSGNAiIY4wgj05iuWwqjqLD-nMuBFWQIsOfRjXZMiEuQA2xIvOUYTcqY7FfZkA_u649DkID-kZglVAjjpgu-fr7A',
      name: 'John D.',
      location: 'Los Angeles, CA',
      quote:
        "Sharing my story of recovery was hesitant at first, but the outpouring of love from people in countries I've never visited was overwhelming. This platform is truly a light.",
    },
  ];

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
              <Link
                href='/auth/login'
                className='text-white hover:text-gray-300 px-3 py-2 text-sm font-medium'
              >
                Log In
              </Link>
              <Link
                href='/auth/signup'
                className='bg-accent hover:bg-yellow-600 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors'
              >
                Sign Up
              </Link>
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
      <section className='relative z-20 -mt-10 px-6 pb-20 pt-10 lg:px-10 bg-primary'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {features.map((item) => (
              <ValuePropositionCard
                key={item.title}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='bg-primary py-20 px-6 lg:px-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-16 text-center'>
            <span className='text-sm font-bold uppercase tracking-widest text-gold-500'>
              The Process
            </span>
            <h2 className='mt-2 font-serif text-3xl font-bold text-white md:text-4xl'>
              How to Share Your Miracle
            </h2>
          </div>
          <div className='relative grid grid-cols-1 gap-12 md:grid-cols-4'>
            <div className='absolute top-8 left-0 hidden w-full md:block px-12'>
              <div className='h-0.5 w-full bg-primary'></div>
            </div>
            {Steps.map((step) => (
              <Step
                key={step.number}
                {...step}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section --> */}
      <section className='relative overflow-hidden bg-primary py-24 px-6 lg:px-10'>
        <div className='absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl'></div>
        <div className='absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-navy-900/10 dark:bg-black/20 blur-3xl'></div>
        <div className='relative z-10 mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <h2 className='font-serif text-3xl font-bold text-navy-900 dark:text-white'>
              Voices from the Community
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      <footer className='bg-primary px-6 py-24 text-center text-neutral lg:px-10 border-t border-primary/80'>
        <div className='mx-auto max-w-3xl'>
          <div className='mb-6 flex justify-center'>
            <RiSunFill className='text-[64px] text-accent animate-pulse' />
          </div>
          <h2 className='font-serif text-4xl font-bold leading-tight sm:text-5xl'>
            Don&apos;t Keep Your Miracle to Yourself
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg text-slate-300'>
            Your story has the power to spark faith in someone else&apos;s life.
            Join the global map of hope today.
          </p>
          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <button className='flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-accent px-8 text-base font-bold text-white shadow-[0_0_25px_rgba(184,134,11,0.4)] transition-transform hover:scale-105 hover:bg-accent/90'>
              Share Your Story Now
            </button>
            <button className='flex h-14 min-w-[200px] cursor-pointer items-center justify-center rounded-lg border border-accent/50 bg-transparent px-8 text-base font-bold text-white transition-all hover:bg-accent/10 hover:border-accent'>
              Explore the Map
            </button>
          </div>
          <div className='mt-20 flex flex-wrap justify-center gap-8 text-sm text-slate-400'>
            <a
              className='hover:text-white'
              href='#'
            >
              Privacy Policy
            </a>
            <a
              className='hover:text-white'
              href='#'
            >
              Terms of Service
            </a>
            <a
              className='hover:text-white'
              href='#'
            >
              Community Guidelines
            </a>
            <a
              className='hover:text-white'
              href='#'
            >
              Contact Support
            </a>
          </div>
          <div className='mt-8 text-xs text-neutral-600'>
            © 2023 Miracle Map. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
