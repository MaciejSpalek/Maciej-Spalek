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
} from "./Contact.styled";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: SubmitHandler<IFormInput>) => {
    console.log(data);
  };

  return (
    <Container>
      <LeftWrapper>
        <Heading>Contact</Heading>
        {/* <ImageWrapper>
          <Image quality={100} loading="eager" src={logo} alt="logo" priority />
        </ImageWrapper> */}
        <CirclePhoto width={233} />
      </LeftWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </FormWrapper>
    </Container>
  );
};
