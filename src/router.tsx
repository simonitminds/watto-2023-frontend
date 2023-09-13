import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { Login } from './views/Login';
import { Marketplace } from './views/marketplace';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/marketplace',
    element: <Marketplace />,
  },
]);
