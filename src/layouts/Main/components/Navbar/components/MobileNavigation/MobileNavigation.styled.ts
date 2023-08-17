import styled from "styled-components";
import { colors, flexCenter, flexColumn } from "theme";

export const Container = styled.div`
  ${flexColumn};
  padding: 24px;
`;

export const TopBar = styled.div`
  ${flexCenter};
  justify-content: space-between;
  background-color: ${colors.white};
`;

export const Collapsed = styled.ul`
  list-style: none;
  ${flexColumn};
  gap: 24px;
`;

// export const Hamburger = styled.span`
//   position: relative;
//   display: inline-block;
//   width: 35px;
//   height: 24px;
// `;

// export const HamburgerLine = styled.span`
//   left: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   transition: background-color 0.1s 0.2s ease-in-out;
// `;

export const Hamburger = styled.button`
  ${flexCenter};
  gap: 6px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  padding: 0;
  background-color: ${colors.white};
  border: none;
`;

export const Line = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 30px;
  height: 3px;
  background-color: #333;
  transition: 0.2s ease-in-out;
  background-color: ${({ isOpen }) => isOpen && colors.white };

  :before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${colors.black};
    transition: 0.2s ease-in-out;
    transform: ${({ isOpen }) => isOpen && `translateY(10px) rotate(45deg) `};
  }

  :after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${colors.black};
    transition: 0.2s ease-in-out;
    transform: ${({ isOpen }) => isOpen && `translateY(-10px) rotate(-45deg) `};
  }
`;
