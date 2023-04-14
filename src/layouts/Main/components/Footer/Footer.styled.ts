import styled from "styled-components";
import { boxShadow, colors, flexCenter } from "theme";

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 40px;
  gap: 16px;
`;

export const Copyright = styled.span`
  font-size: 18px;
  text-align: center;
  color: ${colors.grayscale.primary};
`;
