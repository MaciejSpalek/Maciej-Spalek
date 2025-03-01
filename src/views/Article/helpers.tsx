import { ARTICLE_BLOCK_TYPE } from "helpers";
import { Common } from "./components";
import {} from "types";

type ArticleBlockData = {
  data: any;
};

export const articleBlocks = ({ data }: ArticleBlockData) => ({
  [ARTICLE_BLOCK_TYPE.COMMON]: <Common data={data} />,
});
