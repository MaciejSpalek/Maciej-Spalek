import { Button, Input } from "components";
import {
	BackButton,
	BottomWrapper,
	Container,
	FormWrapper,
	Heading,
	StyledLeftRectangleArrowIcon,
} from "./Login.styled";
import { useLogin } from "./useLogin";

export const Login = () => {
	const { register, handleOnSubmit, errors, isLoading, goBackToDashboard } =
		useLogin();

	return (
		<Container>
			<Heading>Panel admina</Heading>
			<FormWrapper onSubmit={handleOnSubmit}>
				<Input
					error={errors?.name?.message}
					register={register}
					fullWidth
					id="name"
					placeholder="Login"
				/>
				<Input
					error={errors?.password?.message}
					register={register}
					fullWidth
					id="password"
					placeholder="Hasło"
					type="password"
				/>
				<BottomWrapper>
					<BackButton type="button" onClick={goBackToDashboard}>
						<StyledLeftRectangleArrowIcon />
						Powrót
					</BackButton>
					<Button type="submit" isLoading={isLoading} disabled={isLoading}>
						Wyślij
					</Button>
				</BottomWrapper>
			</FormWrapper>
		</Container>
	);
};
