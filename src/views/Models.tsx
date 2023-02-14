import React from 'react';
import { Header } from '../components/header';
import { useQuery } from '@apollo/client';
import { graphql } from '../gql';

const QUERY_MODELS = graphql(/* GraphQL */ `
  query Models {
    modelList {
      name
      id
      indexPrice
    }
  }
`);

export const Models = () => {
  const { data } = useQuery(QUERY_MODELS);
  return (
    <div>
      <Header>Models</Header>
      <div className="grid grid-cols-4 gap-3">
        {data?.modelList?.map((model) => {
          return (
            <div
              className="p-3 bg-white rounded text-black shadow flex flex-col"
              key={model.id}
            >
              <div>
                <span className="font-bold">Name: </span> {model.name}
              </div>
              <div>
                <span className="font-bold">Index price: </span>
                {model.indexPrice}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
