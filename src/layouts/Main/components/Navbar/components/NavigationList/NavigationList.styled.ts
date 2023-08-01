import styled from "styled-components";
import { colors, devices, flexColumn } from "theme";

export const List = styled.ul`
  ${flexColumn};
  gap: 5rem;
  list-style: none;
  padding: 0;

  @media ${devices.md} {
    flex-direction: row;
    justify-content: center;
    width: auto;
  }
`;

export const Anchor = styled.a`
  font-family: "General Sans Semibold", sans-serif;
  font-size: 14px;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.grayScale[2] : colors.black)};
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  :hover {
    color: ${({ isActive }) =>
      isActive ? colors.grayScale[3] : colors.grayScale[3]};
  }

  @media ${devices.md} {
    font-size: 12px;
  }
`;
