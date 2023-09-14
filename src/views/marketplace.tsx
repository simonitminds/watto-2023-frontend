import React, { FC } from 'react';
import { graphql } from '../gql';
import { useSubscription } from '@apollo/client';
import MarketplaceItem from './MarketplaceItem';

export const marketplace_items = graphql(`
  subscription marketplace_items {
    marketplace {
      id
      ...MarketplaceItem
    }
  }
`);

export const Marketplace: FC = () => {
  const { data, loading } = useSubscription(marketplace_items);
  return (
    <div className="flex flex-col gap-3">
      {loading && <div className="animate-spin ">.</div>}
      <h1 className="text-5xl"> Marketplace </h1>

      <div className="flex flex-col gap-3">
        {data &&
          !loading &&
          data.marketplace.map((item) => (
            <MarketplaceItem
              buttonData={{ onClick: console.log, text: 'Buy' }}
              item={item}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};
