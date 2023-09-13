import React from 'react';
import { Sidebar } from '../components/sidebar';
import { MarketplaceItem } from '../components/marketplaceitem';
import { graphql } from './../gql';
import { useQuery } from '@apollo/client';
import { Spinner } from '../components/spinner';
import { isLogin } from '../State';
import { makeVar, useReactiveVar } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';

const GET_MARKET_ITEMS_QUERY = graphql(`
  query GetAllUserItemsById {
    getAllUserItemsById {
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
  const userDataString = localStorage.getItem('userData');
  if (!userDataString) return console.log('cannot get the data');
  const userData = JSON.parse(userDataString);

  const { loading, error, data } = useQuery(GET_MARKET_ITEMS_QUERY);

  return (
    <>
      <Sidebar></Sidebar>
      <div className="p-1 sm:ml-64">
        <div className="flex flex-wrap gap-4 items-center ">
          {loading && <Spinner></Spinner>}
          {error && <p>Error! {error.message}</p>}
          {!loading &&
            data?.getAllUserItemsById?.map((item) => (
              <MarketplaceItem key={item.id} items={item} />
            ))}
        </div>
      </div>
    </>
  );
};
