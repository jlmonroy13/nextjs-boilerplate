/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from 'components/Container';
import Link from 'next/link';

const Header = () => (
  <header>
    <Container>
      <div>
        <h1>Title</h1>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
