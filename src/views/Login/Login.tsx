import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "components";
import { Container, FormWrapper, Heading } from "./Login.styled";

interface IFormInput {
  name: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: SubmitHandler<IFormInput>) => {
    console.log(data);
  };

  return (
    <Container>
      <Heading>Admin panel</Heading>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} fullWidth id="login" placeholder="Login" />
        <Input
          register={register}
          fullWidth
          id="password"
          placeholder="Password"
        />
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </FormWrapper>
    </Container>
  );
};
