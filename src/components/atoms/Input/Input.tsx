import React from "react";
import { Container, StyledInput, Wrapper } from "./Input.styled";
// import { ErrorMessage } from 'components';
import { IInput } from "./Input.model";

export const Input = ({
  type = "text",
  placeholder,
  fullWidth,
  error,
  id,
  icon: Icon,
  touched,
  register,
  ...props
}: IInput): JSX.Element => {
  return (
    <Container fullWidth={fullWidth}>
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
};
