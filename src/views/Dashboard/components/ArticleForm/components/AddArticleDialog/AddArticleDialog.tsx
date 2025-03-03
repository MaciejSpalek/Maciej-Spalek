import React, { useState } from "react";
import { Button, Dialog, ImageUploader, Input, Textarea } from "components";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import { useQueryClient } from "@tanstack/react-query";
import { ENDPOINTS } from "helpers/endpoints";
import {
  IArticle,
  IArticleCommonBlockType,
} from "types";
import { QUERY_KEYS } from "helpers";
import {
  FieldsWrapper,
  SubmitWrapper,
  BlockWrapper,
  Form,
} from "./AddArticleDialog.styled";
import { Block } from "./components/Block";
import { convertPaylaod } from "./helpers";

export const AddArticleDialog = () => {
  const { register, handleSubmit, setValue, getValues, watch } =
    useForm<IArticle>();
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const refetchArticleList = () => {
    queryClient.refetchQueries({
      queryKey: [QUERY_KEYS.ARTICLE.LIST],
    });
  };

  const toggle = () => setOpen((prev) => !prev);

  const onSubmit = async (data: IArticle) => {
    setLoading(true);

    const convertedPayload = convertPaylaod({ data });

    try {
      await axiosInstance.post(ENDPOINTS.ARTICLE.CREATE, convertedPayload);
      setLoading(false);
      refetchArticleList();
    } catch {
      setLoading(false);
    }
  };

  const handleAddEmptyBlock = () => {
    const blocks = watch("blocks") || [];
    const initialBlock: IArticleCommonBlockType = {
      description: "",
      image: "",
      title: "",
      type: "common",
      _id: "",
    };

    setValue("blocks", [
      ...(blocks as IArticleCommonBlockType[]),
      initialBlock,
    ]);
  };

  const blocks = watch("blocks") || [];
  return (
    <>
      <Button onClick={toggle}>Add article</Button>
      <Dialog size="md" title="Add article" toggle={toggle} isOpen={isOpen}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FieldsWrapper>
            <ImageUploader buttonStyle id="image" setValue={setValue} />
            <Input
              id="title"
              register={register}
              placeholder="Title"
              fullWidth
            />
            <Textarea
              id="description"
              register={register}
              placeholder="Description"
              fullWidth
            />
            <Textarea
              id="summary"
              register={register}
              placeholder="Summary"
              fullWidth
            />
            <Button onClick={handleAddEmptyBlock}>Add new block</Button>
          </FieldsWrapper>
          <BlockWrapper>
            {blocks.map((_, index) => (
              <Block
                key={index}
                index={index}
                register={register}
                setValue={setValue}
              />
            ))}
          </BlockWrapper>
          <SubmitWrapper>
            <Button type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </SubmitWrapper>
        </Form>
      </Dialog>
    </>
  );
};
