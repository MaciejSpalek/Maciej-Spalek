import type { UseFormRegister } from "react-hook-form";
import type {
	IArticle,
	IArticleCommonBlockType,
	IArticleHintBlockType,
} from "types";

export interface BlockProps {
	index: number;
	register: UseFormRegister<IArticle>;
	setValue: (name: keyof IArticle, value: string) => void;
	data?: IArticleCommonBlockType | IArticleHintBlockType;
}
