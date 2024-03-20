import { IPostCard } from "./post";

export interface ICraft {
  image: File;
  title: string;
  href: string;
  posts?: IPostCard[];
}
