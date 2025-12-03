import { useQueryClient } from "@tanstack/react-query";
import { Button, Dialog, ImageUploader, Input, Textarea } from "components";
import { QUERY_KEYS } from "helpers";
import { ENDPOINTS } from "helpers/endpoints";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import type { IArticle, IArticleCommonBlockType } from "types";
import {
	BlockWrapper,
	FieldsWrapper,
	Form,
	SubmitWrapper,
} from "./AddArticleDialog.styled";
import { Block } from "./components";
import { convertPaylaod } from "./helpers";

export const AddArticleDialog = () => {
	const methods = useForm<IArticle>();
	const [isLoading, setLoading] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const queryClient = useQueryClient();

	const { register, handleSubmit, setValue, watch } = methods;

	const refetchArticleList = () => {
		queryClient.refetchQueries({
			queryKey: [QUERY_KEYS.ARTICLE.LIST],
		});
	};

	const toggle = () => setOpen((prev) => !prev);

	const onSubmit = async (data: IArticle) => {
		setLoading(true);

		const convertedPayload = convertPaylaod({ data });

		try {
			await axiosInstance.post(ENDPOINTS.ARTICLE.CREATE, convertedPayload);
			setLoading(false);
			refetchArticleList();
			toggle();
		} catch {
			setLoading(false);
		}
	};

	const handleAddEmptyBlock = () => {
		const blocks = watch("blocks") || [];
		const initialBlock: IArticleCommonBlockType = {
			description: "",
			image: "",
			title: "",
			type: "common",
			_id: "",
		};

		setValue("blocks", [
			...(blocks as IArticleCommonBlockType[]),
			initialBlock,
		]);
	};

	const blocks = watch("blocks") || [];

	return (
		<>
			<Button onClick={toggle}>Dodaj artykuł</Button>
			<Dialog size="md" title="Dodaj artykuł" toggle={toggle} isOpen={isOpen}>
				<FormProvider {...methods}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<FieldsWrapper>
							<ImageUploader buttonStyle id="image" setValue={setValue} />
							<Input
								id="title"
								register={register}
								placeholder="Tytuł"
								fullWidth
							/>
							<Textarea
								id="description"
								register={register}
								placeholder="Opis"
								fullWidth
								rows={8}
							/>
							<Textarea
								id="summary"
								register={register}
								placeholder="Podsumowanie"
								fullWidth
								rows={8}
							/>
							<Button onClick={handleAddEmptyBlock}>Dodaj nową sekcję</Button>
						</FieldsWrapper>
						<BlockWrapper>
							{blocks.map((block, index) => (
								<Block
									key={block._id || index}
									index={index}
									register={register}
									setValue={setValue}
									data={block}
								/>
							))}
						</BlockWrapper>
						<SubmitWrapper>
							<Button type="submit" isLoading={isLoading}>
								Dodaj
							</Button>
						</SubmitWrapper>
					</Form>
				</FormProvider>
			</Dialog>
		</>
	);
};
