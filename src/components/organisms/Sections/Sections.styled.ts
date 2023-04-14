import styled from "styled-components";
import { colors, flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  width: 100%;
  gap: 2rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  min-height: 400px;
  gap: 1rem;
  padding: 0;
  list-style: none;
`;

export const Heading = styled.div`
  font-size: 32px;
  font-family: Lexend;
  font-weight: 500;
  color: ${colors.grayscale[700]};
`;
