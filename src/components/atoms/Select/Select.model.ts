import type React from "react";
import type { InputHTMLAttributes } from "react";

interface IOptions {
	value: string;
	label: string;
}
export interface ISelect extends InputHTMLAttributes<HTMLInputElement> {
	fullWidth?: boolean;
	error?: string;
	touched?: boolean;
	icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	register: any;
	options: IOptions[];
}
