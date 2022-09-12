import React from "react";
import { Nav, List, Anchor, Link } from "./Navbar.styled";
import { Logo } from "components";
import { navigation } from "./helpers";

export const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <List>
        {navigation.map(({ href, text }) => (
          <li key={text}>
            <Link href={href}>
              <Anchor>{text}</Anchor>
            </Link>
          </li>
        ))}
      </List>
    </Nav>
  );
};
