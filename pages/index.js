import React from 'react';
import Head from 'next/head';

import Header from 'components/Header';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Home Page</h1>
    </div>
  );
}
