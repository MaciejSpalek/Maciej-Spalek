import { useQueryClient } from "@tanstack/react-query";
import { Button, Select } from "components";
import { generateArray, LS_KEYS, ls, QUERY_KEYS } from "helpers";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostTypes } from "types";
import { FieldWrapper, Form, Heading, Section } from "./Filters.styled";

const getOptions = () => {
	const allOption = { label: "All", value: "" };
	const restTypes = Object.values(PostTypes).map((type) => ({
		label: type,
		value: type,
	}));

	return [allOption, ...restTypes];
};

const limitOptions = generateArray(1, 10).map((limit) => ({
	label: (limit * 10).toString(),
	value: (limit * 10).toString(),
}));

export const Filters = () => {
	const lsPostFilters = ls.get(LS_KEYS.POST_LIST_FILTERS);
	const { type: lsType, limit: lsLimit } = lsPostFilters || {};

	const { register, handleSubmit, watch } = useForm({
		defaultValues: { type: lsType || "", limit: lsLimit || "10" },
	});
	const queryClient = useQueryClient();

	const selectOptions = getOptions();
	const type = watch("type");
	const limit = watch("limit");

	const refetchPosts = async () =>
		await queryClient.refetchQueries({
			queryKey: [QUERY_KEYS.POST.LIST({})],
		});

	const onSubmit = () => {
		refetchPosts();
	};

	useEffect(() => {
		ls.set({ key: LS_KEYS.POST_LIST_FILTERS, value: { type, limit } });
	}, [type, limit]);

	return (
		<Section>
			<Heading>Filters</Heading>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FieldWrapper>
					<Select
						id="type"
						options={selectOptions}
						register={register}
						name="type"
					/>
					<Select
						id="limit"
						options={limitOptions}
						register={register}
						name="limit"
					/>
				</FieldWrapper>
				<Button type="submit">Save</Button>
			</Form>
		</Section>
	);
};
