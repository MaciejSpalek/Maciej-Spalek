import styled from "styled-components";
import { flexCenter, colors, flexColumn, getFont, devices } from "theme";

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
  ${getFont("semibold", 52, 72)};
  text-transform: capitalize;


`;

export const Content = styled.div`
  ${flexColumn};
  padding: 0;
`;
