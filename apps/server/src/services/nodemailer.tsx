import { WelcomeEmail } from '@auth/email';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'gaetano.schneider11@ethereal.email',
    pass: 'XXRr3MvH923QR9ZVjF',
  },
});

export const sendEmail = async () => {
  const welcomeHtml = await render(<WelcomeEmail />);

  const info = await transporter.sendMail({
    from: '"Gaetano Schneider" <gaetano.schneider11@ethereal.email>',
    to: 'testUserOne@example.com',
    subject: 'test email',
    text: 'test text',
    html: welcomeHtml,
  });

  console.log('[ nodemailer.ts - 22 ] - info:', info);
  console.log('[ nodemailer.ts - 22 ] - Message sent:', info.messageId);
};
