import styled from "styled-components";
import { colors, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  width: 100%;
  gap: 2rem;
  padding: 100px 24px 24px;
  background-color: ${colors.grayScale[1]};
  border-radius: 40px;
`;

export const List = styled.ul`
  ${flexColumn};
  gap:40px;
  padding: 0;
  list-style: none;
`;

export const Heading = styled.h2`
  ${getFont('regular', 18)};
  letter-spacing: 7.2px;
  color: ${colors.grayScale[4]};
  text-transform: uppercase;
`;
