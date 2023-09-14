import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { graphql } from '../gql';
import MarketplaceItem from './MarketplaceItem';

const MyItemsQuery = graphql(`
  query MyItems {
    my_items {
      id
      ...MarketplaceItem
    }
  }
`);

const SellItemMutation = graphql(`
  mutation SellItem($item_id: String!) {
    sell_item(item_id: $item_id) {
      id
      money
    }
  }
`);

export const MyItems = () => {
  const { data, loading } = useQuery(MyItemsQuery);
  const [mutation] = useMutation(SellItemMutation, {
    refetchQueries: ['MyItems'],
  });
  return (
    <div className="flex flex-col gap-3">
      {loading && <div className="animate-spin ">.</div>}
      <h1 className="text-5xl"> Marketplace </h1>

      <div className="flex flex-col gap-3">
        {data &&
          !loading &&
          data.my_items.map((item) => (
            <MarketplaceItem
              buttonData={{
                onClick: () => mutation({ variables: { item_id: item.id } }),
                text: 'Sell',
              }}
              item={item}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};
