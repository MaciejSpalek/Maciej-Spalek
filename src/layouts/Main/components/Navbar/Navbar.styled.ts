import styled from "styled-components";
import { devices } from "theme";

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
