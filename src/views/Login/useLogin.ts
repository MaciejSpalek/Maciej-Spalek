import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { COOKIES, getCookie, setCookie } from "helpers/cookies";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { URLS } from "helpers";
import { IForm } from "./Login.model";
import { useMessage } from "hooks";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IForm>();
  const { push } = useRouter();
  const { message } = useMessage();

  const token = getCookie(COOKIES.MS_AUTH_TOKEN);

  const logIn = async (payload: IForm) =>
    axiosInstance.post(ENDPOINTS.LOGIN, payload);

  const loginMutation = useMutation({
    mutationFn: logIn,
  });

  const isLoading = loginMutation.isPending;
  console.log({ errors });

  const onSubmit = (data: IForm) => {
    clearErrors();

    loginMutation.mutate(data, {
      onSuccess: ({ data }) => {
        const { token } = data;
        setCookie("ms_auth_token", token, { date: new Date("2030-01-01") });
        message.success("Successfully logged in");
      },
      onError: (error: any) => {
        const errors = error?.response?.data || {};
        const errorsArray: any[] = Object.entries(errors);

        console.log({ errors, errorsArray });
        errorsArray.forEach(([key, value]) => {
          setError(key, { message: value });
        });
      },
    });
  };

  const handleOnSubmit = handleSubmit(onSubmit);

  useEffect(() => {
    if (token) {
      push(URLS.admin.dashboard);
    }
  }, [token, push]);

  return { register, handleOnSubmit, errors, isLoading };
};
