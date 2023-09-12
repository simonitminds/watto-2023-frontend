import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type SidebarProps = {
  to: string;
  text: string;
  icon: ReactNode;
};

export const SidebarItem = ({ to, text, icon }: SidebarProps) => {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <div className="h-6 w-6"> {icon}</div>
        <span className="ml-3 text-xl">{text}</span>
      </Link>
    </li>
  );
};
