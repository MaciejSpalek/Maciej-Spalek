import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
`;

export const HeadingWrapper = styled.div`
  ${flexCenter};
  @media ${devices.md} {
    justify-content: flex-start;
  }
`;

export const Heading = styled.h1`
  color: ${colors.grayScale[1]};
  ${getFont("semibold", 42, 72)};
  text-transform: capitalize;
`;

export const Content = styled.div`
  ${flexColumn};
  padding: 0;
`;
