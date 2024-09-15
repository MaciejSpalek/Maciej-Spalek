import { IPost } from "types";

export type ActionType = 'increment' | 'decrement';
export interface PostPreviewProps {
  list: IPost[]
}
