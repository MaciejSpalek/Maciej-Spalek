import { useQueryClient } from "@tanstack/react-query";
import { Button, Dialog, ImageUploader, Input, Select } from "components";
import { QUERY_KEYS } from "helpers";
import { ENDPOINTS } from "helpers/endpoints";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import { type IPost, type IPostCard, PostTypes } from "types";
import { FieldsWrapper, Form, SubmitWrapper } from "./AddPostDialog.styled";

const types = Object.values(PostTypes).map((type) => ({
	label: type,
	value: type,
}));

export const AddPostDialog = () => {
	const { register, handleSubmit, setValue } = useForm<IPostCard>();
	const [isLoading, setLoading] = useState(false);
	const [isOpen, setOpen] = useState(false);
	const queryClient = useQueryClient();

	const refetchPostList = () => {
		queryClient.refetchQueries({
			queryKey: [QUERY_KEYS.POST.LIST({})],
		});
	};

	const toggle = () => setOpen((prev) => !prev);

	const onSubmit = async (data: IPost) => {
		setLoading(true);

		try {
			await axiosInstance.post(ENDPOINTS.POST.CREATE, data);
			setLoading(false);
			refetchPostList();
		} catch {
			setLoading(false);
		}
	};

	return (
		<>
			<Button onClick={toggle}>Nowy post</Button>
			<Dialog size="md" title="Nowy post" toggle={toggle} isOpen={isOpen}>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<FieldsWrapper>
						<ImageUploader buttonStyle id="image" setValue={setValue} />
						<Input
							id="description"
							register={register}
							placeholder="Opis"
							fullWidth
						/>
						<Input
							id="state"
							register={register}
							placeholder="Stan"
							fullWidth
						/>
						<Select
							id="type"
							register={register}
							placeholder="Typ"
							options={types}
							fullWidth
						/>
						<Input id="created_at" register={register} fullWidth type="date" />
					</FieldsWrapper>
					<SubmitWrapper>
						<Button type="submit" isLoading={isLoading}>
							Dodaj
						</Button>
					</SubmitWrapper>
				</Form>
			</Dialog>
		</>
	);
};
