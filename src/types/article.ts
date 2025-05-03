export type IArticleBlockType = "common" | "hint";

export type IArticleCommonBlockType = {
  _id: string;
  type: "common";
  title: string;
  description: string;
  image: string;
};

export type IArticleHintBlockType = {
  _id: string;
  type: "hint";
  description: string;
};

export interface IArticle {
  _id: string;
  title: string;
  description: string;
  image: string;
  blocks: IArticleCommonBlockType[] | IArticleHintBlockType[];
}
