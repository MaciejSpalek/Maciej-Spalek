import { CirclePhoto } from "components";
import styled from "styled-components";
import { colors, flexCenter, flexColumn, getFont, devices } from "theme";

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
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media ${devices.md} {
    margin: 0;
  }
`;

export const StyledCirclePhoto = styled(CirclePhoto)<{}>`
  width: calc(100% - 2 * 16px);
  aspect-ratio: 1 / 1;
  margin-bottom: 40px;
  max-width: 500px;
  border: 1px solid red;

  @media ${devices.md} {
    width: 233px;
    height: 233px;
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
