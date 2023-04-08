import styled from "styled-components";
import { colors } from "theme";

export const Container = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  background-color: ${colors.background.dark};
  border-top: 1px solid ${colors.background.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 100px);
  width: 100%;
  z-index: 999999;
`;

export const IconButton = styled.button`
  width: auto;
  height: auto;
  background-color: ${colors.transparent.main};
  border: none;
  svg {
    width: 32px;
    height: 32px;
    color: ${colors.primary.main};
  }
`;
