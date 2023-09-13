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
    <div>
      {loading && <div className="animate-spin ">.</div>}

      <div className="flex flex-col gap-3">
        {data &&
          !loading &&
          data.marketplace.map((item) => (
            <MarketplaceItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};
