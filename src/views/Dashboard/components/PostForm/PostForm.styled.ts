import styled from "styled-components";
import {
  colors,
  flexColumn,
  getFont,
  flexCenter,
  flexRow,
} from "theme";

export const Container = styled.div`
  ${flexColumn};
  gap: 24px;
`;

export const Section = styled.div`
  ${flexColumn};
  align-items: flex-start;
  gap: 16px;
  border-radius: 40px;
  padding: 24px;
  background-color: ${colors.black};
`;

export const SubmitWrapper = styled.div`
  ${flexColumn};
  align-items: flex-end;
  gap: 16px;
  border-radius: 40px;
  padding: 24px;
  background-color: ${colors.black};
`;

export const Form = styled.form`
  ${flexColumn};
  gap: 48px;
`;

export const HeaderRowWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 15%) minmax(100px, 15%) auto;
  gap: 16px;
  width: 100%;
`;

export const AboutRowWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 15%) auto;
  gap: 16px;
  width: 100%;
`;

export const SectionsRowWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 15%) 1fr;
  gap: 16px;
  width: 100%;
`;

export const TopWrapper = styled.div`
  ${flexCenter};
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  ${flexRow};
  align-items: flex-start;
  gap: 16px;
`;

export const Heading = styled.h2`
  ${getFont("regular", 12, 18)};
  letter-spacing: 7.2px;
  line-height: 32px;
  color: ${colors.grayScale[4]};
  margin: 0;
  text-transform: uppercase;
`;

