import React from "react";
import { Nav } from "./Navbar.styled";
import { Logo } from "components";
import { useIsMobileView } from "hooks";
import { MobileNavigation, NavigationList } from "./components";

export const Navbar = () => {
  const isMobileView = useIsMobileView();

  return (
    <Nav>
      <Logo />
      {isMobileView ? <MobileNavigation /> : <NavigationList />}
    </Nav>
  );
};
