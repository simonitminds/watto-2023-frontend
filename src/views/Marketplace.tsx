import React, { useEffect } from 'react';
import { MarketplaceItem } from '../components/marketplaceitem';
import { graphql } from './../gql';
import { useQuery } from '@apollo/client';
import { Spinner } from '../components/spinner';
import { isLogin } from '../State';
import { makeVar, useReactiveVar } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

const GET_MARKET_ITEMS_QUERY = graphql(`
  query GetMarketItems {
    getMarketItems {
      id
      ...ItemFragment
    }
  }
`);

export const Marketplace = () => {
  const navigate = useNavigate();
  if (!useReactiveVar(isLogin)) {
    navigate('/login');
  }
  // const userDataString = localStorage.getItem('userData');
  // if (!userDataString) {
  //   console.log('cannot get the data');
  // }

  const { loading, error, data, refetch } = useQuery(GET_MARKET_ITEMS_QUERY);
  useEffect(() => {
    refetch();
  });
  return (
    <>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 justify-center items-left ">
          {loading && <Spinner></Spinner>}
          {error && <p>Error! {error.message}</p>}
          {!loading &&
            data?.getMarketItems?.map((item) => (
              <MarketplaceItem key={item.id} items={item} />
            ))}
        </div>
      </div>
    </>
  );
};
