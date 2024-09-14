// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// import sgMail from "@sendgrid/mail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_EMAIL_KEY);

export async function POST(req, res) {
  try {
    const { name, email, phone, message } = await req.json();
    console.log("from server: ", name, email, phone, message);

    const { data, error } = await resend.emails.send({
      to: process.env.VERIFIED_FROM_EMAIL, // where you receive the form submission
      // to: "raulb@raulbarriga.com", 
      from: process.env.VERIFIED_FROM_EMAIL, 
      // from: `${name} <${email}>`, // outputs to: 'Acme <onboarding@resend.dev>'
      subject: "Sending From Contact Us Form",
      reply_to: email, // Allows to easily reply to the user's email directly
      html: `
      Greetings from ${name}.
      <ul>
      <li>Phone: ${phone}</li>
      <li>email: ${email}</li>
      <li>
      <p>Message: ${message}</p>
      </li>
      </ul>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    console.log("No Error");

    // return new Response(JSON.stringify({ message: "Success" }), {
    //   status: 200,
    //   headers: { "Content-Type": "application/json" },
    // });
    return Response.json(data);
  } catch (error) {
    console.error("Failed to send email:", error.response.body.errors);

    // return new Response(JSON.stringify({ error: "Failed to send email" }), {
    //   status: 500,
    //   headers: { "Content-Type": "application/json" },
    // });
    return Response.json({ error }, { status: 500 });
  }
}

/*
try {
    const { name, email, phone, message } = await request.json();
    // console.log(name, email, phone, message);
    return Response.json({ name, email, phone, message });
  } catch (error) {
    console.error(error);
  }

try {
    const { name, email, phone, message } = await request.json();

    // Configure your SMTP server credentials
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or use another service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or an app-specific password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // Where you want to receive the form submissions
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
*/
