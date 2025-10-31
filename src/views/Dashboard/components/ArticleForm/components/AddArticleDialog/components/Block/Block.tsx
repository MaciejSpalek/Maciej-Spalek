import { ImageUploader, Input, Select, Textarea } from "components";
import { ARTICLE_BLOCK_TYPE } from "helpers";
import type { BlockProps } from "./Block.model";
import { Container, FieldsWrapper, Iterator } from "./Block.styled";
import { getImage } from "./helpers";

export const Block = ({ index, register, setValue, data }: BlockProps) => {
	const blockTypes = Object.values(ARTICLE_BLOCK_TYPE).map((type) => ({
		label: type,
		value: type,
	}));

	const type = data?.type;

	const image = getImage({ data });
	const isCommonType = type === "common";

	return (
		<Container>
			<Iterator>Block no.{index + 1}</Iterator>
			<FieldsWrapper>
				<Select
					id={`blocks[${index}].type`}
					register={register}
					placeholder="Type"
					options={blockTypes}
					fullWidth
				/>
				{isCommonType && (
					<ImageUploader
						buttonStyle
						id={`blocks[${index}].image`}
						setValue={setValue}
						defaultValue={image}
					/>
				)}
				{isCommonType && (
					<Input
						id={`blocks[${index}].title`}
						register={register}
						placeholder="Title"
						fullWidth
					/>
				)}
				<Textarea
					id={`blocks[${index}].description`}
					register={register}
					placeholder="Description"
					fullWidth
					rows={8}
				/>
			</FieldsWrapper>
		</Container>
	);
};
