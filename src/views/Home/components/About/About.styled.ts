import styled from "styled-components";
import { colors, devices, flexCenter, flexColumn, getFont } from "theme";

export const Container = styled.header`
  ${flexCenter};
  flex-direction: column;
  min-height: 400px;

  @media ${devices.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftWrapper = styled.div`
  ${flexColumn};

  @media ${devices.md} {
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    width: min-content;
  }
`;

export const Heading = styled.h2`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[2]};
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media ${devices.md} {
    margin: 0;
  }
`;

export const RightWrapper = styled.div`
  ${flexCenter};
  width: 100%;

  @media ${devices.md} {
    align-self: flex-start;
    width: 50%;
  }
`;

export const Paragraph = styled.p`
  ${getFont("medium", 26, 40)};
  color: ${colors.grayScale[1]};
  text-align: center;
  word-break: keep-all;
  margin-top: 40px;

  @media ${devices.md} {
    margin: 0;
    text-align: left;
    word-break: normal;
  }
`;
