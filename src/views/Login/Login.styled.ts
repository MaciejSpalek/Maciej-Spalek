import { LeftRectangleArrowIcon } from "assets";
import styled from "styled-components";
import { colors, devices, flexColumn, flexRow, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  overflow: hidden;
  border-radius: 40px;
  background-color: ${colors.grayScale[1]};
  padding: 24px;
  gap: 64px;
  margin-top: 64px;

  @media ${devices.md} {
    max-width: 600px;
  }
`;

export const FormWrapper = styled.form`
  ${flexColumn};
  gap: 15px;
`;

export const BottomWrapper = styled.div`
  ${flexRow};
  justify-content: space-between;
`;

export const BackButton = styled.button`
  ${flexRow};
  justify-content: space-between;
  width: auto;
  color: ${colors.white};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 16px;
  font-size: 14px;
`;

export const StyledLeftRectangleArrowIcon = styled(LeftRectangleArrowIcon)`
  color: ${colors.white};
`;

export const Heading = styled.h1`
  color: ${colors.grayScale[4]};
  letter-spacing: 7.2px;
  text-transform: uppercase;
  text-align: start;
  white-space: no-wrap;
  ${getFont("regular", 12, 18)};
`;
