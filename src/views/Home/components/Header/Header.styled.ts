import styled from "styled-components";
import { colors, flexCenter, flexColumn } from "theme";

export const Container = styled.header`
  ${flexColumn};
  width: 100%;
  overflow: hidden;
  padding: 4rem 0;
  gap: 2rem;
`;

export const HeadingWrapper = styled.div`
  ${flexColumn};
`;

export const Heading = styled.h1`
  font-family: Lexend;
  font-size: 48px;
  color: ${colors.typography.primary};
  margin: 0;
`;

export const Paragraph = styled.p`
  font-family: Lexend;
  font-size: 18px;
  color: ${colors.primary.main};
`;

export const ImageWrapper = styled.div`
  ${flexCenter};
  width: 30%;
`;
