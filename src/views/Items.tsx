import React from 'react';
import { Header } from '../components/header';
import { graphql } from '../gql';
import { useMutation, useQuery } from '@apollo/client';
import { Button } from '../components/button';

const QUERY_ITEMS = graphql(/* GraphQL */ `
  query Items {
    itemList {
      name
      price
      id
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

export const Items = () => {
  const { data } = useQuery(QUERY_ITEMS);
  return (
    <div className="flex flex-col gap-12">
      <Header>Items</Header>
      <div className="grid grid-cols-4 gap-3">
        {data?.itemList?.map((item) => {
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
