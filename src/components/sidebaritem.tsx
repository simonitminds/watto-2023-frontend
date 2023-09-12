import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type SidebarProps = {
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
        {icon}
        <span className="ml-3 text-xl">{text}</span>
      </Link>
    </li>
  );
};
