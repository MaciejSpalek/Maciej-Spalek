import { getFluidSize } from "helpers";
import styled from "styled-components";
import { breakpoints, devices, flexColumn } from "theme";
import { colors } from "theme/colors";

export const Container = styled.div`
  position: relative;
  ${flexColumn};
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  ${flexColumn};
  max-width: ${breakpoints.lg}px;
  padding: 0 ${getFluidSize(8, 16)} 64px;
`;

export const MainWrapper = styled.main`
  ${flexColumn};
  @media ${devices.md} {
    margin: 0;
  }
`;
