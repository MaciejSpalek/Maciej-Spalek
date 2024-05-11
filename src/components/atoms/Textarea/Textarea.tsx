import React from "react";
import {
  Container,
  StyledInput,
  Wrapper,
  ErrorMessage,
} from "./Textarea.styled";
import { ITextarea } from "./Textarea.model";

export const Textarea = ({
  type = "text",
  placeholder,
  fullWidth,
  error,
  id,
  rows,
  register,
  ...props
}: ITextarea): JSX.Element => {
  return (
    <Container fullWidth={fullWidth}>
      <Wrapper error={!!error}>
        <StyledInput
          placeholder={placeholder}
          aria-label={placeholder}
          error={!!error}
          type={type}
          name={id}
          rows={rows}
          id={id}
          {...register(id)}
          {...props}
        />
      </Wrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};
