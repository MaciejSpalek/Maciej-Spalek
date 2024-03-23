export const PostTypes = {
  graphicDesign: 'graphi-design',
  painting: "painting",
  drawing: "drawing",
  photography: "photography",
};

export const PostStates = {
  available: "available",
  soldOut: "sold_out",
  none: null,
};

export type PostType = "drawing" | "painting" | "photography" | "graphic-design";
export type PostState = "available" | "sold_out" | null;
export interface IPost {
  description?: string;
  price?: string;
  image: string;
  _id?: string;
  state?: PostState;
  type: PostType;
}
export interface IPostCard extends IPost {
  onClick: (id: string) => void;
}
