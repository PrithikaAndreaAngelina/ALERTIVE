import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css';

function Login() {
  return (
    <section class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl ">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-black">Email Id</label>
                      <input type="email" name="email" id="email" class=" sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-yellow-400 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-yellow-500" placeholder="name@domain.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class=" sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-yellow-400 dark:border-yellow-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-yellow-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-black">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <div class="flex justify-center">
                  <Link to="/home">
                  <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Sign In</button>
                    </Link>
                    </div>            
              </form>
          </div>
      </div>
  </div>
</section>
  );
};
export default Login;