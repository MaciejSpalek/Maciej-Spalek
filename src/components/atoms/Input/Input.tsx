/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Container, StyledInput, Wrapper, ErrorMessage } from "./Input.styled";
import { IInput } from "./Input.model";

export const Input = forwardRef(
  (
    {
      type = "text",
      placeholder,
      fullWidth,
      error,
      id,
      icon: Icon,
      register,
      ...props
    }: IInput,
    ref
  ) => {
    return (
      <Container fullWidth={fullWidth} ref={ref}>
        <Wrapper isIcon={!!Icon}>
          {Icon && <Icon />}
          <StyledInput
            placeholder={placeholder}
            aria-label={placeholder}
            error={!!error}
            type={type}
            id={id}
            {...register(id)}
            {...props}
          />
        </Wrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }
);
