import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { useSetUserState } from '../state/user_state';

const LOGIN_MUTATION = graphql(/* GraphQL */ `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      successful
      result {
        token
        user {
          id
          username
        }
      }
    }
  }
`);

export const Login = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const setUser = useSetUserState();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const attrs = {
      username: data.get('username') as string,
      password: data.get('password') as string,
    };
    if (!attrs.username || !attrs.password) return;

    login({
      variables: attrs,
    });
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.login?.result?.token || '');
      setUser({
        isLoggedIn: true,
        username: data.login?.result?.user?.username ?? '',
      });
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-3">
      <Header>Login</Header>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input label="Username" type="text" name="username"></Input>
        <Input label="password" type="password" name="password"></Input>
        <Button type="submit">Login</Button>
      </form>

      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div> Welcome {data.login?.result?.user?.username} </div>
      )}
    </div>
  );
};
