import styled from "styled-components";
import { flexColumn, colors, flexRow } from "theme";

export const Container = styled.div`
  ${flexColumn};
  padding: 2rem;
`;

export const List = styled.ul`
  ${flexColumn};
  gap: 8rem;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
  :nth-of-type(2n) div:first-child {
    grid-area: 1 / 2 / 2 / 3;
  }

  :nth-of-type(2n) div:nth-child(2) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 500px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  font-family: Lexend;
  color: ${colors.typography.primary};
`;

export const ItemTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  font-family: Lexend;
  color: ${colors.typography.primary};
`;
export const ItemDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: Lexend;
  color: ${colors.typography.secondary};
`;
