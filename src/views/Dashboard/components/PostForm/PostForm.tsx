import React, { useState } from "react";
import { Button, ImageUploader, Input, Select } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ENDPOINTS } from "helpers/endpoints";
import { IPostCard, PostTypes } from "types";
import {
  SubmitWrapper,
  InputWrapper,
  TopWrapper,
  Container,
  Heading,
  Section,
  Form,
} from "./PostForm.styled";
import { List } from "./components";
import { LS_KEYS, QUERY_KEYS } from "helpers";

const types = Object.values(PostTypes).map((type) => ({
  label: type,
  value: type,
}));

export const PostForm = () => {
  const { register, handleSubmit, setValue } = useForm<IPostCard>();
  const [isLoading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const lsType = localStorage.getItem(LS_KEYS.POST_LIST_TYPE);

  const refetchUserData = () => {
    queryClient.refetchQueries({
      queryKey: [QUERY_KEYS.POST.LIST({ type: lsType })],
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await axiosInstance.post(ENDPOINTS.POST.CREATE, data);
      setLoading(false);
      refetchUserData();
    } catch {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <TopWrapper>
            <Heading>Add post</Heading>
          </TopWrapper>
          <InputWrapper>
            <ImageUploader id="image" setValue={setValue} />
            <Input
              id="state"
              register={register}
              placeholder="State"
              fullWidth
            />
            <Select
              id="type"
              register={register}
              placeholder="Type"
              options={types}
            />
            <Input
              id="description"
              register={register}
              placeholder="Description"
              fullWidth
            />
          </InputWrapper>
          <SubmitWrapper>
            <Button type="submit" fullWidth isLoading={isLoading}>
              Submit
            </Button>
          </SubmitWrapper>
        </Section>
      </Form>
      <List />
    </Container>
  );
};
