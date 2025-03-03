import React from "react";
import { ImageUploader, Input, Select, Textarea } from "components";

import { FieldsWrapper, Container } from "./Block.styled";
import { ARTICLE_BLOCK_TYPE } from "helpers";

export const Block = ({ index, register, setValue }) => {
  const blockTypes = Object.values(ARTICLE_BLOCK_TYPE).map((type) => ({
    label: type,
    value: type,
  }));

  return (
    <Container>
      <p>{index + 1}.Block</p>
      <FieldsWrapper>
        <Select
          id={`blocks[${index}].type`}
          register={register}
          placeholder="Type"
          options={blockTypes}
          fullWidth
        />
        <ImageUploader buttonStyle id={`blocks[${index}].image`} setValue={setValue} />
        <Input id={`blocks[${index}].title`} register={register} placeholder="Title" fullWidth />
        <Textarea
          id={`blocks[${index}].description`}
          register={register}
          placeholder="Description"
          fullWidth
        />
      </FieldsWrapper>
    </Container>
  );
};
