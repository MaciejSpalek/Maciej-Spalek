import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn } from "theme";

export const Container = styled.header`
  ${flexColumn};
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding: 5rem 0;
  gap: 2rem;
  height: calc(100vh - 60px);
  background-color: ${colors.background.light};

  @media ${devices.lg} {
    border-radius: 2rem;
  }
`;

export const HeadingWrapper = styled.div`
  ${flexColumn};
`;

export const Heading = styled.h1`
  font-family: Lexend;
  color: ${colors.typography.primary};
  margin: 0;
  font-size: 2rem;

  @media ${devices.md} {
    font-size: 48px;
  }
`;

export const Paragraph = styled.p`
  font-family: Lexend;
  font-size: 18px;
  color: ${colors.primary.main};
`;

export const ImageWrapper = styled.div`
  ${flexCenter};
  max-width: 16rem;
  padding: 1rem 0;

  @media ${devices.md} {
    width: 30%;
    padding: 0;
  }
`;
