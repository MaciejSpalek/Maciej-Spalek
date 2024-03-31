import { IPostCard, ISection } from "types";

export interface PostListProps {
  title: string;
  image?: string;
  initialList: IPostCard[];
  type: ISection['type']
}
