import React from 'react';
import { Tailwind } from '@react-email/components';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components';


type ContactFormEmailProps = {
  message: string,
  senderEmail: string
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Text className="leading-tight text-black text-3xl font-semibold">
                Message recieved from the portfolio website contact form
              </Text>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
