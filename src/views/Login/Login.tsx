import { Button, Input } from "components";
import {
  Container,
  FormWrapper,
  Heading,
  BottomWrapper,
  BackButton,
  StyledLeftRectangleArrowIcon,
} from "./Login.styled";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { register, handleOnSubmit, errors, isLoading, goBackToDashboard } =
    useLogin();

  return (
    <Container>
      <Heading>Admin panel</Heading>
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
          placeholder="Password"
          type="password"
        />
        <BottomWrapper>
          <BackButton type="button" onClick={goBackToDashboard}>
            <StyledLeftRectangleArrowIcon />
            Back
          </BackButton>
          <Button
            type="submit"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Submit
          </Button>
        </BottomWrapper>
      </FormWrapper>
    </Container>
  );
};
