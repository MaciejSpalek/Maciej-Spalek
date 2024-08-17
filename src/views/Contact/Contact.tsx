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
} from "./Contact.styled";
import { useContact } from "./useContact";
import { axiosInstance } from "services/axiosClient";
import { ENDPOINTS } from "helpers/endpoints";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormValidationSchema } from "./validation";
import { useMessage } from "hooks";

export const Contact = () => {
  const { containerRef, formWrapperRef, leftWrapperRef } = useContact();
  const { message } = useMessage();

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
          <Title>{"Let's Collaborate!"}</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam, quis nostrud.
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
          <Button
            isLoading={isLoading}
            disabled={isLoading}
            type="submit"
            fullWidth
          >
            Send
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
};
