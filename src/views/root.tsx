import React from 'react';
import { Topbar } from '../components/Topbar';
import { Outlet } from 'react-router-dom';

export function Root() {
  return (
    <div className="min-h-screen flex flex-col p-3 min-w-screen bg-slate-600 text-white">
      <Topbar />
      <main className="mt-32">
        <Outlet />
      </main>
    </div>
  );
}
