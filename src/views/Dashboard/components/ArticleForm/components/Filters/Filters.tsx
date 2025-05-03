import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import { FieldWrapper, Form, Heading, Section } from "./Filters.styled";
import { Button, Select } from "components";
import { generateArray, ls, LS_KEYS, QUERY_KEYS } from "helpers";

const limitOptions = generateArray(1, 10).map((limit) => ({
  label: (limit * 10).toString(),
  value: (limit * 10).toString(),
}));

export const Filters = () => {
  const lsArticleFilters = ls.get(LS_KEYS.ARTICLE_LIST_FILTERS);
  const { limit: lsLimit } = lsArticleFilters || {};

  const { register, handleSubmit, watch } = useForm({
    defaultValues: { limit: lsLimit || "10" },
  });
  const queryClient = useQueryClient();

  const limit = watch("limit");

  const refetchArticles = async () =>
    await queryClient.refetchQueries({
      queryKey: [QUERY_KEYS.ARTICLE.LIST({})],
    });

  const onSubmit = () => {
    refetchArticles();
  };

  useEffect(() => {
    ls.set({ key: LS_KEYS.ARTICLE_LIST_FILTERS, value: { limit } });
  }, [limit]);

  return (
    <Section>
      <Heading>Filters</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper>
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
