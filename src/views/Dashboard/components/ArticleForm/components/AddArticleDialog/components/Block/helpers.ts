import { IArticleCommonBlockType, IArticleHintBlockType } from "types";

export const getImage = ({
  data,
}: {
  data: IArticleCommonBlockType | IArticleHintBlockType | undefined;
}) => {
  if (data?.type === "common") {
    return data.image;
  }

  return "";
};
