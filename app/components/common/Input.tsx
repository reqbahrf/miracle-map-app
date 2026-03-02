'use client';

import { ReactNode } from 'react';
import Label from './Label';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string | ReactNode;
};

export default function Input({ className, ...rest }: InputProps) {
  return (
    <>
      {rest.label && <Label htmlFor={rest?.name}>{rest?.label}</Label>}
      <input
        {...rest}
        id={rest?.name}
        className={`form-input block w-full rounded-lg border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary pl-10 py-3 text-base placeholder:text-slate-400 ${className}`}
      />
    </>
  );
}
