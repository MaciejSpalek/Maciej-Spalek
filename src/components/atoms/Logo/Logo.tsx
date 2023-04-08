import React from "react";
import { Text, Anchor } from "./Logo.styled";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Anchor>
        <Text>Maciej Spałek</Text>
      </Anchor>
    </Link>
  );
};
