import React from "react";
import { Nav } from "./Navbar.styled";
import { useIsMobileView } from "hooks";
import { MobileNavigation, NavigationList } from "./components";

export const Navbar = () => {
  const isMobileView = useIsMobileView();

  return (
    <Nav>
      {isMobileView ? <MobileNavigation /> : <NavigationList />}
    </Nav>
  );
};
