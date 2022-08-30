import React from 'react'
import Head from "next/head";
import {Header, LoginForm} from "../components";

const Login = () => {
  return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
                rel="stylesheet"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"/>
        </Head>
        <Header session />
          <div className="py-40 max-w-5xl m-auto">
              <div className="flex">
                  <LoginForm />
              </div>
          </div>
      </>


  )
}

export default Login


