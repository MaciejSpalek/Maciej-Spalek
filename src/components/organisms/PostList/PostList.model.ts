import { IPost } from "types";

export interface PostListProps {
  title: string;
  image?: string;
  postsAmount?: number;
  initialList: IPost[];
  type: IPost['type'];
}
