import type { IAttributes } from "types/interfaces";

type ButtonType = "submit" | "button" | "reset";
type Size = "small" | "medium" | "square" | "large";

export interface IBaseButton {
	size: Size;
	outline: boolean;
	disabled: boolean;
	fullWidth: boolean;
}

export interface IButton extends IAttributes<HTMLButtonElement> {
	icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	outline?: boolean;
	disabled?: boolean;
	fullWidth?: boolean;
	isLoading?: boolean;
	size?: Size;
	type?: ButtonType;
}
