import styled from "styled-components";
import { flexCenter, colors, flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  gap: 2rem;
  padding: 1rem;
`;

export const HeadingWrapper = styled.div`
  ${flexCenter};
  width: 100%;
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-family: Lexend;
  font-weight: 500;
  color: ${colors.grayscale[700]};
`;

export const Content = styled.div`
  ${flexCenter};
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;
