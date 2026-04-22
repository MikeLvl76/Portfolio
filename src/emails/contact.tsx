import {
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Html,
  Section,
  Tailwind,
} from "react-email";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function ContactEmail({ name, email, message }: Props) {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-gray-100 font-sans m-0 p-0">
          <Container className="max-w-150 mx-auto my-5 bg-white border border-gray-200 rounded-lg overflow-hidden">
            <Section className="bg-gray-900 text-white p-5">
              <Heading className="text-[18px] m-0">
                New message from portfolio
              </Heading>
            </Section>

            <Section className="p-5 text-gray-900">
              <Text className="mb-2">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="mb-2">
                <strong>Email:</strong> {email}
              </Text>
              <Hr className="my-5 border-gray-200" />
              <Heading className="text-[16px] mb-2">Message</Heading>
              <Text className="text-sm leading-6 text-gray-700 whitespace-pre-wrap">
                {message}
              </Text>
            </Section>

            <Section className="bg-gray-50 text-center text-xs text-gray-500 p-4">
              <Text>Sent from portfolio contact form</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
