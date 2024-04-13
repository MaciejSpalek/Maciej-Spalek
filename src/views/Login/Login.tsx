import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "components";
import { Container, FormWrapper, Heading } from "./Login.styled";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { setCookie } from "helpers/cookies";
import { Protected } from "layouts/Protected";

interface IFormInput {
  name: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const logIn = async (payload) => axiosInstance.post(ENDPOINTS.LOGIN, payload);

  const loginMutation = useMutation({
    mutationFn: logIn,
  });

  const onSubmit = async (data: SubmitHandler<IFormInput>) => {
    await loginMutation.mutate(data, {
      onSuccess: ({ data }) => {
        const { token } = data;
        setCookie("ms_auth_token", token, { date: new Date("2030-01-01") });
      },
    });
  };

  return (
    <Protected>
      <Container>
        <Heading>Admin panel</Heading>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <Input register={register} fullWidth id="name" placeholder="Login" />
          <Input
            register={register}
            fullWidth
            id="password"
            placeholder="Password"
            type="password"
          />
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </FormWrapper>
      </Container>
    </Protected>
  );
};
