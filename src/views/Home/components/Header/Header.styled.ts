import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn } from "theme";

export const Container = styled.header`
  ${flexColumn};
  justify-content: center;
  overflow: hidden;
  padding: 128px 24px 24px 24px;
  min-height: calc(100vh - 60px);
  background-color: ${colors.grayScale[1]};
  gap: 16px;
  
  @media ${devices.lg} {
    border-radius: 48px;
  }
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
  max-width: 50%;
  text-align: center;
`;

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  list-style: none;
  gap: 24px;
  padding: 0;
  margin: 0;
  margin-top: 48px;
`;

export const GridItem = styled.li`
  border-radius: 24px;
  max-height: 520px;
  overflow: hidden;
`;
