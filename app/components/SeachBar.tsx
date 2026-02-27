'use client';
import { useState } from 'react';
import { RiSearchLine, RiCloseLine } from '@remixicon/react';
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-full md:max-w-[400px]'>
      {/* Glassmorphism container */}
      <div
        className={`
            relative overflow-hidden rounded-2xl border border-white/20 
            bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl
            shadow-2xl transition-all duration-300 ease-out
            ${
              isFocused
                ? 'shadow-white/20 ring-2 ring-white/30 ring-offset-2 ring-offset-transparent'
                : 'shadow-lg hover:shadow-xl'
            }
          `}
      >
        {/* Animated gradient background */}
        <div
          className='absolute inset-0 opacity-50'
          style={{
            background: isFocused
              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
          }}
        />

        {/* Liquid animation overlay */}
        <div
          className={`
              absolute inset-0 opacity-30 transition-opacity duration-500
              ${isFocused ? 'opacity-40' : 'opacity-20'}
            `}
          style={{
            background:
              'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          }}
        />

        {/* Search input container */}
        <div className='relative flex items-center px-6 py-4'>
          {/* Search icon */}
          <RiSearchLine
            size={20}
            className={`transition-colors duration-200 ${isFocused ? 'text-blue-400' : 'text-gray-400'}`}
          />

          {/* Input field */}
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder='Search locations...'
            className='flex-1 mx-4 bg-transparent border-none outline-none text-white placeholder-gray-400 font-medium transition-all duration-200'
          />

          {/* Clear button */}
          {searchQuery && (
            <button
              onClick={handleClear}
              className='p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 transform hover:scale-110'
            >
              <RiCloseLine
                size={18}
                className='text-gray-300 hover:text-white'
              />
            </button>
          )}
        </div>

        {/* Shimmer effect */}
        <div
          className={`
              absolute inset-0 opacity-0 transition-opacity duration-300
              ${isFocused ? 'opacity-100' : 'opacity-0'}
            `}
        >
          <div
            className='absolute inset-0 bg-linear-to-r 
                from-transparent via-white/10 to-transparent 
                animate-pulse'
            style={{
              animation: 'shimmer 2s infinite',
            }}
          />
        </div>
      </div>

      {/* Floating shadow effect */}
      <div
        className={`
            absolute -bottom-2 left-1/2 transform -translate-x-1/2 
            w-3/4 h-4 bg-black/20 blur-xl rounded-full 
            transition-all duration-300
            ${isFocused ? 'opacity-50 scale-110' : 'opacity-30 scale-100'}
          `}
      />
    </div>
  );
}
