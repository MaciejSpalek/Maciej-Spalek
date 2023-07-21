import styled from "styled-components";
import { boxShadow, colors, flexCenter } from "theme";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 0;
  list-style: none;
`;

export const Anchor = styled.a`
  ${flexCenter};
  border-radius: 12px;
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.grayscale.tertiary};
  background-color: ${colors.white};
  transition: 0.25s ease-in;
  :hover {
    scale: 1.1;
    border: none;
  }
  :hover svg {
  }
  ${boxShadow};

  svg {
    width: 20px;
    height: 20px;
    transition: 0.25s ease-in;
    color: ${colors.typography.secondary};
  }
`;
