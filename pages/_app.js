/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from 'components/Header';

import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{pageProps.pageTitle || 'My page'}</title>
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon.png"
        sizes="57x57"
      />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

MyApp.defaultProps = {
  pageProps: {},
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
