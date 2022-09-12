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
  font-size: 22px;
`;

export const Link = styled(NextLink)`
  cursor: pointer;
  border: 1px solid black;
`;
