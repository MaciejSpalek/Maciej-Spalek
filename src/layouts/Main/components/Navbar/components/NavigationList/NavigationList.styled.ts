import styled from "styled-components";
import { colors, devices, flexColumn } from "theme";

export const List = styled.ul`
  ${flexColumn};
  justify-content: flex-start;
  gap: 3rem;
  list-style: none;
  padding: 0;

  @media ${devices.md} {
    flex-direction: row;
    width: auto;
  }
`;

export const Anchor = styled.a`
  font-family: Lexend;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? colors.primary.main : colors.typography.secondary};
  :hover {
    color: ${({ isActive }) =>
      isActive ? colors.primary.dark : colors.typography.primary};
  }

  @media ${devices.md} {
    font-size: 14px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;
