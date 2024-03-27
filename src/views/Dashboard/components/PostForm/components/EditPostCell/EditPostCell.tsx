import React, { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

import { Form, InputWrapper, BottomWrapper } from "./EditPostCell.styled";
import { Button, Dialog, ImageUploader, Input, Select } from "components";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { IPost, PostTypes } from "types";

interface IEditPostCell {
  refetchList: () => void;
  data: IPost;
}

const types = Object.values(PostTypes).map((type) => ({
  label: type,
  value: type,
}));

export const EditPostCell = ({ refetchList, data }: IEditPostCell) => {
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm<IPost>({
    defaultValues: data,
  });

  const { _id } = data;

  const toggle = () => setOpen((prev) => !prev);

  // const updatePost = async ({ id, values }) =>
  //   axiosInstance.put(ENDPOINTS.POST.UPDATE({ id }), values);
  // const updateMutation = useMutation({
  //   mutationFn: updatePost,
  //   onSuccess: () => {
  //     refetchList();
  //   },
  // });

  // const onSubmit = async (values: SubmitHandler<IPost>) => {
  //   try {
  //     updateMutation.mutate({ id, values });
  //   } catch {}
  // };

  const onSubmit = async (data: SubmitHandler<IPost>) => {
    setLoading(true);

    try {
      await axiosInstance.put(ENDPOINTS.POST.UPDATE({ id: _id }), data);
      setLoading(false);
      refetchList();
    } catch {
      setLoading(false);
    }
  };

  return (
    <>
      <Button size="small" onClick={toggle}>
        Edit
      </Button>
      <Dialog size="md" title="Edit post" toggle={toggle} isOpen={isOpen}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <ImageUploader
              id="image"
              setValue={setValue}
              defaultValue={data.image}
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
            />
            <Input
              id="description"
              register={register}
              placeholder="Description"
              fullWidth
            />
          </InputWrapper>
          <BottomWrapper>
            <Button type="submit" fullWidth>
              Edit
            </Button>
          </BottomWrapper>
        </Form>
      </Dialog>
    </>
  );
};
