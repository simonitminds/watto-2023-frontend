import React from 'react';

type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 text-slate-500">
      <label> {label} </label>
      <input
        className="border border-gray-300 rounded-md px-4 py-2"
        {...props}
      />
    </div>
  );
};
