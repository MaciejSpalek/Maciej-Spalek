import styled from "styled-components";
import { colors, devices, flexCenter, flexRow } from "theme";

export const CarouselContainer = styled.div`
  position: relative;
  ${flexRow};
  .alice-carousel__stage-item {
    border-radius: 40px;
    overflow: hidden;
  }
`;

export const CarouselButtonsWrapper = styled.div`
  ${flexCenter};
  position: absolute;
  justify-content: space-between;
  gap: 16px;
  z-index: 2;

  padding: 0 4px;
  @media ${devices.md} {
    position: static;
    width: auto;
    padding: 0;
  }
`;

export const IconButton = styled.button`
  ${flexCenter};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  border: none;
  background-color: ${colors.transparent.medium};
  cursor: pointer;
  svg {
    height: 40px;
    width: 40px;
  }
  path {
    fill: ${colors.white};
  }

  @media ${devices.md} {
    background-color: ${colors.grayScale[2]};
  }
`;
