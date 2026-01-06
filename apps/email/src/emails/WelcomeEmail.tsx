import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
  Section,
  Preview,
  Link,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

export const WelcomeEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Welcome to our platform!</Preview>
        <Body className="bg-amber-400">
          <Container>
            <Section>
              <Text>Hi user,</Text>
              <Text>Welcome to our community! We are glad to have you.</Text>
            </Section>
            <Button>Hello</Button>
            <Link href="http://localhost:3000">Go to</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
