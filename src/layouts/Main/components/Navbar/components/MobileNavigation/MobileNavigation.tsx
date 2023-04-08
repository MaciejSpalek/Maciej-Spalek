import React, { useState } from "react";
import { Container, IconButton } from "./MobileNavigation.styled";
import { CloseSquareIcon, HamburgerIcon } from "assets";
import { NavigationList } from "../../components";

export const MobileNavigation = () => {
  const [isOpen, open] = useState(false);

  const toggle = () => open((prev) => !prev);

  return (
    <>
      {isOpen && (
        <Container>
          <IconButton onClick={toggle}></IconButton>
          <NavigationList toggle={toggle} />
        </Container>
      )}
      <IconButton onClick={toggle}>
        {isOpen ? <CloseSquareIcon /> : <HamburgerIcon />}
      </IconButton>
    </>
  );
};
