import styled from "styled-components";
import { colors, flexColumn, flexRow } from "theme";

export const Container = styled.header`
  ${flexColumn};
`;

export const ContactWrapper = styled.div`
  ${flexRow};
  justify-content: space-between;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border-radius: 40px;
  background-color: ${colors.grayScale[1]};
  padding: 64px;
`;

export const FormWrapper = styled.div`
  ${flexColumn};
  height: min-content;
  gap: 15px;
  width: 60%;
`;

export const LeftWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
  align-self: stretch;
  justify-content: space-between;
  width: min-content;
`;

export const ImageWrapper = styled.div`
  background-color: ${colors.primary.main};
  border-radius: 50%;
  width: 233px;
  height: 233px;
`;

export const TextWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
`;

export const Title = styled.p`
  font-family: Lexend;
  color: ${colors.white};
  margin: 0;
  font-size: 72px;
  line-height: 72px;
`;

export const Subtitle = styled.p`
  font-family: Lexend;
  font-size: 18px;
  color: ${colors.grayScale[5]};
`;

export const Heading = styled.h1`
  font-family: "General Sans Regular";
  color: ${colors.grayScale[4]};
  margin: 0;
  font-size: 18px;
  text-transform: uppercase;
`;
