export enum PostTypes {
  painting = "painting",
  drawing = "drawing",
  photo = "photo",
}

export type PostType = PostTypes.drawing | PostTypes.painting;

export interface IPostCard {
  description?: string;
  title: string;
  image: string;
  id?: string;
  date: Date;
}
