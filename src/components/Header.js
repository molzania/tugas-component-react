import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Header.css'

function Header() {
  return (
    <div className="Navbar">
  <Navbar>
    <Container>
    <Navbar.Brand href="#home">Tugas 16</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Soal1">Soal 1</Nav.Link>
      <Nav.Link href="/Soal2">Soal 2</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
  );
}

export default Header;