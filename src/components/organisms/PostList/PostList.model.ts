import { IPostCard } from "types";

export interface PostListProps {
  title: string;
  loading: boolean;
  list: IPostCard[];
  onClick?: (id: string) => void;
}
