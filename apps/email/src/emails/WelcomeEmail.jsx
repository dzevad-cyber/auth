import React from 'react';
import { Html, Head, Body, Container, Text, Button, Section, Preview, Tailwind, Hr, Img, } from '@react-email/components';
export const WelcomeEmail = ({ name }) => {
    return (<Html>
      <Head />
      <Tailwind>
        <Body className="bg-white h-full w-full">
          <Preview>
            The sales intelligence platform that helps you uncover qualified
            leads.
          </Preview>
          <Container className="mx-auto py-5 pb-12">
            <Img src={`https://placehold.co/600x400`} width="170" height="150" alt="auth-logo" className="mx-auto"/>
            <Text className="text-[16px] leading-[26px]">Hi {name},</Text>
            <Text className="text-[16px] leading-[26px]">
              Welcome to Koala, the sales intelligence platform that helps you
              uncover qualified leads and close deals faster.
            </Text>
            <Section className="text-center">
              <Button className="bg-[#5F51E8] rounded-[3px] text-white text-[16px] no-underline text-center block p-3" href="http://localhost:3000">
                Get started
              </Button>
            </Section>
            <Text className="text-[16px] leading-[26px]">
              Best,
              <br />
              The Koala team
            </Text>
            <Hr className="border-[#cccccc] my-5"/>
            <Text className="text-[#8898aa] text-[12px]">
              470 Noor Ave STE B #1148, South San Francisco, CA 94080
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>);
};
export default WelcomeEmail;
