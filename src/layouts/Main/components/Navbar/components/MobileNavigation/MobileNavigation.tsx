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
        <Hamburger
          onClick={toggle}
          aria-controls="navigation"
          aria-expanded={isOpen}
          aria-label="Menu"
        >
          <Line isOpen={isOpen} />
        </Hamburger>
      </TopBar>
      {isOpen && (
        <Collapsed id="navigation" aria-hidden={!isOpen}>
          <ListRenderer navigation={navList} toggle={toggle} isOpen={isOpen} />
        </Collapsed>
      )}
    </Container>
  );
};
