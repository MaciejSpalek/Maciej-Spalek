import React from "react";
import { Logo } from "components";
import { Container, Copyright, Wrapper, List, Anchor } from "./Footer.styled";
import { socials } from "./helpers";

export const Footer = () => {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <List>
          {socials.map(({ href, icon: Icon }) => (
            <li key={href}>
              <Anchor rel="noopener noreferrer" target="_blank" href={href}>
                <Icon />
              </Anchor>
            </li>
          ))}
        </List>
        <Copyright>© 2022 Maciej Spałek. All rights reserved.</Copyright>
      </Wrapper>
    </Container>
  );
};
