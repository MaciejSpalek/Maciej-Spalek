import { useForm } from "react-hook-form";
import { Button, Input } from "components";
import { Container, FormWrapper, Heading } from "./Login.styled";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { getCookie, setCookie } from "helpers/cookies";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { URLS } from "helpers";


interface IFormInput {
  name: string;
  password: string;
}

export const Login = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { push } = useRouter();

  const token = getCookie("ms_auth_token");
  const logIn = async (payload) => axiosInstance.post(ENDPOINTS.LOGIN, payload);

  const loginMutation = useMutation({
    mutationFn: logIn,
  });

  const onSubmit = async (data: IFormInput) => {
    await loginMutation.mutate(data, {
      onSuccess: ({ data }) => {
        const { token } = data;
        setCookie("ms_auth_token", token, { date: new Date("2030-01-01") });
      },
    });
  };

  useEffect(() => {
    if (token) {
      push(URLS.admin.dashboard);
    }
  }, [token, push]);

  return (
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
  );
};
