import React from 'react';
import PropTypes from 'prop-types';

import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  pageProps: PropTypes.objectOf(PropTypes.object()).isRequired,
  Component: PropTypes.func.isRequired,
};

export default MyApp;
