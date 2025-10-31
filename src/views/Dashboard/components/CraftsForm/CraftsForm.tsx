import { Button, ImageUploader, Input, Select } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import { type ICraft, PostTypes } from "types";
import type {
	ICraftsForm,
	IHandleOnRemoveSectionProps,
} from "./CraftForm.model";
import {
	Container,
	Form,
	Heading,
	InputWrapper,
	Section,
	SectionsRowWrapper,
	SubmitWrapper,
	TopWrapper,
} from "./CraftsForm.styled";

const types = Object.values(PostTypes).map((type) => ({
	label: type,
	value: type,
}));

export const CraftsForm = ({ defaultValues }: any) => {
	const [crafts, setCrafts] = useState<ICraft[]>(defaultValues.crafts);
	const { register, handleSubmit, setValue } = useForm<ICraftsForm>({
		defaultValues,
	});
	const [isLoading, setLoading] = useState(false);

	const onSubmit = async (data: ICraftsForm) => {
		setLoading(true);

		try {
			await axiosInstance.put(ENDPOINTS.CRAFT.UPDATE_OR_CREATE, data);
			setLoading(false);
		} catch {
			setLoading(false);
		}
	};

	const handleOnAddNewSection = () => {
		const newSection: ICraft = {
			image: "",
			href: "",
			title: "",
			type: "drawing",
		};

		setCrafts((prev) => [...prev, newSection]);
	};

	const handleOnRemoveSection = ({ title }: IHandleOnRemoveSectionProps) => {
		const newCrafts = crafts.filter(
			({ title: currentTitle }) => title !== currentTitle,
		);

		setCrafts(newCrafts);
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Section>
					<TopWrapper>
						<Heading>Crafts</Heading>
						<Button type="button" onClick={handleOnAddNewSection}>
							Add
						</Button>
					</TopWrapper>
					{crafts?.map(({ href, image, title, type }, index) => (
						<SectionsRowWrapper key={type}>
							<ImageUploader
								id={`crafts[${index}].image`}
								setValue={setValue}
								defaultValue={image}
								buttonStyle
							/>
							<InputWrapper>
								<Input
									id={`crafts[${index}].title`}
									defaultValue={title}
									register={register}
									placeholder="name"
									fullWidth
								/>
								<Input
									id={`crafts[${index}].href`}
									register={register}
									defaultValue={href}
									placeholder="href"
									fullWidth
								/>
								<Select
									id={`crafts[${index}].type`}
									register={register}
									placeholder="Type"
									options={types}
								/>
								<Button
									onClick={() => handleOnRemoveSection({ title })}
									type="button"
								>
									Remove
								</Button>
							</InputWrapper>
						</SectionsRowWrapper>
					))}
				</Section>
				<SubmitWrapper>
					<Button type="submit" isLoading={isLoading}>
						Submit
					</Button>
				</SubmitWrapper>
			</Form>
		</Container>
	);
};
