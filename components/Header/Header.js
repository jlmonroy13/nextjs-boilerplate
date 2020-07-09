import React from 'react';

import Container from 'components/Container';

const Header = () => (
  <header>
    <Container>
      <div>
        <h1>Title</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">About</a>
          <a href="/">FAQs</a>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
