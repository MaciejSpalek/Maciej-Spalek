export type IArticleBlockType = "common" | "hint";

export type IArticleCommonBlockType = {
  _id: string;
  image: string;
  description: string;
  type: "common";
  title: string;
};

export type IArticleHintBlockType = {
  _id: string;
  title: string;
  description: string;
  type: "hint";
};

export type IArticleBlock = IArticleCommonBlockType | IArticleHintBlockType;

export interface IArticle {
  _id: string;
  title: string;
  description: string;
  image: string;
  blocks: IArticleBlock[];
}
