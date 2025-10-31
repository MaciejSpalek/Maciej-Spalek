import type { IPost } from "./post";

export interface ISection {
	_id?: string;
	image: string;
	title: string;
	href: string;
	type: IPost["type"];
}
