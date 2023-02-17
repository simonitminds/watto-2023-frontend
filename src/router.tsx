import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { Login } from './views/Login';
import { Signup } from './views/Signup';
import { Root } from './views/root';
import { Items } from './views/Items';
import { Types } from './views/Types';
import { Models } from './views/Models';
import { Inventory } from './views/Inventory';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Signup />,
      },
      {
        path: '/market',
        element: <Items />,
      },
      {
        path: '/inventory',
        element: <Inventory />,
      },
      {
        path: '/types',
        element: <Types />,
      },
      {
        path: '/models',
        element: <Models />,
      },
    ],
  },
]);
