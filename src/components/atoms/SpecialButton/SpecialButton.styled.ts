import styled from "styled-components";
import { IBaseButton } from "./SpecialButton.model";
import { colors, flexCenter } from "theme";

export const BaseButton = styled.button<IBaseButton>`
  position: relative;
  ${flexCenter};
  gap: 10px;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  font-size: 16px;
  transition: .7s ease-in-out;
  padding: 10px 24px;
  cursor: pointer;
  height: 52px;
  border-radius: 50px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  color: ${colors.white};
  background: linear-gradient(
    180deg,
    rgb(255, 146, 104) 0%,
    rgb(249, 92, 31) 100%
  );
  border: none;

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
    /* opacity: 0; */
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
