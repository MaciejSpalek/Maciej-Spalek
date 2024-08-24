import { breakpoints } from "theme";

export const getFluidSize = (minValue: number, maxValue: number) => {
  const minWidthPx = breakpoints.xs;
  const maxWidthPx = breakpoints.lg;

  let pixelsPerRem = 16;

  const minSize = minValue / pixelsPerRem;
  const maxSize = maxValue / pixelsPerRem;

  const minWidth = minWidthPx / pixelsPerRem;
  const maxWidth = maxWidthPx / pixelsPerRem;

  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minSize;

  return `clamp( ${minSize}rem, ${yAxisIntersection}rem + ${
    slope * 100
  }vw, ${maxSize}rem )`;
};
