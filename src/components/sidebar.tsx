import React from 'react';
import { Link } from 'react-router-dom';
import {
  BuildingStorefrontIcon,
  UserIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';

export const Sidebar = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="hover:font-semibold">
          <li>
            <Link
              to="/marketplace"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <BuildingStorefrontIcon className="h-6 w-6" />
              <span className="ml-3 text-xl">Marketplace</span>
            </Link>
          </li>
        </ul>
        <ul className="hover:font-semibold">
          <li className="mt-1">
            <Link
              to="/marketplace"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <UserIcon className="h-6 w-6" />
              <span className="ml-3 text-xl">Owned items</span>
            </Link>
          </li>
        </ul>
        <ul className="hover:font-semibold">
          <li className="mt-1">
            <Link
              to="/marketplace"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ArchiveBoxIcon className="h-6 w-6" />

              <span className="ml-3 text-xl">Transactions</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
