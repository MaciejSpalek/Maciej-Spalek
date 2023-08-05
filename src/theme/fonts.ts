import { css } from "styled-components";

const fonts = {
    light: "GeneralSans-Light",
    regular: "GeneralSans-Regular",
    medium: "GeneralSans-Medium",
    semibold: "GeneralSans-Semibold",
    bold: "GeneralSans-Bold",
};

type FontType = "light" | "regular" | "medium" | "semibold" | "bold";

export const getFont = (font: FontType, size: number) => css`
  font-size: ${size}px;
  font-family: ${fonts[font]};
`;


