import React from "react";

import { List, Anchor } from "./Socials.styled";
import { socials } from "./helpers";

export const Socials = () => {
  return (
    <List>
      {socials.map(({ href, icon: Icon }) => (
        <li key={href}>
          <Anchor rel="noopener noreferrer" target="_blank" href={href}>
            <Icon />
          </Anchor>
        </li>
      ))}
    </List>
  );
};
