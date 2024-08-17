import React from "react";
import {
  Container,
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
import { CirclePhoto, SpecialButton } from "components";
import Link from "next/link";
import { footerInfo } from "./helpers";
import { useRouter } from "next/router";
import { URLS } from "helpers";
import { useFooter } from "./useFooter";

export const Footer = () => {
  const {
    containerRef,
    headingRef,
    buttonRef,
    secondWrapperRef,
    copyrightWrapperRef,
  } = useFooter();
  const { push } = useRouter();

  const goToContact = () => push(URLS.contact);

  const currentYear = new Date().getFullYear();

  interface ILink {
    href: string;
    name: string;
  }

  const renderNavLink = ({ href, name }: ILink) => (
    <Link href={href} passHref>
      <Anchor>{name}</Anchor>
    </Link>
  );

  const renderSocialLink = ({ href, name }: ILink) => (
    <Anchor rel="noopener noreferrer" target="_blank" href={href}>
      {name}
    </Anchor>
  );

  return (
    <Container ref={containerRef}>
      <InnerWrapper>
        <FirstWrapper>
          <Heading ref={headingRef}>Any questions?</Heading>
          <div ref={buttonRef}>
            <SpecialButton onClick={goToContact}>Contact me</SpecialButton>
          </div>
        </FirstWrapper>
        <Divider />
        <SecondWrapper ref={secondWrapperRef}>
          <LeftWrapper>
            <CirclePhoto width={144} />
            <Paragraph>Maciej Spałek</Paragraph>
          </LeftWrapper>
          <SocialsWrapper>
            {footerInfo.map(({ title, list, isSocial }) => (
              <div key={title}>
                <ListTitle>{title}</ListTitle>
                <List>
                  {list.map(({ href, name }) => (
                    <li key={name}>
                      {isSocial
                        ? renderSocialLink({ href, name })
                        : renderNavLink({ href, name })}
                    </li>
                  ))}
                </List>
              </div>
            ))}
          </SocialsWrapper>
        </SecondWrapper>
        <Divider />
        <Wrapper ref={copyrightWrapperRef}>
          <Copyright>{currentYear} | Maciej Spałek</Copyright>
        </Wrapper>
      </InnerWrapper>
    </Container>
  );
};
