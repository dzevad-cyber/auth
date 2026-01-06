import { WelcomeEmail } from '@auth/email';
import { pretty, render } from '@react-email/render';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ETHEREAL_USERNAME,
    pass: process.env.ETHEREAL_PASSWORD,
  },
});

export const sendEmail = async (name: string) => {
  const welcomeHtml = await render(<WelcomeEmail name={name} />);
  console.log('[ nodemailer.tsx - 17 ] - html:', await pretty(welcomeHtml));

  const info = await transporter.sendMail({
    from: `${process.env.ETHEREAL_NAME} ${process.env.ETHEREAL_USERNAME}`,
    to: 'testUserOne@example.com',
    subject: 'test email 3',
    text: 'test text',
    html: welcomeHtml,
  });

  // console.log('[ nodemailer.ts - 22 ] - info:', info);
  // console.log('[ nodemailer.ts - 22 ] - Message sent:', info.messageId);
};
