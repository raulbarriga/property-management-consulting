// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_CONTACT_FORM_KEY);

// import ContactFormEmail from "../../../emailTemplates/ContactFormEmail";

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  // check required fields are present
  if (!name || !email || !phone || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  console.log("from server: ", name, email, phone, message);

  try {
    const msg = {
      to: "rbar643@wgu.edu", // Change to your recipient
      from: process.env.VERIFIED_FROM_EMAIL, // Change to your verified sender
      reply_to: email,
      subject: "Sending with SendGrid is Fun",
      // text: "and easy to do anywhere, even with Node.js",
      html: `<strong>and easy to do anywhere, even with Node.js</strong>
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
      `,
    };

    await sgMail.send(msg);

    return Response.json(
      { message: "Email sent successfully" },
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

/*
// last error output:
 POST /api/contact 500 in 1009ms
 ✓ Compiled in 74ms
 ✓ Compiled /api/contact in 211ms (97 modules)
from server:  Raúl Barriga barrigaroofingco@gmail.com 6507013576 hello 123
Failed to send email: [
  {
    message: 'Authenticated user is not authorized to send mail',
    field: null,
    help: null
  }
]
 POST /api/contact 500 in 583ms
*/