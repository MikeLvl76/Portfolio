"use server";

import nodemailer from "nodemailer";
import he from "he";

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

  const encode = (text: string) =>
    he.encode(text, { useNamedReferences: true });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_SERVER_USERNAME,
      subject: `Message from ${name}`,
      text: message,
      html: `
          <html>
            <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f4;padding:20px 0;">
                <tr>
                  <td align="center">
  
                    <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #eaeaea;">
  
                      <!-- Header -->
                      <tr>
                        <td style="padding:20px;background:#111827;color:#ffffff;">
                          <h2 style="margin:0;font-size:18px;">
                            New message from portfolio
                          </h2>
                        </td>
                      </tr>
  
                      <!-- Content -->
                      <tr>
                        <td style="padding:20px;color:#111827;">
  
                          <p style="margin:0 0 10px;">
                            <strong>Name:</strong> ${encode(name)}
                          </p>
  
                          <p style="margin:0 0 10px;">
                            <strong>Email:</strong> ${encode(email)}
                          </p>
  
                          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
  
                          <h3 style="margin:0 0 10px;font-size:16px;">
                            Message
                          </h3>
  
                          <div style="white-space:pre-wrap;font-size:14px;line-height:1.6;color:#333;">
                            ${encode(message)}
                          </div>
  
                        </td>
                      </tr>
  
                      <!-- Footer -->
                      <tr>
                        <td style="padding:15px;background:#f9fafb;font-size:12px;color:#6b7280;text-align:center;">
                          Sent from your portfolio contact form
                        </td>
                      </tr>
  
                    </table>
  
                  </td>
                </tr>
              </table>
            </body>
          </html>
          `,
    });

    return { message: "Successfully sent email", status: 202 };
  } catch (err) {
    console.error(err);
    return { message: "An error has occured", status: 400 };
  }
}
