import styled from "styled-components";
import { flexCenter } from "theme";

export const Container = styled.div<{ height: string }>`
  ${flexCenter};
  height: ${({ height }) => height || "100%"};
`;
