import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = (props) => {
  return (
    <Navbar color="light" light expand="md" sticky="top">
        <NavbarBrand>Employee Directory</NavbarBrand>
    </Navbar>
  );
};

export default Header;