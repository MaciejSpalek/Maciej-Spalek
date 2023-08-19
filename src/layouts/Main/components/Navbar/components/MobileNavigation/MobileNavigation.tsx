import React, { useState } from "react";
import {
  Collapsed,
  Container,
  TopBar,
  Line,
  Hamburger,
} from "./MobileNavigation.styled";
import { leftNavigation, rightNavigation } from "../../helpers";
import { ListRenderer } from "../../components";
import { Logo } from "components";

export const MobileNavigation = () => {
  const [isOpen, open] = useState(false);

  const toggle = () => open((prev) => !prev);

  const navList = [...leftNavigation, ...rightNavigation];

  return (
    <Container>
      <TopBar>
        <Logo />
        <Hamburger onClick={toggle}>
          <Line isOpen={isOpen} />
        </Hamburger>
      </TopBar>
      {isOpen && (
        <Collapsed>
          <ListRenderer navigation={navList} toggle={toggle} />
        </Collapsed>
      )}
    </Container>
  );
};
