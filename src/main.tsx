import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div className="min-h-screen flex flex-col items-center justify-center min-w-screen bg-slate-600 text-white">
        <RouterProvider router={router} />
      </div>
    </ApolloProvider>
  </React.StrictMode>,
);
