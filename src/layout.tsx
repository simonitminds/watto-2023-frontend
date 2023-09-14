import { useQuery, useReactiveVar, useSubscription } from '@apollo/client';
import { Cog8ToothIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { isLoggedIn } from './state/loggedIn';
import { graphql } from './gql';

const moneySub = graphql(`
  subscription money($user_id: String!) {
    my_money(user_id: $user_id)
  }
`);

const UserQuery = graphql(`
  query Me {
    me {
      id
      username
    }
  }
`);

export const Layout = () => {
  const navigate = useNavigate();
  const is_logged_in = useReactiveVar(isLoggedIn);
  const { data } = useQuery(UserQuery);

  useEffect(() => {
    if (!is_logged_in) {
      navigate('/');
    }
  }, [is_logged_in, navigate]);

  return (
    <div className="min-h-screen flex flex-col p-3  min-w-screen bg-slate-600 text-white justify-between pb-32">
      <div className="flex flex-col">
        {data?.me?.id && <ShowMoney user_id={data.me.id} />}
        <Outlet />
      </div>
      <div className="bg-slate-950 text-green-100 h-24 flex flex-row justify-evenly items-center rounded-t fixed bottom-0 left-0 w-screen">
        <Link to="">
          <HomeIcon className="h-12" />
        </Link>
        <Link to="my-items">
          <UserIcon className="h-12" />
        </Link>
        <Link to="settings">
          <Cog8ToothIcon className="h-12" />
        </Link>
      </div>
    </div>
  );
};

const ShowMoney = (props: { user_id: string }) => {
  const d = useSubscription(moneySub, {
    variables: { user_id: props.user_id },
  });

  return (
    <div className="self-end text-lg ">
      Money: <span className="font-bold"> $ {d.data?.my_money} </span>
    </div>
  );
};
