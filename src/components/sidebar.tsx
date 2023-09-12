import React from 'react';
import { Link } from 'react-router-dom';

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
              <svg
                width="23"
                height="25"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3333 11.6667V6.33333C17.3333 3.38781 14.9455 1 12 1C9.05446 1 6.66665 3.38781 6.66665 6.33333V11.6667M2.66665 9H21.3333L22.6666 25H1.33331L2.66665 9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

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
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3 9.59999C20.3 11.9748 18.3748 13.9 16 13.9C13.6252 13.9 11.7 11.9748 11.7 9.59999C11.7 7.22516 13.6252 5.29999 16 5.29999C18.3748 5.29999 20.3 7.22516 20.3 9.59999ZM5.31146 28.3C5.57261 22.6227 10.2581 18.1 16 18.1C21.7418 18.1 26.4274 22.6227 26.6885 28.3H5.31146Z"
                  fill="white"
                  stroke="white"
                />
              </svg>

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
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22.3333V14.3333C9 12.8606 7.80609 11.6667 6.33333 11.6667H3.66667C2.19391 11.6667 1 12.8606 1 14.3333V22.3333C1 23.8061 2.19391 25 3.66667 25H6.33333C7.80609 25 9 23.8061 9 22.3333ZM9 22.3333V9C9 7.52724 10.1939 6.33333 11.6667 6.33333H14.3333C15.8061 6.33333 17 7.52724 17 9V22.3333M9 22.3333C9 23.8061 10.1939 25 11.6667 25H14.3333C15.8061 25 17 23.8061 17 22.3333M17 22.3333V3.66667C17 2.19391 18.1939 1 19.6667 1H22.3333C23.8061 1 25 2.19391 25 3.66667V22.3333C25 23.8061 23.8061 25 22.3333 25H19.6667C18.1939 25 17 23.8061 17 22.3333Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="ml-3 text-xl">Transactions</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
