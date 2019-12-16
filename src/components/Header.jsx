import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = (props) => {
  return (
    <Navbar color="light" light expand="md" sticky="top">
      <NavbarBrand>{ props.title }</NavbarBrand>
      
    </Navbar>
  );
};

export default Header;