import React from 'react';
import { Header } from '../components/header';
import { graphql } from '../gql';
import { useQuery } from '@apollo/client';

const QUERY_TYPES = graphql(/* GraphQL */ `
  query Types {
    typeList {
      name
      multiplier
      id
    }
  }
`);

export const Types = () => {
  const { data } = useQuery(QUERY_TYPES);
  return (
    <div>
      <Header>Types</Header>
      <div className="grid grid-cols-4 gap-3">
        {data?.typeList?.map((type) => {
          return (
            <div
              className="p-3 bg-white rounded text-black shadow flex flex-col"
              key={type.id}
            >
              <div>
                <span className="font-bold">Name: </span> {type.name}
              </div>
              <div>
                <span className="font-bold">Multiplier: </span>
                {type.multiplier}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
