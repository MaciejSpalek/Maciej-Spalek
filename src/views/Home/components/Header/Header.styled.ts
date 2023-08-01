import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn } from "theme";

export const Container = styled.header`
  ${flexColumn};
  justify-content: center;
  width: 100%;
  overflow: hidden;
  padding: 5rem 0;
  height: calc(100vh - 60px);
  background-color: ${colors.grayScale[1]};

  @media ${devices.lg} {
    border-radius: 48px;
  }
`;

export const HeadingWrapper = styled.div`
  ${flexColumn};
  gap: 16px;
`;

export const Heading = styled.h1`
  font-family: "General Sans Semibold", sans-serif;
  color: ${colors.white};
  margin: 0;
  font-size: 1rem;

  @media ${devices.md} {
    font-size: 58px;
  }
`;

export const Paragraph = styled.p`
  font-family: "General Sans Regular", sans-serif;
  color: ${colors.grayScale[5]};
  max-width: 60%;
  text-align: center;
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

export const GridList = styled.ul`
  ${flexCenter};
`;

export const GridItem = styled.div`
  ${flexCenter};
`;
