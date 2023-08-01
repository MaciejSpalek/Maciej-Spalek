import React from "react";
import { Text, Anchor, ImageWrapper } from "./Logo.styled";
import Link from "next/link";
import Image from "next/image";
import { logo } from "assets/images";

export const Logo = () => {
  return (
    <Link href="/">
      <Anchor>
      <ImageWrapper>
        <Image quality={100} loading="eager" src={logo} alt="logo" priority />
      </ImageWrapper>
        {/* <Text>Maciej Spałek</Text> */}
      </Anchor>
    </Link>
  );
};
