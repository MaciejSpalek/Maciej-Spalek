import React from "react";
import { Nav } from "./Navbar.styled";
import { Logo } from "components";
import { useIsMobileView, useScrollPosition } from "hooks";
import { MobileNavigation, NavigationList } from "./components";

export const Navbar = () => {
  const isMobileView = useIsMobileView();

  const scrollPosition = useScrollPosition();

  const stickNavbar = isMobileView
    ? scrollPosition >= 100
    : scrollPosition >= 160;

  return (
    <Nav stickNavbar={stickNavbar}>
      <Logo />
      {isMobileView ? <MobileNavigation /> : <NavigationList />}
    </Nav>
  );
};
