import styled from "styled-components";
import { colors, flexColumn, flexRow, getFont } from "theme";

export const List = styled.ul`
  ${flexRow};
  width: auto;
  gap: 16px;
`;

export const ListItem = styled.li`
  ${flexColumn};
`;

export const Button = styled.button<{ isActive?: boolean }>`
  ${getFont("semibold", 16)};
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.grayScale[2] : colors.black)};
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  background-color: ${colors.white};
  border: none;

  :hover {
    color: ${({ isActive }) =>
			isActive ? colors.grayScale[3] : colors.grayScale[3]};
  }
`;
