export enum PostTypes {
  painting = "painting",
  drawing = "drawing",
  photo = "photo",
}

export type PostType = PostTypes.drawing | PostTypes.painting;

export interface IPostCard {
  title: string;
  image: string;
  id?: string;
}
