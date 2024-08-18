/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Container, StyledSelect, Wrapper, Option } from "./Select.styled";
// import { ErrorMessage } from 'components';
import { ISelect } from "./Select.model";

export const Select = forwardRef<HTMLDivElement, ISelect>(
  (
    {
      placeholder,
      fullWidth,
      error,
      id,
      touched,
      register,
      options,
      ...props
    }: ISelect,
    ref
  ) => {
    return (
      <Container fullWidth={fullWidth} ref={ref}>
        <Wrapper error={!!error} touched={!!touched}>
          <StyledSelect
            placeholder={placeholder}
            aria-label={placeholder}
            error={!!error}
            touched={!!touched}
            type="select"
            id={id}
            {...register(id)}
            {...props}
          >
            {options.map(({ label, value }) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </StyledSelect>
        </Wrapper>
        {/* {touched && <ErrorMessage text={error} />} */}
      </Container>
    );
  }
);
