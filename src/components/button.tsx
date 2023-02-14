import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-amber-600 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};
