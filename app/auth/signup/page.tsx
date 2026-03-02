import React from 'react';
import { RiUserLine, RiMailLine, RiLockPasswordLine } from '@remixicon/react';
import Input from '@/app/components/common/Input';

export default function SignupPage() {
  return (
    <form className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <label
          className='text-primary dark:text-white text-sm font-bold'
          htmlFor='name'
        >
          Full Name
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500'>
            <span className='material-symbols-outlined text-[20px]'>
              <RiUserLine />
            </span>
          </div>
          <Input
            name='name'
            placeholder='Enter your full name'
            type='text'
            required
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label
          className='text-primary dark:text-white text-sm font-bold'
          htmlFor='email'
        >
          Email Address
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500'>
            <span className='material-symbols-outlined text-[20px]'>
              <RiMailLine />
            </span>
          </div>
          <Input
            name='email'
            placeholder='your.email@example.com'
            type='email'
            required
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label
          className='text-primary dark:text-white text-sm font-bold'
          htmlFor='password'
        >
          Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500'>
            <span className='material-symbols-outlined text-[20px]'>
              <RiLockPasswordLine />
            </span>
          </div>
          <Input
            name='password'
            placeholder='Enter your password'
            type='password'
            required
          />
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <label
          className='text-primary dark:text-white text-sm font-bold'
          htmlFor='confirm-password'
        >
          Confirm Password
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500'>
            <span className='material-symbols-outlined text-[20px]'>
              <RiLockPasswordLine />
            </span>
          </div>
          <Input
            name='confirm-password'
            placeholder='Confirm your password'
            type='password'
            required
          />
        </div>
      </div>

      <div className='flex items-center'>
        <Input
          name='agree-terms'
          type='checkbox'
          required
        />
        <label
          htmlFor='agree-terms'
          className='ml-2 text-sm text-primary dark:text-white'
        >
          I agree to the{' '}
          <a
            href='#'
            className='text-accent hover:text-yellow-600 font-bold transition-colors'
          >
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        className='mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-3.5 px-5 text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all'
        type='submit'
      >
        <span className='text-base font-bold tracking-wide'>
          Create Account
        </span>
      </button>
    </form>
  );
}
