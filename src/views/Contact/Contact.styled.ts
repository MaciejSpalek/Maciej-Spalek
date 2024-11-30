import styled, { createGlobalStyle } from "styled-components";
import { colors, devices, flexColumn, flexRow, getFont } from "theme";

export const Container = styled.div`
  ${flexColumn};
  overflow: hidden;
  border-radius: 40px;
  background-color: ${colors.grayScale[1]};
  padding: 24px;
  gap: 64px;

  @media ${devices.md} {
    ${flexRow};
    justify-content: space-between;
    height: 100%;
    min-height: 600px;
    padding: 64px;
  }
`;

export const FormWrapper = styled.form`
  ${flexColumn};
  height: min-content;
  gap: 15px;

  @media ${devices.md} {
    width: 60%;
  }
`;

export const LeftWrapper = styled.div`
  ${flexColumn};

  @media ${devices.md} {
    align-items: flex-start;
    align-self: stretch;
    justify-content: space-between;
    width: min-content;
  }
`;
export const GlobalStyle = createGlobalStyle`
.g-recaptcha {
  width: 100% !important;
  transform: scale(0.9) !important;
  transform-origin: center !important;

  @media (max-width: 768px) {
    transform: scale(1) !important;
  }
}
`;

export const ButtonWrapper = styled.div`
  ${flexColumn};
  gap: 4px;
  flex-wrap: wrap;
  justify-content: space-between;

  align-items: flex-start;

  @media ${devices.md} {
    ${flexRow};
    flex-wrap: wrap;
    gap: 4px;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const TextWrapper = styled.div`
  ${flexColumn};
  align-items: flex-start;
`;

export const Title = styled.p`
  ${getFont("semibold", 32, 72)};
  color: ${colors.white};
  margin: 0;
  line-height: 100%;
`;

export const Subtitle = styled.p`
  ${getFont("regular", 16)};
  color: ${colors.grayScale[5]};
`;

export const Heading = styled.h1`
  ${getFont("regular", 12, 18)};
  color: ${colors.grayScale[4]};
  letter-spacing: 7.2px;
  text-transform: uppercase;
  margin-bottom: 40px;

  @media ${devices.md} {
    margin: 0;
  }
`;
