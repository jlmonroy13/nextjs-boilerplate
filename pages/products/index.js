import React from 'react';
// import PropTypes from 'prop-types';

const Products = () => {
  return (
    <div className="container">
      <h2 className="products__title">Products Page</h2>
    </div>
  );
};

// Products.propTypes = {};

export const getStaticProps = async () => {
  return {
    props: {
      pageTitle: 'Product page',
    },
  };
};

export default Products;
