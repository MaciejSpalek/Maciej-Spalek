import styled from "styled-components";
import { IBaseButton } from "./SpecialButton.model";
import { colors, flexCenter, getFont } from "theme";

export const BaseButton = styled.button<IBaseButton>`
  position: relative;
  ${flexCenter};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: 52px;
  gap: 10px;
  ${getFont('semibold', 18)};
  letter-spacing: -0.27px;
  line-height: 32px;
  transition: .7s ease-in-out;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  color: ${colors.white};
  background: linear-gradient(
    180deg,
    rgb(255, 146, 104) 0%,
    rgb(249, 92, 31) 100%
  );

  :hover {
    p {
      color: ${colors.primary.main};
      z-index: 2;
    }
    padding: 10px 10px 10px 16px;
  }

  :hover:before {
    width: calc(100% - 2 * 24px + 2 * 14px);
    right: 10px;
  }

  :before {
    content: "";
    position: absolute;
    top: 10px;
    right: 24px;
    width: 32px;
    height: 32px;
    background-color: ${colors.white};
    border-radius: 50px;
    z-index: 1;
    transition: 0.5s ease;
  }
`;

export const IconWrapper = styled.div`
  ${flexCenter};
  width: auto;
  background-color: ${colors.white};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  svg {
    width: 16px;
    height: 16px;
    path {
      fill: ${colors.primary.main};
    }
  }
`;
