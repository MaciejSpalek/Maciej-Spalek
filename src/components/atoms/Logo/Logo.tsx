import React from "react";
import { Anchor, ImageWrapper, LogoImage } from "./Logo.styled";
import Link from "next/link";
import { URLS } from "helpers";

export const Logo = () => {
  return (
    <Link href={URLS.home} passHref>
      <Anchor>
        <ImageWrapper>
          <LogoImage />
        </ImageWrapper>
      </Anchor>
    </Link>
  );
};
