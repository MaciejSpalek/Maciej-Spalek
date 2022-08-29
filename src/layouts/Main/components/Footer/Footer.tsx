import React from "react";
import { Container, Copyright, List, Logo } from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Logo>Spwrtt</Logo>
      <List>
        <li>facebook</li>
        <li>instagram</li>
      </List>
      <Copyright>© 2022 Maciej Spałek. All rights reserved.</Copyright>
    </Container>
  );
};
