import styled from "styled-components";
import { colors, devices, flexCenter } from "theme";

export const Nav = styled.nav`
  ${flexCenter};
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  top: 0;
  z-index: 999999;
  position: fixed;
  background-color: ${colors.white};

  @media ${devices.md} {
    position: static;
    height: 160px;
  }
`;
