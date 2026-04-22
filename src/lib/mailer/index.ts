"use server";

import nodemailer from "nodemailer";
import { render } from "react-email";
import ContactEmail from "@/emails/contact";
import { createElement } from "react";

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_SERVER_USERNAME,
    pass: process.env.SMTP_SERVER_PASSWORD,
  },
});

type SendParams = {
  name: string;
  email: string;
  message: string;
};

export async function send({ name, email, message }: SendParams) {
  try {
    await transporter.verify();
  } catch (error) {
    throw Error(`Verification failed: ${error}`);
  }

  const html = await render(
    createElement(ContactEmail, { name, email, message })
  );

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_SERVER_USERNAME,
      subject: `Message from ${name}`,
      text: message,
      html,
    });

    return { message: "Successfully sent email", status: 202 };
  } catch (err) {
    console.error(err);
    return { message: "An error has occured", status: 400 };
  }
}
