import styled from "styled-components";
import { flexCenter } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 40px;
`;

export const Item = styled.li`
  margin-bottom: 12px;
`;

export const Button = styled.button`
  ${flexCenter};
  background-color: ${colors.transparent.main};
  border: none;
  padding: 0;
  margin: 0;
`;
