import styled from "styled-components";
import NextLink from "next/link";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

export const Anchor = styled.a`
  font-family: Lexend;
  font-weight: 500;
  font-size: 22px;
  cursor: pointer;
`;

export const Link = styled(NextLink)``;
