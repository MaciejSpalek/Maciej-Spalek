import React from "react";
import { Container, Copyright, List, Anchor } from "./Footer.styled";
import { socials } from "./helpers";

export const Footer = () => {
  return (
    <Container>
      <List>
        {socials.map(({ href, icon: Icon }) => (
          <li key={href}>
            <Anchor rel="noopener noreferrer" target="_blank" href={href}>
              <Icon />
            </Anchor>
          </li>
        ))}
      </List>
      <Copyright>© 2022 Spwrtt. All rights reserved.</Copyright>
    </Container>
  );
};
