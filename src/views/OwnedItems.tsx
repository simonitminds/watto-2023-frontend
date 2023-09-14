import React, { useEffect } from 'react';
import { Sidebar } from '../components/sidebar';
import { OwnItem } from '../components/ownitem';
import { graphql } from './../gql';
import { useQuery } from '@apollo/client';
import { Spinner } from '../components/spinner';

const GET_USER_ITEMS_QUERY = graphql(`
  query GetUserItems {
    getUserItems {
      id
      ...ItemFragment
    }
  }
`);

export const OwnedItems = () => {
  const { loading, error, data, refetch } = useQuery(GET_USER_ITEMS_QUERY);

  useEffect(() => {
    refetch();
  });

  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 items-center ">
          {loading && <Spinner></Spinner>}
          {error && <p>Error! {error.message}</p>}
          {!loading &&
            data?.getUserItems?.map((item) => (
              <OwnItem key={item.id} items={item} />
            ))}
        </div>
      </div>
    </>
  );
};
