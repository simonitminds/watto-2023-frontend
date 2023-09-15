import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { isLogin } from './State';
import { Sidebar } from './components/sidebar';

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
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
};
