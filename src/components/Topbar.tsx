import { Link } from 'react-router-dom';
import { Button } from './button';
import React from 'react';

export function Topbar() {
  return (
    <div className="w-full absolute top-0 right-0 h-32 bg-emerald-900 shadow-lg flex-row items-center flex gap-6 px-32">
      <Link to={'/login'}>
        <Button> Login </Button>
      </Link>
      <Link to={'/register'}>
        <Button> Signup </Button>
      </Link>
    </div>
  );
}
