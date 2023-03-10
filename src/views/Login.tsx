import React from 'react';
import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';

const SIGNUP_MUTATION = graphql(/* GraphQL */ `
  mutation Signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      id
      name
      username
      insertedAt
    }
  }
`);

export const Login = () => {
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const attrs = {
      username: data.get('username') as string,
      password: data.get('password') as string,
    };
    if (!attrs.username || !attrs.password) return;

    signup({
      variables: attrs,
    });
  };

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
      {data && !error && <div> WELCOME beep boop {JSON.stringify(data)} </div>}
    </div>
  );
};
