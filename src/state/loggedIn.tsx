import { makeVar } from '@apollo/client';

export const isLoggedIn = makeVar(localStorage.getItem('token') !== null);
