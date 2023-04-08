import styled from "styled-components";
import { boxShadow, colors, devices } from "theme";

export const Nav = styled.nav<{ stickNavbar: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  height: 40px;
  top: 0;
  z-index: 999;
  @media ${devices.md} {
    height: 160px;
  }
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
  color: ${({ isActive }) => (isActive ? colors.primary.main : colors.white)};
`;
