export const generateArray = (min: number, max: number) =>
  Array.from({ length: Math.abs(max - min) + 1 }, (_, k) => min + k);
