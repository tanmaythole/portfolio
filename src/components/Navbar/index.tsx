import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import NavItems from './NavItems';
import ThemeSwitch from '../ThemeSwitch';

import GitHub from "../../assets/icons/github.svg";

const NavBar = () => (
  <Navbar expand="lg" fixed="top" className='bg-white border-bottom'>
    <Container>
      <Navbar.Brand href="#home">Tanmay Thole</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {NavItems.map(({label, link, key}) => (
            <Nav.Link key={key} href={link}>{label}</Nav.Link>
          ))}
        </Nav>
        <Nav className="ms-auto gap-3">
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <img src={GitHub} alt='Github' width={22} />
          </li>
          <li>
            <Button variant='outline-primary' size='sm'>Let's Work</Button>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
