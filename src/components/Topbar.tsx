import { Link } from 'react-router-dom';
import { Button } from './button';
import React from 'react';
import { useUserState } from '../state/user_state';

export function Topbar() {
  const state = useUserState();
  return (
    <div className="w-full absolute top-0 right-0 h-32 bg-emerald-900 shadow-lg flex-row items-center flex gap-6 px-32">
      {state.isLoggedIn ? <AuthedRoutes /> : <NotAuthedRoutes />}
    </div>
  );
}

const AuthedRoutes = () => {
  return (
    <>
      <Link to={'/items'}>
        <Button> Items </Button>
      </Link>
      <Link to={'/types'}>
        <Button> Types </Button>
      </Link>
      <Link to={'/models'}>
        <Button> Models </Button>
      </Link>
      <Button onClick={() => localStorage.clear()}>Logout</Button>
    </>
  );
};

const NotAuthedRoutes = () => {
  return (
    <>
      <Link to={'/login'}>
        <Button> Login </Button>
      </Link>
      <Link to={'/register'}>
        <Button> Signup </Button>
      </Link>
    </>
  );
};
