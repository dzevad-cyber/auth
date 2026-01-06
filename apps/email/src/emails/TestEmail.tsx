import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Section,
  Preview,
  Tailwind,
} from '@react-email/components';

const TestEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Welcome to our platform!</Preview>
        <Body className="bg-amber-400">
          <Container>
            <Section>
              <Text>Hi there,</Text>
              <Text>Welcome to our community! We are glad to have you.</Text>
            </Section>
            <Button href="http://localhost:3000">Go to</Button>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default TestEmail;
