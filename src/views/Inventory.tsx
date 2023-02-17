import React from 'react';
import { Header } from '../components/header';
import { graphql } from '../gql';
import { useMutation, useQuery } from '@apollo/client';
import { Button } from '../components/button';
import { useUserState } from '../state/user_state';

const QUERY_ITEMS = graphql(/* GraphQL */ `
  query ItemsInventory($userId: ID!) {
    itemListByUserId(userId: $userId) {
      name
      price
      id
      owner {
        username
      }
    }
  }
`);

const SellItem = graphql(/* GraphQL */ `
  mutation SellItem($itemId: ID!) {
    sellItem(itemId: $itemId) {
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

const MY_INVENTORY = graphql(/* GraphQL */ `
  query MyInventory {
    me {
      username
      id
      balance
    }
  }
`);
export const Inventory = () => {
  const user = useUserState();

  const { data: meData } = useQuery(MY_INVENTORY, {
    fetchPolicy: 'cache-and-network',
  });

  const { data } = useQuery(QUERY_ITEMS, {
    variables: { userId: String(user.id) },
    fetchPolicy: 'cache-and-network',
  });
  const [mutation] = useMutation(SellItem);
  return (
    <div className="flex flex-col gap-12">
      <Header>Inventory</Header>
      <div className="rounded bg-white p-3 text-orange-600 flex flex-col gap-3">
        <div>
          <span className="underline"> username:</span> {meData?.me?.username}
        </div>
        <div>
          <span className="underline">balance: </span>
          <span className="font-bold text-xl">{meData?.me?.balance}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {data?.itemListByUserId?.map((item) => {
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
                onClick={() =>
                  mutation({
                    variables: { itemId: item.id },
                    refetchQueries: ['MyInventory', 'ItemsInventory'],
                  })
                }
              >
                Sell
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
