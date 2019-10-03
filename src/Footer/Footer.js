import React from "react";
import "./Footer.css";
import { Container, Navbar, NavbarBrand } from "reactstrap";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar color="light" dark>
        <Container>
          <NavbarBrand>Coding problem</NavbarBrand>
          <NavbarBrand>www.geektrust.in/finding-falcone</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
