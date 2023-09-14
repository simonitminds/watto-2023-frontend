import { useReactiveVar } from '@apollo/client';
import { Cog8ToothIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { isLoggedIn } from './state/loggedIn';

export const Layout = () => {
  const navigate = useNavigate();
  const is_logged_in = useReactiveVar(isLoggedIn);

  useEffect(() => {
    if (!is_logged_in) {
      navigate('/');
    }
  }, [is_logged_in, navigate]);

  return (
    <div className="min-h-screen flex flex-col p-3  min-w-screen bg-slate-600 text-white justify-between pb-32">
      <Outlet />
      <div className="bg-slate-950 text-green-100 h-24 flex flex-row justify-evenly items-center rounded-t fixed bottom-0 left-0 w-screen">
        <Link to="">
          <HomeIcon className="h-12" />
        </Link>
        <Link to="my-items">
          <UserIcon className="h-12" />
        </Link>
        <Link to="settings">
          <Cog8ToothIcon className="h-12" />
        </Link>
      </div>
    </div>
  );
};
