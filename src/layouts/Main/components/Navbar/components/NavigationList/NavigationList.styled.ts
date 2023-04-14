import styled from "styled-components";
import { colors, devices, flexColumn } from "theme";

export const List = styled.ul`
  ${flexColumn};
  justify-content: flex-start;
  gap: 24px;
  list-style: none;
  width: 100%;
  padding: 0;

  @media ${devices.md} {
    flex-direction: row;
    width: auto;
  }
`;

export const Anchor = styled.a`
  font-family: Lexend;
  font-weight: 500;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? colors.primary.main : colors.typography.secondary};
  :hover {
    color: ${({ isActive }) =>
      isActive ? colors.primary.dark : colors.typography.primary};
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
