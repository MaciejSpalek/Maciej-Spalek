import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

import { Form, InputWrapper, BottomWrapper } from "./EditPostCell.styled";
import { Button, Dialog, ImageUploader, Input } from "components";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { IPost } from "types";
import { breakpoints } from "theme";

interface IEditPostCell {
  refetchList: () => void;
  data: IPost;
}

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
      <Dialog
        size="md"
        title="Edit post"
        toggle={toggle}
        isOpen={isOpen}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <ImageUploader
              id="image"
              setValue={setValue}
              defaultValue={data.image}
            />
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
