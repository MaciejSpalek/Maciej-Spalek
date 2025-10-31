import styled from "styled-components";
import { colors, devices, flexColumn, flexRow, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
`;

export const HeadingWrapper = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.h2`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[2]};
  margin: 0;
  text-transform: uppercase;

  @media ${devices.md} {
    margin: 0;
  }
`;
