import React from "react";
import { Nav, Logo, List } from "./Navbar.styled";

export const Navbar = () => {
  return (
    <Nav>
      <Logo>Spwrtt.pl</Logo>
      <List>
        <li>Drawings</li>
        <li>Paintings</li>
      </List>
    </Nav>
  );
};
