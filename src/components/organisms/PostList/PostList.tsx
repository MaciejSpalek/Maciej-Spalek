import { Button, PostCard, PostPreview } from "components";
import { Section } from "layouts/Section";
import { useRouter } from "next/router";
import { usePostListQuery } from "queries";
import { useState } from "react";
import type { IPost } from "types";
import { URLS } from "../../../helpers";
import type { PostListProps } from "./PostList.model";
import { List } from "./PostList.styled";
import { usePostList } from "./usePostList";

export const PostList = ({
	hideDescription,
	initialList,
	isPreview = true,
	postsAmount,
	title,
	type,
}: PostListProps) => {
	const [enabled, setEnabled] = useState(false);
	const { listRef } = usePostList();
	const [limit, setLimit] = useState(10);
	const router = useRouter();

	const filters = { type, limit };
	const { data: fetchedList, isFetching } = usePostListQuery({
		filters,
		enabled,
	});

	const list = fetchedList || initialList || [];
	const isLoadingMoreButtonVisible =
		null != postsAmount && postsAmount >= limit;

	const handleOnButton = () => {
		setLimit((prev) => prev + 10);
		setEnabled(true);
	};

	const openModal = (id: IPost["_id"]) => {
		router.query.photo = id;
		router.push(router, undefined, { shallow: true });
	};

	const goToPostView = (id: IPost["_id"]) => {
		router.push(URLS.post({ id }));
	};

	const handleOnPostClick = (id: IPost["_id"]) => {
		if (isPreview) {
			openModal(id);
		} else {
			goToPostView(id);
		}
	};

	return (
		<Section title={title}>
			<List ref={listRef}>
				{list.map((post) => (
					<li key={post._id}>
						<PostCard
							onClick={handleOnPostClick}
							hideDescription={hideDescription}
							{...post}
						/>
					</li>
				))}
			</List>
			{isLoadingMoreButtonVisible && (
				<Button isLoading={isFetching} onClick={handleOnButton}>
					Więcej
				</Button>
			)}
			<PostPreview list={list} />
		</Section>
	);
};
