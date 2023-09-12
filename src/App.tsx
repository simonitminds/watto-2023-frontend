import React from 'react';
import { Header } from './components/header';
import { Button } from './components/button';
import { Link } from 'react-router-dom';
import { graphql } from './gql';
import { useQuery } from '@apollo/client';

function App() {
  const { data } = useQuery(watto_query);
  console.log(data?.first_user?.id);
  return (
    <div className="App">
      <Header> Welcome </Header>
      <Link to={'/login'}>
        <Button> Login </Button>
      </Link>
    </div>
  );
}

export default App;
