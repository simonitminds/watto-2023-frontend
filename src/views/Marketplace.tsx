import React from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { GET_MARKET_ITEMS_QUERY } from '../queries/getMarketItems';
import { useQuery } from '@apollo/client';

export const Marketplace = () => {
  const { loading, error, data } = useQuery(GET_MARKET_ITEMS_QUERY, {
    variables: { input: 'clmeq4xqa0000kem9n98ibai2' },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 items-center ">
          {data?.getAllUserItemsById?.map((Item) => {
            return (
              <MarketplaceItem
                partName={Item?.partName}
                description={Item?.partDescription}
                price={Item?.price}
              ></MarketplaceItem>
            );
          })}
        </div>
      </div>
    </>
  );
};
