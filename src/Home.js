import React, { useState} from 'react'
import alert from '../src/alert.png'
import Main from './Main.js'
import './App.css'


function Home() {
  return (
    <section class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-92 dark:hidden" src={alert} alt="image" />
        <img class="w-92 hidden dark:block" src={alert} alt="image" />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">An alert system to assure and steer clear of unfavourable situations.</h2>
          <p class="mb-6 font-light text-white md:text-lg ">Alertive helps you to connect and communicate with people . A new way of warning the general public and preventing deadly situations from occurring.<br/>Take a chance to save someone ! Be a Hero once !</p>
 

         <React.Fragment>
        <Main label="Microphone :" />
      </React.Fragment>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
    </section>
  );
};

export default Home