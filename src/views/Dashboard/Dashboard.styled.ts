import styled from "styled-components";
import { colors, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  overflow: hidden;
  border-radius: 40px;
  padding: 24px;
  gap: 64px;
  margin-top: 64px;
`;

export const TopBar = styled.div`
  ${flexCenter};
  justify-content: space-between;
`;

export const Heading = styled.h1`
  color: ${colors.grayScale[4]};
  letter-spacing: 7.2px;
  text-transform: uppercase;
  text-align: start;
  white-space: no-wrap;
  ${getFont("regular", 12, 18)};
`;
