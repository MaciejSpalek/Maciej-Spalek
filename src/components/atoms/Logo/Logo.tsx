import React from "react";
import { StyledLogoIcon, Text, Anchor } from "./Logo.styled";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Anchor>
        <StyledLogoIcon />
        <Text>Spwrtt</Text>
      </Anchor>
    </Link>
  );
};
