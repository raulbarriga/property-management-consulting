import { Resend } from "resend";

import ContactFormEmail from "../../../emailTemplates/ContactFormEmail";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  // check required fields are present
  if (!name || !email || !phone || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  console.log("from server: ", name, email, phone, message);

  const resend = new Resend(process.env.RESEND_API_EMAIL_KEY);

  try {
    const { data, error } = await resend.emails.send({
      to: process.env.VERIFIED_FROM_EMAIL, // where you receive the form submission
      from: process.env.VERIFIED_FROM_EMAIL,
      subject: "Sending From Contact Us Form",
      reply_to: email, // Allows to easily reply to the user's email directly
      react: ContactFormEmail({ name, email, phone, message }),
    });

    if (error) {
      return Response.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return Response.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Failed to send email:",
      error.response ? error.response.body.errors : error
    );

    return Response.json(
      {
        message: "Failed to send email",
        error: error.response ? error.response.body.errors : error,
      },
      { status: 500 }
    );
  }
}