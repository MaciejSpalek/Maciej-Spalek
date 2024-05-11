import React from "react";
import { colors } from "theme";
import { Container } from "./CircularProgress.styled";

export const CircularProgress = ({
  size = 48,
  strokeWidth = 2.5,
  percentage = 80,
}) => {
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (percentage * circumference) / 100;

  return (
    <Container width={size} height={size} viewBox={viewBox}>
      <circle
        strokeWidth={`${strokeWidth}px`}
        stroke={colors.transparent.main}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        strokeWidth={`${strokeWidth}px`}
        fill="none"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        stroke={colors.grayScale[3]}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={`${dash},${circumference - dash}`}
        strokeLinecap="round"
      />
    </Container>
  );
};
