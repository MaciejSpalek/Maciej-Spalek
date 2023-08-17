import styled from "styled-components";
import { flexCenter } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  cursor: pointer;
  overflow: hidden;
  :hover div {
    visibility: visible;
  }
  :focus div {
    visibility: visible;
    overflow: hidden;
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
`;

export const DateText = styled.span`
  font-family: Lexend;
  font-weight: 500;
  font-size: 14px;
`;

export const Title = styled.span`
  font-family: Lexend;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
`;

export const HiddenWrapper = styled.div`
  ${flexCenter};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.transparent.medium};
  visibility: hidden;
`;
