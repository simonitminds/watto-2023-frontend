import React from 'react';
import emitter from './../images/aurora_emitter.png';
import { FragmentType, graphql, useFragment } from './../gql';
import { useMutation } from '@apollo/client';

const GetUserItem = graphql(`
  fragment UserItemFragment on Item {
    id
    partName
    price
    userId
  }
`);

const SellItem = graphql(`
  mutation SellAnItem($itemId: String!, $sellerId: String!) {
    sellItem(input: { itemId: $itemId, sellerId: $sellerId }) {
      username
      money
      inventory {
        partName
      }
    }
  }
`);

export const OwnItem = (props: { items: FragmentType<typeof GetUserItem> }) => {
  const item = useFragment(GetUserItem, props.items);
  const [sellItem] = useMutation(SellItem, {
    variables: {
      itemId: item.id,
      sellerId: 'clmixf8o50000kees7k4x9h6m',
    },
    refetchQueries: 'active',
  });

  return (
    <div className="w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
      <div className="h-[150px]">
        <img
          className="rounded-t-lg object-cover h-full w-full"
          src={emitter}
          alt="product image"
        />
      </div>

      <div className="px-5 w-full flex flex-col justify-between flex-grow">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {item.partName}
          </h5>
        </div>
        <div>
          <h5 className="text-m font-semibold tracking-tight text-gray-900 dark:text-white">
            Bought for:<span className="float-right">${item.price}</span>
          </h5>
        </div>
        <div>
          <h5 className="text-m font-semibold tracking-tight text-gray-900 dark:text-white">
            Sell for:<span className="float-right">${item.price}</span>
          </h5>
        </div>
        <div className="mt-4 text-center mb-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              sellItem();
            }}
            className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};
