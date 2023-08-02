import styled from "styled-components";
import { colors, flexCenter, flexColumn } from "theme";

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
  ${flexColumn};
  height: min-content;
  width: 50%;
`;

export const Heading = styled.h2`
  font-family: "General Sans Regular";
  font-size: 18px;
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-family: "General Sans Medium";
  font-size: 40px;
  color: ${colors.grayScale[1]};
  text-align: left;
`;





