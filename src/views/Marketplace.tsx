import React from 'react';
import { Header } from '../components/header';
import { graphql } from '../gql';
import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { Button } from '../components/button';

const INVENTORY_SUBSCRIPTION = graphql(/* GraphQL */ `
  subscription InventorySubscription {
    marketplace(userId: "1") {
      id
      name
      price
      owner {
        username
      }
    }
  }
`);
const INVENTORY_QUERY = graphql(/* GraphQL */ `
  query Inventory {
    itemListByUserId(userId: "1") {
      id
      name
      price
      owner {
        username
      }
    }
  }
`);

const BUY_ITEM = graphql(/* GraphQL */ `
  mutation BuyItem($itemId: ID!) {
    buyItem(itemId: $itemId) {
      result {
        id
        name
        owner {
          id
          balance
        }
      }
      messages {
        field
        message
      }
    }
  }
`);

export const Marketplace = () => {
  const { data: sub_data } = useSubscription(INVENTORY_SUBSCRIPTION);
  const { data: inventory } = useQuery(INVENTORY_QUERY, {
    skip: !!sub_data?.marketplace,
  });
  const [mutation] = useMutation(BUY_ITEM);
  const data = sub_data?.marketplace ?? inventory?.itemListByUserId;
  return (
    <div className="flex flex-col gap-12">
      <Header>Items</Header>
      <div className="grid grid-cols-4 gap-3">
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-row gap-3 p-3 bg-white rounded text-black shadow justify-between"
            >
              <div className="">
                <div>
                  <span className="font-bold">Name: </span> {item.name}
                </div>
                <div>
                  <span className="font-bold">Owner: </span>
                  {item.owner?.username}
                </div>
                <div>
                  <span className="font-bold">Price: </span>
                  {item.price.toFixed(2) + '€'}
                </div>
              </div>
              <Button
                onClick={() => mutation({ variables: { itemId: item.id } })}
              >
                Buy
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
