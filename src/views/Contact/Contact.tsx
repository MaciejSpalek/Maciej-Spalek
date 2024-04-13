import { SubmitHandler, useForm } from "react-hook-form";
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

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { containerRef, formWrapperRef, leftWrapperRef } = useContact();
  const { register, handleSubmit } = useForm<IFormInput>();

  const sendEmail = async (payload) =>
    axiosInstance.post(ENDPOINTS.SEND_EMAIL, payload);

  const sendEmailMutation = useMutation({
    mutationFn: sendEmail,
  });

  const onSubmit = async (data: SubmitHandler<IFormInput>) => {
    await sendEmailMutation.mutate(data);
  };

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
        <Input register={register} fullWidth id="name" placeholder="Name" />
        <Input register={register} fullWidth id="email" placeholder="Email" />
        <Textarea
          register={register}
          fullWidth
          id="message"
          placeholder="Message"
          rows={5}
        />
        <ButtonWrapper>
          <Button type="submit" fullWidth>
            Send
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
};
