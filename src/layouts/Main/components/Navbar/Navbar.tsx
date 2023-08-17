import React from "react";
import { MobileNavigation, DesktopNavigation } from "./components";
import { useIsMobileView } from "hooks";
import { Nav } from "./Navbar.styled";

export const Navbar = () => {
  const isMobileView = useIsMobileView();

  return (
    <Nav>{isMobileView ? <MobileNavigation /> : <DesktopNavigation />}</Nav>
  );
};
