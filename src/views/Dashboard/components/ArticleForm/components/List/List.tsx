import { LS_KEYS, ls } from "helpers";
import Image from "next/image";
import { useArticlesListQuery } from "queries";
import { AddArticleDialog } from "../AddArticleDialog";
import { EditArticleCell } from "../EditArticleCell";
import { Filters } from "../Filters";
import { RemoveArticleCell } from "../RemoveArticleCell";
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
	const articleListFilters = ls.get(LS_KEYS.ARTICLE_LIST_FILTERS);
	const { data, isFetching, isError, refetch } = useArticlesListQuery({
		filters: articleListFilters,
	});

	if (isError) return <div>error</div>;

	return (
		<Container>
			<Filters />
			<Section>
				<TopWrapper>
					<Heading>Articles</Heading>
					<AddArticleDialog />
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
						data?.map((article, index) => {
							const { _id, image, title } = article;
							return (
								<Row key={_id} last={index === data.length - 1}>
									<Cell>{index + 1}.</Cell>
									<Cell>{_id}</Cell>
									<Cell>
										<ImageWrapper>
											<Image src={image} height={60} width={60} alt={title} />
										</ImageWrapper>
									</Cell>
									<Cell>{title || ""}</Cell>
									<ActionCell>
										<EditArticleCell refetchList={refetch} data={article} />
										<RemoveArticleCell refetchList={refetch} id={_id} />
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
