import { Button, Dialog, ImageUploader, Input, Textarea } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import type { IArticle, IArticleCommonBlockType } from "types";
import { Block } from "../AddArticleDialog/components";
import {
	BlockWrapper,
	BottomWrapper,
	FieldsWrapper,
	Form,
} from "./EditArticleCell.styled";

interface IEditArticleCell {
	refetchList: () => void;
	data: IArticle;
}

export const EditArticleCell = ({ refetchList, data }: IEditArticleCell) => {
	const [isLoading, setLoading] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const formData = useForm<IArticle>({
		defaultValues: data,
	});

	const { register, handleSubmit, setValue, watch } = formData;

	const { _id, image } = data;

	const toggle = () => setOpen((prev) => !prev);

	const onSubmit = async (data: IArticle) => {
		setLoading(true);

		const convertedData = {
			...data,
			blocks: data.blocks.map(({ _id, ...rest }) => rest),
		};
		try {
			await axiosInstance.put(
				ENDPOINTS.ARTICLE.UPDATE({ id: _id }),
				convertedData,
			);

			setLoading(false);
			refetchList();
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
			<Button size="small" onClick={toggle}>
				Edit
			</Button>
			<Dialog size="md" title="Edit article" toggle={toggle} isOpen={isOpen}>
				<FormProvider {...formData}>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<FieldsWrapper>
							<ImageUploader
								buttonStyle
								id="image"
								setValue={setValue}
								defaultValue={image}
							/>
							<Input
								id="title"
								register={register}
								placeholder="Title"
								fullWidth
							/>
							<Textarea
								id="description"
								register={register}
								placeholder="Description"
								fullWidth
								rows={8}
							/>
							<Textarea
								id="summary"
								register={register}
								placeholder="Summary"
								fullWidth
								rows={8}
							/>
							<Button onClick={handleAddEmptyBlock}>Add new block</Button>
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
						<BottomWrapper>
							<Button type="submit" isLoading={isLoading}>
								Submit
							</Button>
						</BottomWrapper>
					</Form>
				</FormProvider>
			</Dialog>
		</>
	);
};
