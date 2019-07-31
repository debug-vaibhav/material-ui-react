import React from 'react';
import Wrapper from './Wrapper';
import { Navbar } from 'react-bootstrap';

const Header = (props) => {
  return (
    <Wrapper>
      <header>
        <Navbar bg="light" variant="light" fixed="top">
          <Navbar.Brand>Deep Lens</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>{props.givenName}</Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </Wrapper>
  );
}
export default Header;
