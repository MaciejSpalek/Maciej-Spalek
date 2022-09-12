import styled from "styled-components";
import { colors } from "theme/colors";

export const Item = styled.li`
  margin-bottom: 28px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
`;

export const Button = styled.button`
  background-color: ${colors.transparent.main};
  border: none;
  padding: 0;
  transition: 0.1s ease-in;
  :hover {
    scale: 1.025;
    border: none;
  }
`;
