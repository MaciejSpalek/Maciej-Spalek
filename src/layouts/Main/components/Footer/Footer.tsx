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

export const Footer = () => {
  const { push } = useRouter();

  const goToContact = () => push(URLS.contact);

  const currentYear = new Date().getFullYear();

  const renderNavLink = ({ href, name }) => (
    <Link href={href} passHref>
      <Anchor>{name}</Anchor>
    </Link>
  );

  const renderSocialLink = ({ href, name }) => (
    <Anchor rel="noopener noreferrer" target="_blank" href={href}>
      {name}
    </Anchor>
  );

  return (
    <Container>
      <InnerWrapper>
        <FirstWrapper>
          <Heading>Any questions?</Heading>
          <SpecialButton onClick={goToContact}>Contact me</SpecialButton>
        </FirstWrapper>
        <Divider />
        <SecondWrapper>
          <LeftWrapper>
            <CirclePhoto width={144}/>
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
        <Wrapper>
          <Copyright>{currentYear} | Maciej Spałek</Copyright>
        </Wrapper>
      </InnerWrapper>
    </Container>
  );
};
