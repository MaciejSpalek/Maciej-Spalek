import React from "react";
import { MobileNavigation, DesktopNavigation } from "./components";
import { useIsMobileView } from "hooks";
import { Nav } from "./Navbar.styled";
import { LoadingWrapper } from "components";

export const Navbar = () => {
  const isMobileView = useIsMobileView();

  if (null == isMobileView) {
    return <LoadingWrapper height="70px"  size={16}/>;
  }

  return (
    <Nav>{isMobileView ? <MobileNavigation /> : <DesktopNavigation />}</Nav>
  );
};
