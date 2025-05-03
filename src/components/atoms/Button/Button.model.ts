import { IAttributes } from "types/interfaces";

type TButton = "submit" | "button" | "reset";

export interface IBaseButton {
  size: string;
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
  size?: "small" | "medium" | "square";
  type?: TButton;
}
