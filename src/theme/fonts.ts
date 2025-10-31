import { getFluidSize } from "helpers";
import { css } from "styled-components";

const fonts = {
	light: "GeneralSans-Light",
	regular: "GeneralSans-Regular",
	medium: "GeneralSans-Medium",
	semibold: "GeneralSans-Semibold",
	bold: "GeneralSans-Bold",
};

type FontType = "light" | "regular" | "medium" | "semibold" | "bold";

export const getFont = (
	font: FontType,
	minSize: number,
	maxSize?: number,
) => css`
  font-size: ${getFluidSize(minSize, maxSize || minSize)};
  font-family: ${fonts[font]};
`;
