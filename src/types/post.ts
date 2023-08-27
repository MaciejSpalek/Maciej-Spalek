export enum PostTypes {
  painting = "painting",
  drawing = "drawing",
  photo = "photo",
}

export const PostStates = {
  available: "available",
  soldOut: "sold_out",
  none: null,
}

export type PostType = PostTypes.drawing | PostTypes.painting | PostTypes.photo;
export type PostState = 'available' | 'sold_out' | null;
export interface IPostCard {
  description?: string;
  price?: string;
  image: string;
  id?: string;
  state: PostState;
  type: PostType;
  onClick: (id: string) => void;
}
