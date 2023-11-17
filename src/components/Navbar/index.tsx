import { Container, Nav, Navbar } from 'react-bootstrap';

import NavItems from './NavItems';

const NavBar = () => (
  <Navbar expand="lg" fixed="top">
    <Container>
      <Navbar.Brand href="#home">Tanmay Thole</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          {NavItems.map(({label, link, key}) => (
            <Nav.Link key={key} href={link}>{label}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
