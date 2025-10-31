import styled from "styled-components";
import { flexCenter, getFont } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: absolute;
  ${flexCenter};
  bottom: 16px;
  right: 16px;
  width: auto;
  height: 32px;
  border-radius: 12px;
  cursor: pointer;
  padding: 0 28px;
  ${getFont("medium", 10, 12)};
  color: ${colors.label.red.light};
  border: 1px solid ${colors.grayScale[2]};
  background-color: ${colors.transparent.dark};
  text-transform: uppercase;
  letter-spacing: 7.2px;
  z-index: 3;
`;
