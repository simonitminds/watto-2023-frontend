import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { Login } from './views/Login';
import { Signup } from './views/Signup';
import { Marketplace } from './views/Marketplace';
import { OwnedItems } from './views/OwnedItems';
import { AuthWrapper } from './AuthWrapper';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthWrapper />,
    children: [
      { path: '', element: <Login></Login> },
      { path: 'signup', element: <Signup></Signup> },
    ],
  },
  {
    path: '/marketplace',
    element: <Layout />,
    children: [
      { path: '', element: <Marketplace></Marketplace> },
      { path: 'OwnedItems', element: <OwnedItems></OwnedItems> },
    ],
  },
]);
