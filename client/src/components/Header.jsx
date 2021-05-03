import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">Sign In</Navbar.Brand>
      </Navbar>
  );
};

export default Header;