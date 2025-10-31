import type { IPost } from "types";

export interface IRemovePostCell {
	refetchList: () => void;
	id: IPost["_id"];
}
