import React, { useEffect } from 'react';
import { SidebarItem, SidebarProps } from './sidebaritem';
import { Link, useNavigate } from 'react-router-dom';

import {
  BuildingStorefrontIcon,
  UserIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';
import { useReactiveVar } from '@apollo/client';
import { isLogin } from '../State';

export const Sidebar = () => {
  const navigate = useNavigate();
  const sidebarItems: SidebarProps[] = [
    {
      to: '/marketplace',
      icon: <BuildingStorefrontIcon />,
      text: 'Marketplace',
    },
    { to: '/marketplace/OwnedItems', icon: <UserIcon />, text: 'Owned items' },
    {
      to: '/transactions',
      icon: <ArchiveBoxIcon />,
      text: 'Transactions',
    },
  ];

  function handleLogout(): void {
    localStorage.removeItem('token');
    isLogin(false);
  }
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {sidebarItems.map((item, index) => (
          <ul key={index} className="hover:font-semibold">
            <SidebarItem to={item.to} icon={item.icon} text={item.text} />
          </ul>
        ))}
        <li>
          <button
            type="submit"
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg flex items-center space-x-2"
          >
            <svg
              fill="#FFFFFF"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384.971 384.971"
            >
              <path
                d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
    C192.485,366.299,187.095,360.91,180.455,360.91z"
              />
              <path
                d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
              />
            </svg>
            Logout
          </button>
        </li>
      </div>
    </aside>
  );
};
