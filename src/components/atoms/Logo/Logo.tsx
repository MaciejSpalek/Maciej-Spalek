import React from "react";
import { Anchor, ImageWrapper } from "./Logo.styled";
import Link from "next/link";
import Image from "next/image";
import { logo } from "assets/images";
import { URLS } from "helpers";

export const Logo = () => {
  return (
    <Link href={URLS.home} passHref>
      <Anchor>
        <ImageWrapper>
          <Image quality={100} loading="eager" src={logo} alt="logo" priority />
        </ImageWrapper>
      </Anchor>
    </Link>
  );
};
