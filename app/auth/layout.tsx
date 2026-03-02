'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RiUserLocationLine } from '@remixicon/react';
import icon from '../icon1.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className='flex max-h-dvh w-full flex-col lg:flex-row'>
      {/* <!-- Left Side: Hero Image --> */}
      <div
        className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-screen flex flex-col justify-end p-8 lg:p-16 bg-cover bg-center bg-[url('/login-and-signup-page-img.png')]"
        data-alt='Sunrise over a soft landscape with golden glow'
      >
        {/* <!-- Overlay Gradient --> */}
        <div className='absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent overflow-hidden'></div>
        {/* <!-- Content --> */}
        <div className='relative z-10 text-white max-w-lg overflow-hidden'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='p-2 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/40'>
              <span className='material-symbols-outlined text-accent text-3xl'>
                <RiUserLocationLine />
              </span>
            </div>
          </div>
          <h1 className='text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-4'>
            Welcome back to the light.
          </h1>
          <p className='text-lg lg:text-xl font-medium text-white/90 leading-relaxed'>
            Your story continues here. Join a global community sharing miracles
            with grace and truth.
          </p>
        </div>
      </div>
      {/* <!-- Right Side: Form Container --> */}
      <div className='relative w-full lg:w-1/2 flex flex-col items-center justify-center p-6 lg:p-16 bg-neutral dark:bg-background-dark transition-colors duration-300 overflow-y-auto'>
        <div className='w-full max-w-[480px] flex flex-col gap-8'>
          {/* <!-- Branding Header --> */}
          <Link
            href='/'
            className='flex flex-col items-center text-center gap-2'
          >
            <div className='w-8 h-8 rounded-full flex items-center justify-center mr-3 ring-2 ring-accent ring-offset-2 ring-offset-primary'>
              <Image
                src={icon}
                alt='icon'
                width={32}
                height={32}
              />
            </div>
            <h2 className='text-primary dark:text-white text-2xl font-bold'>
              Miracle Map
            </h2>
          </Link>
          {/* <!-- Tabs --> */}
          <div className='w-full pb-2'>
            <div className='flex border-b border-gray-300 dark:border-gray-700 w-full'>
              <Link
                href='/auth/login'
                className={`flex-1 flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 transition-all duration-200 ease-in-out ${
                  pathname === '/auth/login'
                    ? 'border-primary text-primary dark:text-white'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <span className='text-sm font-bold tracking-wide'>LOG IN</span>
              </Link>
              <Link
                href='/auth/signup'
                className={`flex-1 flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 transition-all duration-200 ease-in-out ${
                  pathname === '/auth/signup'
                    ? 'border-primary text-primary dark:text-white'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <span className='text-sm font-bold tracking-wide'>
                  CREATE ACCOUNT
                </span>
              </Link>
            </div>
          </div>
          <div className='transition-all duration-300 ease-in-out '>
            {children}
          </div>
          <p className='text-center text-sm text-slate-500 dark:text-slate-400 mt-4'>
            By continuing, you agree to share your story with grace and truth.
          </p>
        </div>
      </div>
    </div>
  );
}
