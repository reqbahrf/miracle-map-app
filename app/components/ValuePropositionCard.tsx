import React, { ReactElement } from 'react';

interface ValuePropositionCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

export default function ValuePropositionCard({
  icon,
  title,
  description,
}: ValuePropositionCardProps) {
  return (
    <div className='group flex flex-col gap-4 rounded-xl border border-primary/80 bg-cream-100 dark:bg-primary/50 p-6 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-1'>
      <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent'>
        {icon}
      </div>
      <div>
        <h3 className='font-serif text-lg font-bold text-white'>{title}</h3>
        <p className='mt-2 text-sm leading-relaxed text-slate-400'>
          {description}
        </p>
      </div>
    </div>
  );
}
