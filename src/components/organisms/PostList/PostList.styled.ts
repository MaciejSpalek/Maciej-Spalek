import styled from "styled-components";
import { colors } from "theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${colors.background.medium};
  border-radius: 8px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 40px;
`;

export const Heading = styled.h2`
  font-family: Lexend;
  font-size: 36px;
  color: white;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;

export const Button = styled.button`
  background-color: ${colors.transparent.main};
  border: none;
  padding: 0;
  transition: 0.1s ease-in;
  :hover {
    scale: 1.025;
  }
`;
