import React from 'react';
import { graphql } from './../gql';
import { useQuery } from '@apollo/client';

const GET_ACTIVE_USER = graphql(`
  query GetActiveUser {
    activeUser {
      username
      money
    }
  }
`);

export const SidebarProfile = () => {
  const { loading, error, data, refetch } = useQuery(GET_ACTIVE_USER);
  return (
    <>
      <div className="flex mb-4 justify-between items-center p-2 dark:bg-gray-600 rounded-lg dark:text-white">
        <div>User:</div>
        <div>
          {loading && 'N/A'}
          {error && 'N/A'}
          {!loading && data?.activeUser.username}
        </div>
      </div>
      <div className="flex mb-4 justify-between items-center p-2 dark:bg-gray-600 rounded-lg dark:text-white">
        <div>Balance:</div>
        <div>
          {loading && 'N/A'}
          {error && 'N/A'}
          {!loading && '$' + data?.activeUser.money}
        </div>
      </div>
    </>
  );
};
