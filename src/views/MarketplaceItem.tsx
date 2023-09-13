import React from 'react';
import { FragmentType, graphql, useFragment } from '../gql';

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
}) {
  const item = useFragment(dataFragment, props.item);
  return (
    <div className="bg-slate-300 shadow rounded p-3">
      {item.id}
      <div> {item.partName} </div>
      <div> {item.partDescription} </div>
      <div> {item.price} </div>
    </div>
  );
}
