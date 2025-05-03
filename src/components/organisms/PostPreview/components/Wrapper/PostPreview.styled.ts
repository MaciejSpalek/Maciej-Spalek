import styled, { css } from "styled-components";
import { devices, flexCenter } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.transparent.dark};
  z-index: 999;
`;

export const Modal = styled.div`
  position: relative;
  border-radius: 8px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 900px;
  height: 100vh;
`;

const arrowButtonCss = css`
  position: fixed;
  ${flexCenter};
  top: 50%;
  transform: translateY(-50%);
  background-color: ${colors.transparent.dark};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  svg {
    width: 44px;
    height: 44px;
    path {
      fill: ${colors.white};
    }
  }
`;

export const LeftArrowButton = styled.button`
  left: 16px;
  ${arrowButtonCss};
  @media ${devices.md} {
    width: 64px;
    height: 64px;
  }
`;

export const RightArrowButton = styled.button`
  right: 16px;
  ${arrowButtonCss};
  @media ${devices.md} {
    width: 64px;
    height: 64px;
  }
`;

export const CloseIconButton = styled.button`
  ${flexCenter};
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  padding: 4px;
  cursor: pointer;
  z-index: 9999;
  background-color: ${colors.transparent.dark};

  @media ${devices.md} {
    width: 64px;
    height: 64px;
  }
  svg {
    width: 44px;
    height: 44px;
    path {
      fill: ${colors.white};
    }
  }
`;
