import { useMutation } from "@tanstack/react-query";
import { URLS } from "helpers";
import { COOKIES, getCookie, setCookie } from "helpers/cookies";
import { ENDPOINTS } from "helpers/endpoints";
import { useMessage } from "hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import type { IForm } from "./Login.model";

interface ErrorResponse {
	response?: {
		data: { [key: string]: string };
	};
}

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

	const onSubmit = (data: IForm) => {
		clearErrors();

		loginMutation.mutate(data, {
			onSuccess: ({ data }) => {
				const { token } = data;
				setCookie(COOKIES.MS_AUTH_TOKEN, token, {
					date: new Date("2030-01-01"),
				});
				message.success("Successfully logged in");
			},
			onError: (error) => {
				const errors = (error as ErrorResponse)?.response?.data || {};
				const errorsArray = Object.entries(errors) as [keyof IForm, string][];

				errorsArray.forEach(([key, value]) => {
					setError(key, { message: value });
				});
			},
		});
	};

	const handleOnSubmit = handleSubmit(onSubmit);

	const goBackToDashboard = () => {
		push(URLS.home);
	};
	useEffect(() => {
		if (token) {
			push(URLS.admin.dashboard);
		}
	}, [token, push]);

	return { register, handleOnSubmit, errors, isLoading, goBackToDashboard };
};
