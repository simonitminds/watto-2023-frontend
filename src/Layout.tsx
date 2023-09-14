import { useReactiveVar } from '@apollo/client';
import { Cog8ToothIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { isLogin } from './State';

export const Layout = () => {
  const navigate = useNavigate();
  const is_logged_in = useReactiveVar(isLogin);

  useEffect(() => {
    if (!is_logged_in) {
      navigate('/auth');
    }
  }, [is_logged_in, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};
