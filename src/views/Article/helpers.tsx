import { ARTICLE_BLOCK_TYPE } from "helpers";
import { Common, Hint } from "./components";

type ArticleBlockData = {
	data: any;
};

export const articleBlocks = ({ data }: ArticleBlockData) => ({
	[ARTICLE_BLOCK_TYPE.COMMON]: <Common data={data} />,
	[ARTICLE_BLOCK_TYPE.HINT]: <Hint data={data} />,
});
