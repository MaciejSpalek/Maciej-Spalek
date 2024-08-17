import { Button, Input } from "components";
import { Container, FormWrapper, Heading } from "./Login.styled";
import { useLogin } from "./useLogin";

export const Login = () => {
  const { register, handleOnSubmit, errors, isLoading } = useLogin();

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
        <Button
          type="submit"
          fullWidth
          isLoading={isLoading}
          disabled={isLoading}
        >
          Submit
        </Button>
      </FormWrapper>
    </Container>
  );
};
