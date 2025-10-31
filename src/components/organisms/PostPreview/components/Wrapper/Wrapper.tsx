import { useLockBodyScroll } from "@custom-react-hooks/use-lock-body-scroll";
import {
	CloseIcon,
	LeftRectangleArrowIcon,
	RightRectangleArrowIcon,
} from "assets";
import _ from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import type { ActionType, PostPreviewProps } from "./PostPreview.model";
import {
	CloseIconButton,
	Container,
	ImageWrapper,
	LeftArrowButton,
	Modal,
	RightArrowButton,
} from "./PostPreview.styled";

export const Wrapper = ({ list }: PostPreviewProps) => {
	useLockBodyScroll();

	const router = useRouter();
	const listIds = list.map(({ _id }) => _id);
	const currentPostId = router.query.photo?.toString();
	const currentIndex = listIds?.indexOf(currentPostId);
	const { image, description } = list.find(
		({ _id }) => _id === currentPostId,
	) || { image: "" };

	const closePreview = () => {
		router.query = _.omit(router.query, "photo");
		router.push(router, undefined, { shallow: true });
	};

	const changePhoto = (type: ActionType = "increment") => {
		if (type === "increment") {
			router.query.photo = listIds[currentIndex + 1];
		} else {
			router.query.photo = listIds[currentIndex - 1];
		}

		router.push(router, undefined, { shallow: true });
	};

	const showChangePhotoButton = (type: ActionType) => {
		if (type === "increment") {
			return currentIndex < listIds?.length - 1;
		} else {
			return currentIndex > 0;
		}
	};

	const isLeftArrowButtonVisible = showChangePhotoButton("decrement");
	const isRightArrowButtonVisible = showChangePhotoButton("increment");

	return (
		<Container>
			<CloseIconButton onClick={closePreview}>
				<CloseIcon />
			</CloseIconButton>
			<Modal>
				<ImageWrapper>
					<Image
						objectFit="contain"
						alt={description}
						loading="eager"
						layout="fill"
						src={image}
						priority
					/>
				</ImageWrapper>
				{isLeftArrowButtonVisible && (
					<LeftArrowButton onClick={() => changePhoto("decrement")}>
						<LeftRectangleArrowIcon />
					</LeftArrowButton>
				)}
				{isRightArrowButtonVisible && (
					<RightArrowButton onClick={() => changePhoto("increment")}>
						<RightRectangleArrowIcon />
					</RightArrowButton>
				)}
			</Modal>
		</Container>
	);
};
