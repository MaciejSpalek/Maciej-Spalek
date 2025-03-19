import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  InputWrapper,
  BottomWrapper,
  FieldsWrapper,
  BlockWrapper,
} from "./EditArticleCell.styled";
import {
  Button,
  Dialog,
  ImageUploader,
  Input,
  Select,
  Textarea,
} from "components";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { IArticle, IArticleCommonBlockType, IPost, PostTypes } from "types";
import { Block } from "../AddArticleDialog/components";

interface IEditArticleCell {
  refetchList: () => void;
  data: IArticle;
}

const types = Object.values(PostTypes).map((type) => ({
  label: type,
  value: type,
}));

export const EditArticleCell = ({ refetchList, data }: IEditArticleCell) => {
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<IArticle>({
    defaultValues: data,
  });

  const { _id } = data;

  const toggle = () => setOpen((prev) => !prev);

  const onSubmit = async (data: IArticle) => {
    setLoading(true);

    try {
      await axiosInstance.put(ENDPOINTS.ARTICLE.UPDATE({ id: _id }), data);
      setLoading(false);
      refetchList();
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
      <Button size="small" onClick={toggle}>
        Edit
      </Button>
      <Dialog size="md" title="Edit article" toggle={toggle} isOpen={isOpen}>
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
              rows={8}
            />
            <Textarea
              id="summary"
              register={register}
              placeholder="Summary"
              fullWidth
              rows={8}
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
          <BottomWrapper>
            <Button type="submit" isLoading={isLoading}>
              Submit
            </Button>
          </BottomWrapper>
        </Form>
      </Dialog>
    </>
  );
};
