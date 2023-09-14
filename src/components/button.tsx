import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="bg-slate-500 hover:bg-slate-700 text-slate-100 font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
