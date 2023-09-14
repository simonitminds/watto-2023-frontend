import React, { useState } from 'react';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { useMutation, useReactiveVar } from '@apollo/client';
import { graphql } from '../gql';
import { Link, useNavigate } from 'react-router-dom';
import { isLogin } from '../State';
import { useEffect } from 'react';

const login = graphql(`
  mutation TestLoging($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      user {
        id
        username
        money
      }
      token
    }
  }
`);

export const Login = () => {
  const navigate = useNavigate();
  const is_logged_in = useReactiveVar(isLogin);

  const [testLoginMutation, { loading, error, data }] = useMutation(login);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const attrs = {
      username: data.get('username') as string,
      password: data.get('password') as string,
    };
    if (!attrs.username || !attrs.password) return;

    const result = await testLoginMutation({ variables: attrs });

    localStorage.setItem('token', result.data?.login?.token || '');

    isLogin(true);
  };

  return (
    <div className="flex flex-col gap-1">
      <Header>Login</Header>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-6 max-w-xl mx-auto"
      >
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="dark_the_big"
        ></Input>
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your Password"
        ></Input>
        <div className="flex items-center space-x-12">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>

          {/* lave en link til den her, måske skal jeg lave en ny vindue */}
          <a
            href="/forgot-password"
            className="text-red-500 hover:text-blue-700 transition-colors duration-300"
          >
            Forgot Password?
          </a>
        </div>
        {error && (
          <div className="text-red-500">
            {error.message || 'An error occurred.'}
          </div>
        )}
        <Button type="submit">Login</Button>

        {/* A horizontal line */}
        <div className="flex items-center my-1">
          <hr className="flex-grow border-t border-gray-300" />
          <div className="mx-4 text-white-500">Or with</div>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center gap-1 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="24px"
            height="24px"
          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            />
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            />
          </svg>
          Login with Facebook
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md flex items-center gap-1 transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120 120"
            width="24px"
            height="24px"
            baseProfile="basic"
          >
            <path
              d="M107.145,55H100H87.569H60v18h27.569c-1.852,5.677-5.408,10.585-10.063,14.118 C72.642,90.809,66.578,93,60,93c-12.574,0-23.278-8.002-27.299-19.191C31.6,70.745,31,67.443,31,64 c0-3.839,0.746-7.505,2.101-10.858C37.399,42.505,47.823,35,60,35c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,20.969,72.736,16,60,16c-18.422,0-34.419,10.377-42.466,25.605C14,48.291,12,55.912,12,64c0,7.882,1.9,15.32,5.267,21.882 C25.223,101.389,41.372,112,60,112c12.382,0,23.668-4.688,32.182-12.386C101.896,90.831,108,78.128,108,64 C108,60.922,107.699,57.917,107.145,55z"
              opacity=".35"
            />
            <path
              fill="#44bf00"
              d="M17.267,81.882C25.223,97.389,41.372,108,60,108c12.382,0,23.668-4.688,32.182-12.386L77.506,83.118 C72.642,86.809,66.577,89,60,89c-12.574,0-23.278-8.002-27.299-19.191L17.267,81.882z"
            />
            <path
              d="M77.506,83.118c-0.684,0.553-1.685,1.158-2.398,1.638l14.711,12.846 c0.807-0.641,1.6-1.298,2.363-1.988L77.506,83.118z"
              opacity=".35"
            />
            <path
              fill="#0075ff"
              d="M92.182,95.614C101.896,86.83,108,74.128,108,60c0-3.078-0.301-6.083-0.855-9H100H87.569H60v18 h27.569c-1.852,5.677-5.408,10.585-10.063,14.118L92.182,95.614z"
            />
            <path
              d="M32.701,69.809L17.267,81.882c0.486,0.948,1.004,1.877,1.551,2.787l15.3-11.576 C33.63,72.181,33.05,70.804,32.701,69.809z"
              opacity=".35"
            />
            <path
              fill="#ffc400"
              d="M17.267,81.882C13.9,75.32,12,67.882,12,60c0-8.088,2-15.709,5.534-22.395l15.568,11.537 C31.746,52.496,31,56.161,31,60c0,3.443,0.6,6.745,1.701,9.809L17.267,81.882z"
            />
            <path
              d="M17.534,37.605c-0.482,0.844-1.169,2.36-1.564,3.251l16.059,11.491 c0.299-1.095,0.653-2.167,1.072-3.205L17.534,37.605z"
              opacity=".35"
            />
            <path
              fill="#ff1200"
              d="M33.101,49.142C37.399,38.505,47.823,31,60,31c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,16.969,72.736,12,60,12c-18.422,0-34.419,10.377-42.466,25.605L33.101,49.142z"
            />
          </svg>{' '}
          Login with Google
        </button>
        <div className="flex items-center space-x-12">
          <label htmlFor="DoNotHaveAnaccount">Don't have an account</label>

          {/* lave en link til den her, måske skal jeg lave en ny vindue */}
          <a
            href="/auth/Signup"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};
export default Login;
