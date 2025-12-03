import { ImageUploader, Input, Select, Textarea } from "components";
import { ARTICLE_BLOCK_TYPE } from "helpers";
import type { BlockProps } from "./Block.model";
import { Container, FieldsWrapper, Iterator } from "./Block.styled";
import { getImage } from "./helpers";

export const Block = ({ index, register, setValue, data }: BlockProps) => {
	const blockTypes = Object.values(ARTICLE_BLOCK_TYPE).map((type) => ({
		label: type === "common" ? "Zwykły" : "Wskazówka",
		value: type,
	}));

	const type = data?.type;

	const image = getImage({ data });
	const isCommonType = type === "common";

	return (
		<Container>
			<Iterator>Sekcja {index + 1}</Iterator>
			<FieldsWrapper>
				<Select
					id={`blocks[${index}].type`}
					register={register}
					placeholder="Typ"
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
						placeholder="Tytuł"
						fullWidth
					/>
				)}
				<Textarea
					id={`blocks[${index}].description`}
					register={register}
					placeholder="Opis"
					fullWidth
					rows={8}
				/>
			</FieldsWrapper>
		</Container>
	);
};
