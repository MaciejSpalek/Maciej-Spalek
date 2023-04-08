import { IPostCard } from "types";

export interface PostListProps {
  title: string;
  loading: boolean;
  error: boolean;
  list: IPostCard[];
  icon: any;
  onClick?: (id: string) => void;
}
