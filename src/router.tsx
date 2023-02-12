import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { Login } from './views/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
