import React from 'react';
import { Header } from '../components/header';
import { graphql } from '../gql';
import { useQuery } from '@apollo/client';

const QUERY_ITEMS = graphql(/* GraphQL */ `
  query Items {
    itemList {
      name
      price
      id
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
              className="p-3 bg-white rounded text-black shadow flex flex-col"
              key={item.id}
            >
              <div>
                <span className="font-bold">Name: </span> {item.name}
              </div>
              <div>
                <span className="font-bold">Price: </span>
                {item.price.toFixed(2) + '€'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
