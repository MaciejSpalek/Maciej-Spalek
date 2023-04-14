import React from "react";
import { Socials } from "components/molecules/Socials";
import { Container, Copyright } from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <Socials />
      <Copyright>© 2022 Maciej Spałek. All rights reserved.</Copyright>
    </Container>
  );
};
