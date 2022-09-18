import styled from "styled-components";
import { boxShadow } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${colors.background.medium};
  border-radius: 8px;
  ${boxShadow};
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

export const Content = styled.div`
  width: 100%;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;
