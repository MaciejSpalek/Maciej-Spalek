import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { Form, Heading, Section } from "./Filters.styled";
import { Button, Select } from "components";
import { LS_KEYS, QUERY_KEYS } from "helpers";
import { PostTypes } from "types";

const getOptions = () => {
  const allOption = { label: "All", value: "" };
  const restTypes = Object.values(PostTypes).map((type) => ({
    label: type,
    value: type,
  }));

  return [allOption, ...restTypes];
};

export const Filters = () => {
  const lsType = localStorage.getItem(LS_KEYS.POST_LIST_TYPE);
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { type: lsType },
  });
  const queryClient = useQueryClient();

  const selectOptions = getOptions();
  const type = watch("type");

  const refetchUserData = async ({ type }) => {
    await queryClient.refetchQueries({
      queryKey: [QUERY_KEYS.POST.LIST({ type })],
    });
  };

  const onSubmit = () => {
    refetchUserData({ type: lsType });
  };

  useEffect(() => {
    if (null != type) {
      localStorage.setItem(LS_KEYS.POST_LIST_TYPE, type);
    }
  }, [type]);

  return (
    <Section>
      <Heading>Filters</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Select
          id="type"
          options={selectOptions}
          register={register}
          placeholder="Type"
          name="type"
        />
        <Button type="submit">Save</Button>
      </Form>
    </Section>
  );
};
