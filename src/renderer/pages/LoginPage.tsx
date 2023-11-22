import React from 'react';
import LoginBackground from '../assets/imgs/loginbackground02.jpg';
import LogoImage from '../../../assets/icons/32x32.png';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div
      className="bg-cover bg-blend-multiply bg-no-repeat bg-center bg-opacity-60"
      style={{ backgroundImage: `url(${LoginBackground})` }}
    >
      <div className="h-screen py-8 px-6 flex flex-col justify-center items-center mx-auto text-white">
        <div className="flex items-center font-black text-3xl leading-8 mb-6 justify-center">
          <img
            className="w-8 h-8 mr-2 max-w-full block align-middle"
            src={LogoImage}
            alt="logo"
          />
          Restaurant POS System
        </div>
        <div className="mt-0 max-w-[500px] rounded-lg w-full bg-modalBackground">
          <div className="p-8">
            <h1 className="text-2xl leading-8 font-bold text-center">
              Sign in to your account
            </h1>
            <div className="mt-8">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 font-medium text-sm leading-5 block"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-inputBackground border border-customGray rounded-md p-2.5 w-full outline-none"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="mb-2 font-medium text-sm leading-5 block"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-inputBackground border border-customGray rounded-md p-2.5 w-full outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="flex items-start">
                  <div className="flex items-center rounded-md">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-inputBackground border-customGray rounded-md outline-none"
                    />
                    <label htmlFor="remember" className="ms-3 text-sm">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  className="font-medium text-sm text-blue-500"
                  to={'/#'}
                >
                  Forgot password?
                </Link>
              </div>
              <button className="mt-6 px-5 py-2.5 bg-blue-500 font-medium text-sm rounded-lg cursor-pointer transform-none w-full">
                Log in to your account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
