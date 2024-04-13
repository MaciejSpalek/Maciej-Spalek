import { IPost, ISection } from "types";

export interface PostListProps {
  title: string;
  image?: string;
  initialList: IPost[];
  type: ISection['type']
}
