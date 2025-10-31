import type { ReactNode } from "react";

export interface IAttributes<T>
	extends React.HTMLAttributes<T>,
		React.RefAttributes<T> {}

export interface IChildren {
	children: ReactNode | ReactNode[];
}
