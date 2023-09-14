import { makeVar } from '@apollo/client';
import { Token } from 'graphql';

export const isLogin = makeVar(localStorage.getItem('token') !== null);
