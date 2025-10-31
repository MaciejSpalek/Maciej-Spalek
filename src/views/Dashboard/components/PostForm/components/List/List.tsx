import { LS_KEYS, ls } from "helpers";
import Image from "next/image";
import { usePostListQuery } from "queries";
import React from "react";
import { AddPostDialog } from "../AddPostDialog";
import { EditPostCell } from "../EditPostCell";
import { Filters } from "../Filters";
import { RemovePostCell } from "../RemovePostCell";
import { headers } from "./List.model";
import {
	ActionCell,
	Cell,
	Container,
	ContentList,
	HeaderCell,
	HeaderItem,
	HeaderList,
	Heading,
	ImageWrapper,
	Row,
	Section,
	TopWrapper,
} from "./List.styled";

export const List = () => {
	const postListFilters = ls.get(LS_KEYS.POST_LIST_FILTERS);
	const { data, isFetching, isError, refetch } = usePostListQuery({
		filters: postListFilters,
	});

	if (isError) return <div>error</div>;

	return (
		<Container>
			<Filters />
			<Section>
				<TopWrapper>
					<Heading>Posts</Heading>
					<AddPostDialog />
				</TopWrapper>
				<HeaderList>
					{headers.map((header) => (
						<HeaderItem key={header}>
							<HeaderCell>{header}</HeaderCell>
						</HeaderItem>
					))}
				</HeaderList>
				<ContentList>
					{isFetching ? (
						<p>Loading...</p>
					) : (
						data?.map((post, index) => {
							const { _id, image, type, description, price, state } = post;
							return (
								<Row key={_id} last={index === data.length - 1}>
									<Cell>{index + 1}.</Cell>
									<Cell>
										<ImageWrapper>
											<Image
												src={image}
												height={60}
												width={60}
												alt={description}
											/>
										</ImageWrapper>
									</Cell>
									<Cell>{type}</Cell>
									<Cell>{description || ""}</Cell>
									<Cell>{price || ""}</Cell>
									<Cell>{state || ""}</Cell>
									<ActionCell>
										<EditPostCell refetchList={refetch} data={post} />
										<RemovePostCell refetchList={refetch} id={_id} />
									</ActionCell>
								</Row>
							);
						})
					)}
				</ContentList>
			</Section>
		</Container>
	);
};
