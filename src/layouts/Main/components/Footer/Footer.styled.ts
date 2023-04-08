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
  color: ${colors.grayscale[700]};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 0;
  list-style: none;
`;

export const Anchor = styled.a`
  ${flexCenter};
  border-radius: 12px;
  width: 40px;
  height: 40px;
  :hover svg {
    color: ${({ isActive }) =>
      !isActive ? colors.primary.main : colors.white};
  }
  ${boxShadow};
  svg {
    width: 20px;
    height: 20px;
    color: ${colors.background.light};
  }
`;
