import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';

import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import Cookies from 'js-cookie';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as AbsintheSocket from '@absinthe/socket';
import { Socket as PhoenixSocket } from 'phoenix';

// Create a standard Phoenix websocket connection. If you need
// to provide additional params, like an authentication token,
// you can configure them in the `params` option.
const phoenixSocket = new PhoenixSocket('ws://localhost:4000/socket', {
  params: () => {
    if (Cookies.get('token')) {
      return { token: Cookies.get('token') };
    } else {
      return {};
    }
  },
});

// Wrap the Phoenix socket in an AbsintheSocket.
const absintheSocket = AbsintheSocket.create(phoenixSocket);

// Create an Apollo link from the AbsintheSocket instance.
const websocketLink = createAbsintheSocketLink(absintheSocket);

const httpLink = new HttpLink({ uri: 'http://localhost:4000/graphql' });
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  websocketLink,
  httpLink,
);
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers

  const token = localStorage.getItem('token');

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, splitLink),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
