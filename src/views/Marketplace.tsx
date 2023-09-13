import React from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { GET_MARKET_ITEMS_QUERY } from '../queries/getMarketItems';
import { useQuery } from '@apollo/client';

export const Marketplace = () => {
  const { loading, error, data } = useQuery(GET_MARKET_ITEMS_QUERY, {
    variables: { input: 'clmhg4l5l0000ke3pp76cx98i' },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 items-center ">
          {data?.getAllUserItemsById?.map((item) => {
            return (
              <MarketplaceItem
                key={item.id}
                id={item.id}
                partName={item.partName}
                description={item.partDescription?.substring(0, 250)}
                price={item?.price}
              ></MarketplaceItem>
            );
          })}
        </div>
      </div>
    </>
  );
};
