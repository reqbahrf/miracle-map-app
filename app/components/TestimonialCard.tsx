import { RiDoubleQuotesL } from '@remixicon/react';
import Image from 'next/image';

export default function TestimonialCard({
  profileImage,
  name,
  quote,
  location,
}: {
  profileImage: string;
  name: string;
  quote: string;
  location: string;
}) {
  return (
    <div className='relative rounded-2xl bg-primary p-8 shadow-xl border border-transparent hover:border-gold-500/30 transition-colors'>
      <div className='absolute -top-4 -left-2 text-gold-500/20'>
        <RiDoubleQuotesL className='text-[80px]' />
      </div>
      <p className='relative z-10 text-lg italic leading-relaxed text-neutral '>
        &ldquo;{quote}&rdquo;
      </p>
      <div className='mt-6 flex items-center gap-4'>
        <div className='h-12 w-12 overflow-hidden rounded-full border-2 border-gold-500'>
          <Image
            width={48}
            height={48}
            alt='Portrait of Maria'
            className='h-full w-full object-cover'
            src={profileImage}
          />
        </div>
        <div>
          <h4 className='font-bold text-white'>{name}</h4>
          <p className='text-xs text-accent'>{location}</p>
        </div>
      </div>
    </div>
  );
}
