import styled from "styled-components";
import { boxShadow, devices, flexCenter, colors } from "theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const HeadingWrapper = styled.div`
  ${flexCenter};
  width: 100%;
  gap: 8px;
  padding: 16px 0;
`;

export const Heading = styled.h2`
  font-family: Lexend;
  font-size: 36px;
  color: ${colors.grayscale[700]};
`;

export const Content = styled.div`
  ${flexCenter};
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;
