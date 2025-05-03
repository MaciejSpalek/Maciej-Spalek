import styled from "styled-components";
import { colors, devices, flexColumn, getFont } from "theme";

interface IAnchor {
  isActive: boolean
}

export const List = styled.ul`
  ${flexColumn};
  gap: 5rem;
  list-style: none;
  padding: 16px 0;
`;

export const Anchor = styled.a<IAnchor>`
  ${getFont("semibold", 16)};
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.grayScale[2] : colors.black)};
  text-decoration: ${({ isActive }) => (isActive ? "underline" : "none")};
  :hover {
    color: ${({ isActive }) =>
      isActive ? colors.grayScale[3] : colors.grayScale[3]};
  }

  @media ${devices.md} {
    ${getFont("semibold", 12)};
  }
`;
