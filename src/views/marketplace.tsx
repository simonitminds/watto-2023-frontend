import React, { FC } from 'react';
import { graphql } from '../gql';
import { useMutation, useSubscription } from '@apollo/client';
import MarketplaceItem from './MarketplaceItem';

export const marketplace_items = graphql(`
  subscription marketplace_items {
    marketplace {
      id
      ...MarketplaceItem
    }
  }
`);

export const buy_item = graphql(`
  mutation BuyItem($item_id: String!) {
    trade_item(item_id: $item_id) {
      id
      money
    }
  }
`);

export const Marketplace: FC = () => {
  const { data, loading } = useSubscription(marketplace_items);
  const [mutation] = useMutation(buy_item);
  return (
    <div className="flex flex-col gap-3">
      {loading && <div className="animate-spin ">.</div>}
      <h1 className="text-5xl"> Marketplace </h1>

      <div className="flex flex-col gap-3">
        {data &&
          !loading &&
          data.marketplace.map((item) => (
            <MarketplaceItem
              buttonData={{
                onClick: () => mutation({ variables: { item_id: item.id } }),
                text: 'Buy',
              }}
              item={item}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};
