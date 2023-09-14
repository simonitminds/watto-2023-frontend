import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import { Login } from './views/Login';
import { Marketplace } from './views/marketplace';
import { Layout } from './layout';
import { MyItems } from './views/MyItems';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/marketplace',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Marketplace />,
      },
      {
        path: 'settings',
        element: <Marketplace />,
      },
      {
        path: 'my-items',
        element: <MyItems />,
      },
    ],
  },
]);
