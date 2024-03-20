import styled from "styled-components";
import { colors, flexColumn, flexRow } from "theme";

export const Container = styled.div`
  ${flexColumn};
`;

export const Section = styled.ul`
  ${flexColumn};
  align-items: center;
  gap: 24px;
  border-radius: 40px;
  padding: 16px;
  background-color: ${colors.black};
`;

export const ListItem = styled.li<{ last: boolean }>`
  ${flexRow};
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: ${({ last }) => (last ? "none" : "1px solid")};
  border-color: ${colors.grayScale[2]};
`;

export const Cell = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
`;
