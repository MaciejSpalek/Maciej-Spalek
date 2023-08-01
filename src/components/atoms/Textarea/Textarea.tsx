import React from "react";
import { Container, StyledInput, Wrapper } from "./Textarea.styled";
// import { ErrorMessage } from 'components';
import { ITextarea } from "./Textarea.model";

export const Textarea = ({
  type = "text",
  placeholder,
  fullWidth,
  error,
  id,
  onChange,
  touched,
  rows,
  register,
  ...props
}: ITextarea): JSX.Element => {
  return (
    <Container fullWidth={fullWidth}>
      <Wrapper error={!!error} touched={!!touched}>
        <StyledInput
          placeholder={placeholder}
          aria-label={placeholder}
          onChange={onChange}
          error={!!error}
          touched={!!touched}
          type={type}
          name={id}
          rows={rows}
          id={id}
          {...register(id)}
          {...props}
        />
      </Wrapper>
      {/* {touched && <ErrorMessage text={error} />} */}
    </Container>
  );
};
