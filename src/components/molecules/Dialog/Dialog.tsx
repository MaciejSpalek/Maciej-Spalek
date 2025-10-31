import { CloseIcon } from "assets";
import { Button } from "components/atoms";
import { type ReactNode, useRef } from "react";
import { breakpoints } from "theme";
import type { breakpointTypes } from "types";
import {
	Backdrop,
	DialogContent,
	Divider,
	StyledDialog,
	Title,
	TopWrapper,
} from "./Dialog.styled";

interface IDialog {
	size: breakpointTypes;
	children: ReactNode;
	toggle: () => void;
	isOpen: boolean;
	title: string;
}

export const Dialog = ({ children, title, isOpen, toggle, size }: IDialog) => {
	const ref = useRef<HTMLDivElement>(null);

	const dialogSize = breakpoints[size];

	return (
		<Backdrop isOpen={isOpen} onClick={toggle}>
			<StyledDialog
				size={dialogSize}
				ref={ref}
				onClick={(e) => e.stopPropagation()}
			>
				<TopWrapper>
					<Title>{title}</Title>
					<Button size="square" onClick={toggle} icon={CloseIcon}></Button>
				</TopWrapper>
				<Divider />
				<DialogContent>{children}</DialogContent>
			</StyledDialog>
		</Backdrop>
	);
};
