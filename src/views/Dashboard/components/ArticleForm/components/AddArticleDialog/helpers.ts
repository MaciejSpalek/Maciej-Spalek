import _ from "lodash";
import { IArticle } from "types";

export const convertPaylaod = ({ data }: { data: IArticle }) => {
  const newBlocks = data.blocks.map((block) => _.omit(block, ["_id"]));
  return { ...data, blocks: newBlocks };
};
