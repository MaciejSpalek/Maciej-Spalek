import React from "react";
import { leftNavigation, rightNavigation } from "../../helpers";
import { List } from "./DesktopNavigation.styled";
import { ListRenderer } from "../ListRenderer";
import { Logo } from "components";

interface DesktopNavigation {
  toggle?: () => void;
}

export const DesktopNavigation = ({ toggle }: DesktopNavigation) => {
  return (
    <List>
      <ListRenderer navigation={leftNavigation} toggle={toggle} />
      <li>
        <Logo />
      </li>
      <ListRenderer navigation={rightNavigation} toggle={toggle} />
    </List>
  );
};
