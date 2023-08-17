import { useForm } from "react-hook-form";
import { Button, Input, Textarea } from "components";
import {
  Container,
  ContactWrapper,
  LeftWrapper,
  FormWrapper,
  TextWrapper,
  ImageWrapper,
  Heading,
  Title,
  Subtitle,
} from "./Contact.styled";
import Image from "next/image";
import { logo } from "assets";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <ContactWrapper>
        <LeftWrapper>
          <Heading>
            Contact
          </Heading>
          <ImageWrapper>
            <Image
              quality={100}
              loading="eager"
              src={logo}
              alt="logo"
              priority
            />
          </ImageWrapper>
        </LeftWrapper>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <TextWrapper>
            <Title>Let's Collaborate!</Title>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam, quis nostrud.
            </Subtitle>
          </TextWrapper>
          <Input register={register} fullWidth id="name" placeholder="Name" />
          <Input
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
            rows={5}
          />
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </FormWrapper>
      </ContactWrapper>
    </Container>
  );
};
