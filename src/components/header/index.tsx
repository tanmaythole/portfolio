import { FC } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

import logo from "@src/assets/images/logo.png";

const Header: FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-transparent">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} height={48} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
