import { useForm } from "react-hook-form";
import { Button, CirclePhoto, Input, Textarea } from "components";
import {
  Container,
  LeftWrapper,
  FormWrapper,
  TextWrapper,
  Heading,
  Title,
  Subtitle,
  ButtonWrapper,
  ReCaptchaWrapper,
} from "./Contact.styled";
import { useContact } from "./useContact";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormValidationSchema } from "./validation";
import { useIsMobileView, useMessage } from "hooks";
import { IFormInput } from "./Contact.model";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

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
      message.success("Successfully sent");
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  const onSubmit = async (data: IFormInput) => {
    sendEmailMutation.mutate(data);
  };

  const isLoading = sendEmailMutation.isPending;

  return (
    <Container ref={containerRef}>
      <LeftWrapper ref={leftWrapperRef}>
        <Heading>Contact</Heading>
        <CirclePhoto width={233} />
      </LeftWrapper>
      <FormWrapper ref={formWrapperRef} onSubmit={handleSubmit(onSubmit)}>
        <TextWrapper>
          <Title>Let's talk!</Title>
          <Subtitle>
            If you have any questions or you're interested in any of the
            artworks, feel free to send me a private message — I'd love to hear
            from you!
          </Subtitle>
        </TextWrapper>
        <Input
          error={errors?.name?.message}
          register={register}
          fullWidth
          id="name"
          placeholder="Name"
        />
        <Input
          error={errors?.email?.message}
          register={register}
          fullWidth
          id="email"
          placeholder="Email"
        />
        <Textarea
          register={register}
          fullWidth
          id="message"
          placeholder="Message"
          error={errors?.message?.message}
          rows={5}
        />
        <ButtonWrapper>
          <ReCAPTCHA
            sitekey="6Ld1-IwqAAAAABxmp4_e3OFYorcmwtvEDNO0dcZc"
            onChange={(value) => setVerified(!!value)}
            style={{ transform: 'scale(0.85)', transformOrigin: '0 0', border: 'none'}}
          />
          <Button
            isLoading={isLoading}
            disabled={isLoading || !verified}
            type="submit"
            fullWidth={!!isMobileView}
          >
            Send
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
};
