import React from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { graphql } from './../gql';
import { useQuery } from '@apollo/client';
import { Spinner } from '../components/spinner';

const GET_MARKET_ITEMS_QUERY = graphql(`
  query GetMarketItemssss {
    getMarketItems {
      id
      ...ItemFragment
    }
  }
`);

export const Marketplace = () => {
  const { loading, error, data } = useQuery(GET_MARKET_ITEMS_QUERY);

  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 items-center ">
          {loading && <Spinner></Spinner>}
          {error && <p>Error! {error.message}</p>}
          {!loading &&
            data?.getMarketItems?.map((item) => (
              <MarketplaceItem key={item.id} items={item} />
            ))}
        </div>
      </div>
    </>
  );
};
