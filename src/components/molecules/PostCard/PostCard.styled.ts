import styled from "styled-components";
import { flexCenter } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
  height: calc(100% - 5px);
  background-color: ${colors.transparent.medium};
  visibility: hidden;
`;
