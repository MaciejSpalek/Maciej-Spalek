import { PostList, Sections } from "components/organisms";
import type { ICraftPage } from "types";
import { Container } from "./Craft.styled";

export const Craft = ({
	craft,
	sections,
	posts,
	postsAmount,
	hideDescription = false,
	isPreview = true,
}: ICraftPage) => {
	const { title, image, type } = craft;
	return (
		<Container>
			<PostList
				hideDescription={hideDescription}
				isPreview={isPreview}
				postsAmount={postsAmount}
				initialList={posts}
				title={title}
				image={image}
				type={type}
			/>
			<Sections sections={sections} />
		</Container>
	);
};
