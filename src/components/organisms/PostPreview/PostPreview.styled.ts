import styled, { css } from "styled-components";
import { boxShadow, devices } from "theme";
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
  z-index: 999999999;
`;

export const Modal = styled.div`
  position: relative;
  background-color: ${colors.background.dark};
  border-radius: 8px;
  ${boxShadow};
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  max-height: 600px;
  max-width: 600px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const Description = styled.p`
  font-family: Lexend;
  font-weight: 500;
  font-size: 18px;
  color: black;
`;

export const Title = styled.span`
  font-family: Lexend;
  font-weight: 500;
  font-size: 22px;
  color: black;
`;

export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: 300px;
  padding: 8px;
  border-end-end-radius: 8px;
  border-start-end-radius: 8px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 8px;
`;

export const Button = styled.button`
  width: fit-content;
  border: none;
  background-color: white;
  cursor: pointer;
  padding: 0;
  svg {
    width: 28px;
    height: 28px;
    path {
      fill: black;
    }
  }
`;

const arrowButtonCss = css`
  position: absolute;
  top: 50%;
  width: fit-content;
  background-color: ${colors.transparent.main};
  border: none;
  cursor: pointer;
  padding: 0;
  svg {
    width: 44px;
    height: 44px;
    path {
      fill: white;
    }
  }
`;
export const LeftArrowButton = styled.button`
  right: calc(100% + 16px);
  ${arrowButtonCss};
`;

export const RightArrowButton = styled.button`
  left: calc(100% + 16px);
  ${arrowButtonCss};
`;
