import { Button, ImageUploader, Textarea } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import type { IHome } from "types";
import {
	AboutRowWrapper,
	Container,
	Form,
	HeaderRowWrapper,
	Heading,
	Section,
	SubmitWrapper,
} from "./HomePageForm.styled";

interface IFormInput {
	home: IHome;
}

export const HomePageForm = ({ defaultValues }: any) => {
	const { register, handleSubmit, setValue, getValues } = useForm<IFormInput>({
		defaultValues,
	});
	const [isLoading, setLoading] = useState(false);

	const onSubmit = async (data: IFormInput) => {
		setLoading(true);
		try {
			await axiosInstance.put(ENDPOINTS.HOME.UPDATE_OR_CREATE, data);

			setLoading(false);
		} catch {
			setLoading(false);
		}
	};

	const { home } = getValues();

	return (
		<Container>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Section>
					<Heading>Header</Heading>
					<HeaderRowWrapper>
						<ImageUploader
							id="home.header.first_photo"
							setValue={setValue}
							defaultValue={home?.header?.first_photo}
						/>
						<ImageUploader
							id="home.header.second_photo"
							setValue={setValue}
							defaultValue={home?.header?.second_photo}
						/>
						<Textarea
							register={register}
							fullWidth
							id="home.header.description"
							placeholder="description"
						/>
					</HeaderRowWrapper>
					<Heading>About me</Heading>
					<AboutRowWrapper>
						<ImageUploader
							id="home.about.photo"
							setValue={setValue}
							defaultValue={home?.about?.photo}
						/>
						<Textarea
							register={register}
							fullWidth
							id="home.about.description"
							placeholder="description"
						/>
					</AboutRowWrapper>
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
