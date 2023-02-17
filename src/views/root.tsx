import React, { useEffect } from 'react';
import { Topbar } from '../components/Topbar';
import { Outlet } from 'react-router-dom';
import { graphql } from '../gql';
import { useQuery } from '@apollo/client';
import { useSetUserState } from '../state/user_state';

const QUERY_ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      username
    }
  }
`);

export function Root() {
  const { data } = useQuery(QUERY_ME);
  const setUser = useSetUserState();

  useEffect(() => {
    if (data) {
      setUser({
        isLoggedIn: true,
        username: data.me?.username ?? '',
        id: Number(data.me?.id),
      });
    }
  }, [data]);
  return (
    <div className="min-h-screen flex flex-col p-3 min-w-screen bg-slate-600 text-white">
      <Topbar />
      <main className="mt-32">
        <Outlet />
      </main>
    </div>
  );
}
