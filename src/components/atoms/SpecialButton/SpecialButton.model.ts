import type { IAttributes } from "types/interfaces";

type TButton = "submit" | "button" | "reset";

export interface IBaseButton {
	fullWidth: boolean;
}

export interface ISpecialButton extends IAttributes<HTMLButtonElement> {
	fullWidth?: boolean;
	type?: TButton;
}
