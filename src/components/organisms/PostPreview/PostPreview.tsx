import { useRouter } from "next/router";
import { Wrapper } from "./components";
import type { PostPreviewProps } from "./components/Wrapper/PostPreview.model";

export const PostPreview = ({ list }: PostPreviewProps) => {
	const router = useRouter();
	const listIds = list.map(({ _id }) => _id);
	const isOpen = null != router.query.photo && null != listIds;

	if (!isOpen) return null;

	return <Wrapper list={list} />;
};
