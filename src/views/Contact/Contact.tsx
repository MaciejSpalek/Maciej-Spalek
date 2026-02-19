import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Button, CirclePhoto, Input, Textarea } from "components";
import { ENDPOINTS } from "helpers/endpoints";
import { useIsMobileView, useMessage } from "hooks";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { axiosInstance } from "services/axiosClient";
import type { IFormInput } from "./Contact.model";
import {
	ButtonWrapper,
	Container,
	FormWrapper,
	Heading,
	LeftWrapper,
	Subtitle,
	TextWrapper,
	Title,
} from "./Contact.styled";
import { useContact } from "./useContact";
import { contactFormValidationSchema } from "./validation";

export const Contact = () => {
	const { containerRef, formWrapperRef, leftWrapperRef } = useContact();
	const { message } = useMessage();
	const isMobileView = useIsMobileView();
	const [verified, setVerified] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		resolver: yupResolver<any>(contactFormValidationSchema),
		mode: "onChange",
	});

	const sendEmail = async (payload: IFormInput) =>
		axiosInstance.post(ENDPOINTS.SEND_EMAIL, payload);

	const sendEmailMutation = useMutation({
		mutationFn: sendEmail,
		onSuccess: () => {
			reset();
			message.success("Wysłano poprawnie");
		},
		onError: () => {
			message.error("Coś poszło nie tak");
		},
	});

	const onSubmit = async (data: IFormInput) => {
		sendEmailMutation.mutate(data);
	};

	const isLoading = sendEmailMutation.isPending;

	return (
		<Container ref={containerRef}>
			<LeftWrapper ref={leftWrapperRef}>
				<Heading>Kontakt</Heading>
				<CirclePhoto width={233} />
			</LeftWrapper>
			<FormWrapper ref={formWrapperRef} onSubmit={handleSubmit(onSubmit)}>
				<TextWrapper>
					<Title>Formularz</Title>
					<Subtitle>
						Jeśli masz jakieś pytania lub jesteś zainteresowany którymkolwiek z
						obrazów, wyślij mi wiadomość prywatną na mój e-mail. Napisz, który
						konkretnie obraz Cię interesuję, a niebawem się odezwę!
					</Subtitle>
				</TextWrapper>
				<Input
					error={errors?.name?.message}
					register={register}
					fullWidth
					id="name"
					placeholder="Imię"
				/>
				<Input
					error={errors?.email?.message}
					register={register}
					fullWidth
					id="email"
					placeholder="E-mail"
				/>
				<Textarea
					register={register}
					fullWidth
					id="message"
					placeholder="Wiadomość"
					error={errors?.message?.message}
					rows={5}
				/>
				<ButtonWrapper>
					<ReCAPTCHA
						sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
						onChange={(value) => setVerified(!!value)}
						style={{
							transform: "scale(0.85)",
							transformOrigin: "0 0",
							border: "none",
						}}
					/>
					<Button
						isLoading={isLoading}
						disabled={isLoading || !verified}
						type="submit"
						fullWidth={!!isMobileView}
					>
						WYŚLIJ
					</Button>
				</ButtonWrapper>
			</FormWrapper>
		</Container>
	);
};
