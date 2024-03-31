import React, { useState } from "react";
import { Button, Dialog, ImageUploader, Input, Select } from "components";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import { useQueryClient } from "@tanstack/react-query";
import { ENDPOINTS } from "helpers/endpoints";
import { IPostCard, PostTypes } from "types";
import { QUERY_KEYS } from "helpers";
import { FieldsWrapper, SubmitWrapper, Form } from "./AddPostDialog.styled";

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
      queryKey: [QUERY_KEYS.POST.LIST({ })],
    });
  };

  const toggle = () => setOpen((prev) => !prev);

  const onSubmit = async (data) => {
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
      <Button onClick={toggle}>Add post</Button>
      <Dialog size="md" title="Add post" toggle={toggle} isOpen={isOpen}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldsWrapper>
            <ImageUploader buttonStyle id="image" setValue={setValue} />
            <Input
              id="description"
              register={register}
              placeholder="Description"
              fullWidth
            />
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
              fullWidth
            />
          </FieldsWrapper>
          <SubmitWrapper>
            <Button type="submit" fullWidth isLoading={isLoading}>
              Submit
            </Button>
          </SubmitWrapper>
        </Form>
      </Dialog>
    </>
  );
};
