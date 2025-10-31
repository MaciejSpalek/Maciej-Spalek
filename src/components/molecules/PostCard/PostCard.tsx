import { URLS } from "helpers";
import Image from "next/image";
import Link from "next/link";
import { type IPostCard, PostStates } from "types";
import {
	Container,
	Description,
	DescriptionWrapper,
	ImageWrapper,
	LinkContent,
} from "./PostCard.styled";

export const PostCard = ({
	hideDescription = false,
	description,
	onClick,
	state,
	image,
	_id,
}: IPostCard) => {
	const isMakeOfferLinkVisible = state === PostStates.available;
	const href = `${URLS.contact}?id=${_id}`;

	return (
		<Container>
			<ImageWrapper onClick={() => onClick(_id)}>
				<Image src={image} alt="title" layout="fill" objectFit="cover" />
			</ImageWrapper>
			<DescriptionWrapper>
				{!hideDescription && <Description>{description}</Description>}
				{isMakeOfferLinkVisible && (
					<Link href={href}>
						<LinkContent>make offer</LinkContent>
					</Link>
				)}
			</DescriptionWrapper>
		</Container>
	);
};
