/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Container, StyledInput, Wrapper } from "./Input.styled";
// import { ErrorMessage } from 'components';
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
      touched,
      register,
      ...props
    }: IInput,
    ref
  ) => {
    return (
      <Container fullWidth={fullWidth}  ref={ref}>
        <Wrapper isIcon={!!Icon}>
          {Icon && <Icon />}
          <StyledInput
            placeholder={placeholder}
            aria-label={placeholder}
            error={!!error}
            touched={!!touched}
            type={type}
            id={id}
            {...register(id)}
            {...props}
          />
        </Wrapper>
        {/* {touched && <ErrorMessage text={error} />} */}
      </Container>
    );
  }
);
