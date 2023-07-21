import styled from "styled-components";
import { colors, flexColumn } from "theme";

export const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  ${flexColumn};
  justify-content: space-between;
  padding: 0.5rem;
  height: calc(100% - 50px);
  z-index: 999999;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

export const IconButton = styled.button`
  width: auto;
  height: auto;
  background-color: ${colors.transparent.main};
  border: none;
  padding: 0;

  svg {
    width: 32px;
    height: 32px;
    color: ${colors.grayscale.primary};
  }
`;
