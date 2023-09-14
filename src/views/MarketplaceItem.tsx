import React from 'react';
import { FragmentType, graphql, useFragment } from '../gql';
import { Button } from '../components/button';

export const dataFragment = graphql(`
  fragment MarketplaceItem on Item {
    id
    partName
    partDescription
    price
  }
`);

export default function MarketplaceItem(props: {
  item: FragmentType<typeof dataFragment>;
  buttonData: {
    onClick: () => void;
    text: string;
  };
}) {
  const item = useFragment(dataFragment, props.item);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {item.partName}
        </h2>
        <p className="text-sm italic text-gray-700 mb-4">
          {item.partDescription}
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-lg text-gray-700 font-bold">{`$${item.price}`}</span>
        <Button
          onClick={props.buttonData.onClick}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {props.buttonData.text}
        </Button>
      </div>
    </div>
  );
}
