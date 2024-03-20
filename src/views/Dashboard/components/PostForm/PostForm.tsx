import React, { useState } from "react";
import { Button, ImageUploader, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { IPostCard } from "types";
import {
  SubmitWrapper,
  InputWrapper,
  TopWrapper,
  Container,
  Heading,
  Section,
  Form,
} from "./PostForm.styled";
import { useQuery } from "@tanstack/react-query";
import { List } from "./components";

export const PostForm = () => {
  const getPosts = async (): Promise<{ data: IPostCard[] }> =>
    await axiosInstance.get(ENDPOINTS.POST.LIST);

  const { data, isFetching } = useQuery<{ data: IPostCard[] }>({
    queryKey: ["POSTS"],
    queryFn: getPosts,
  });

  const { register, handleSubmit, setValue } = useForm<IPostCard>();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: SubmitHandler<IPostCard>) => {
    setLoading(true);

    try {
      await axiosInstance.post(ENDPOINTS.POST.CREATE, data);
      setLoading(false);
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
            <Input id="type" register={register} placeholder="Type" fullWidth />
            <Input
              id="state"
              register={register}
              placeholder="State"
              fullWidth
            />
            <Input
              id="price"
              register={register}
              placeholder="Price"
              fullWidth
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
      <List list={data?.data} isFetching={isFetching} />
    </Container>
  );
};
