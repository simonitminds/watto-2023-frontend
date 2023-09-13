import React from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { graphql } from './../gql';
import { useQuery } from '@apollo/client';
import { Spinner } from '../components/spinner';

const GET_USER_ITEMS_QUERY = graphql(`
  query GetUserItems($input: String!) {
    getUserItems(userId: $input) {
      id
      ...ItemFragment
    }
  }
`);

export const OwnedItems = () => {
  const { loading, error, data } = useQuery(GET_USER_ITEMS_QUERY, {
    variables: { input: 'clmhg4l5l0000ke3pp76cx98i' },
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
              <MarketplaceItem key={item.id} items={item} />
            ))}
        </div>
      </div>
    </>
  );
};
