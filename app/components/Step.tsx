import React from 'react';

export default function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className='relative flex flex-col items-center text-center'>
      <div className='z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-neutral dark:border-primary bg-accent text-xl font-bold text-neutral-900 shadow-lg'>
        {number}
      </div>
      <h3 className='mt-6 text-lg font-bold text-neutral'>{title}</h3>
      <p className='mt-2 text-sm text-neutral'>{description}</p>
    </div>
  );
}
