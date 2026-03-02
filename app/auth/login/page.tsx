import { RiMailLine, RiLockPasswordLine } from '@remixicon/react';
import Input from '@/app/components/common/Input';

export default function LoginPage() {
  return (
    <form className='flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <label
          className='text-primary dark:text-white text-sm font-bold'
          htmlFor='email'
        >
          Email
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
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <label
            className='text-primary dark:text-white text-sm font-bold'
            htmlFor='password'
          >
            Password
          </label>
          <a
            className='text-accent hover:text-yellow-600 text-sm font-bold transition-colors'
            href='#'
          >
            Forgot Password?
          </a>
        </div>
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
          />
        </div>
      </div>
      <button
        className='mt-2 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-3.5 px-5 text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all'
        type='button'
      >
        <span className='text-base font-bold tracking-wide'>Log In</span>
      </button>
    </form>
  );
}
