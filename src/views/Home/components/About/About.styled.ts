import styled from "styled-components";
import { colors, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.header`
  ${flexCenter};
  justify-content: space-between;
  min-height: 400px;
`;

export const LeftWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  width: min-content;
`;

export const ImageWrapper = styled.div`
  background-color: ${colors.primary.main};
  border-radius: 50%;
  width: 233px;
  height: 233px;
`;

export const RightWrapper = styled.div`
  ${flexCenter};
  width: 50%;
  align-self: flex-start;
`;

export const Heading = styled.h2`
  ${getFont("regular", 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  ${getFont("medium", 40)};
  color: ${colors.grayScale[1]};
  margin: 0;
`;
