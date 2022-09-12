import styled from "styled-components";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  :hover div {
    transition: 0.3s ease-in;
    visibility: visible;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Date = styled.span`
  font-size: 14px;
`;
export const Title = styled.span`
  font-size: 18px;
`;

export const HiddenWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${colors.transparent.medium};
  visibility: hidden;
  padding: 12px;
`;
