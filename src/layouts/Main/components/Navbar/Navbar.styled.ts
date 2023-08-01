import styled from "styled-components";
import { devices, flexCenter } from "theme";

export const Nav = styled.nav`
  position: fixed;
  ${flexCenter};
  padding: 0 20px;
  height: 60px;
  top: 0;
  z-index: 999999;

  @media ${devices.md} {
    position: static;
    height: 160px;
  }
`;
