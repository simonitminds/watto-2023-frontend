import React from 'react';
import { Header } from './components/header';
import { Button } from './components/button';
import { graphql } from './gql';
import { useQuery } from '@apollo/client';
import { Login } from './views/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const watto_query = graphql(`
  query First_user {
    first_user {
      id
      username
    }
  }
`);
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
