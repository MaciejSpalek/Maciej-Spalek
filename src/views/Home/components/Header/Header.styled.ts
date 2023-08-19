import styled from "styled-components";
import { colors, flexColumn, getFont } from "theme";

export const Container = styled.header`
  ${flexColumn};
  justify-content: center;
  overflow: hidden;
  padding: 128px 24px 24px 24px;
  min-height: calc(100vh - 60px);
  background-color: ${colors.grayScale[1]};
  border-radius: 48px;
  gap: 16px;
`;

export const Heading = styled.h1`
  ${getFont("semibold", 46, 72)};
  color: ${colors.white};
  text-align: center;
  margin: 0;
`;

export const Paragraph = styled.p`
  ${getFont("regular", 14, 18)};
  font-weight: 400;
  line-height: 150%;
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
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;
