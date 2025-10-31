/* eslint-disable react/display-name */

import { forwardRef } from "react";
import type { ISelect } from "./Select.model";
import { Container, Option, StyledSelect, Wrapper } from "./Select.styled";

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
		ref,
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
	},
);
