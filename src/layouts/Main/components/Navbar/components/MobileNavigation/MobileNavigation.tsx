import React, { useState } from "react";
import {
  Collapsed,
  Container,
  TopBar,
  HamburgerContainer,
  Line,
  IconButton,
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
        {/* <IconButton onClick={toggle}>
          {isOpen ? <CloseSquareIcon /> : <HamburgerIcon />}
        </IconButton> */}
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
