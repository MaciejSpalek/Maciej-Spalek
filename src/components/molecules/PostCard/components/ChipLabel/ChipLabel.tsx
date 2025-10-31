import type { IChipLabel } from "./ChipLabel.model";
import { Container } from "./ChipLabel.styled";
import { getChipText } from "./helpers";

export const ChipLabel = ({ type }: IChipLabel) => {
	return <Container>{getChipText(type)}</Container>;
};
