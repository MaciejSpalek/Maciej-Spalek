import styled from "styled-components";
import { flexCenter, colors, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
`;

export const HeadingWrapper = styled.div`
  ${flexCenter};
  justify-content: flex-start;
`;

export const Heading = styled.h2`
  color: ${colors.grayScale[1]};
  ${getFont("semibold", 72)};
  text-transform: capitalize;
`;

export const Content = styled.div`
  ${flexColumn};
  padding: 0;
`;

export const Item = styled.li`
  margin-bottom: 28px;
`;
