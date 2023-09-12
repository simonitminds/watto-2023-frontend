import React from 'react';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';
import FacebookImage from '/home/ehab/code/watto-2023-frontend/src/Images/facebook.jpg';

export const Login = () => {
  // const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const attrs = {
      username: data.get('username') as string,
      password: data.get('password') as string,
    };
    if (!attrs.username || !attrs.password) return;

    console.log({
      variables: attrs,
    });
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
        <Button type="submit">Login</Button>

        {/* A horizontal line */}
        <div className="flex items-center my-1">
          <hr className="flex-grow border-t border-gray-300" />
          <div className="mx-4 text-white-500">Or with</div>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md flex items-center gap-1 transition duration-300">
          <img src={FacebookImage} alt="Facebook Icon" className="w-6 h-6" />
          Login with Facebook
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 rounded-md flex items-center gap-1 transition duration-300">
          <img
            src="/path-to-google-icon.png"
            alt="Google Icon"
            className="w-6 h-6"
          />
          Login with Google
        </button>
        <div className="flex items-center space-x-12">
          <label htmlFor="DoNotHaveAnaccount">Don't have an account</label>

          {/* lave en link til den her, måske skal jeg lave en ny vindue */}
          <a
            href="/Signup"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};
