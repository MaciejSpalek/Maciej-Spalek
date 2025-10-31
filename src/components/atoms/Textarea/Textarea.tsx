import type { ITextarea } from "./Textarea.model";
import {
	Container,
	ErrorMessage,
	StyledInput,
	Wrapper,
} from "./Textarea.styled";

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
