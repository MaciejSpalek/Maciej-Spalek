import React from "react";
import {
  Container,
  ImageWrapper,
  InnerWrapper,
  LeftWrapper,
  SocialsWrapper,
  FirstWrapper,
  SecondWrapper,
  Wrapper,
  Copyright,
  Divider,
  Paragraph,
  Anchor,
  Heading,
  ListTitle,
  List,
} from "./Footer.styled";
import Image from "next/image";
import { logo } from "assets";
import { SpecialButton } from "components";
import Link from "next/link";
import { footerInfo } from "./helpers";

export const Footer = () => {
  return (
    <Container>
      <InnerWrapper>
        <FirstWrapper>
          <Heading>Any questions?</Heading>
          <SpecialButton>Contact me</SpecialButton>
        </FirstWrapper>

        <Divider />

        <SecondWrapper>
          <LeftWrapper>
            <ImageWrapper>
              <Image
                quality={100}
                loading="eager"
                src={logo}
                alt="logo"
                priority
              />
            </ImageWrapper>
            <Paragraph>Maciej Spałek</Paragraph>
          </LeftWrapper>
          <SocialsWrapper>
            {footerInfo.map(({ title, list }) => (
              <div key={title}>
                <ListTitle>{title}</ListTitle>
                <List>
                  {list.map(({ name, href }) => (
                    <li key={name}>
                      <Link href={href}>
                        <Anchor>{name}</Anchor>
                      </Link>
                    </li>
                  ))}
                </List>
              </div>
            ))}
          </SocialsWrapper>
        </SecondWrapper>

        <Divider />

        <Wrapper>
          <Copyright>2023 | Maciej Spałek</Copyright>
        </Wrapper>
      </InnerWrapper>
    </Container>
  );
};
