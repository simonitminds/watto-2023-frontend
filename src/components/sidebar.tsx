import React from 'react';
import { SidebarItem, SidebarProps } from './sidebaritem';
import { LogoutButton } from './logoutbutton';

import {
  BuildingStorefrontIcon,
  UserIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';

export const Sidebar = () => {
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
        <LogoutButton></LogoutButton>
      </div>
    </aside>
  );
};
