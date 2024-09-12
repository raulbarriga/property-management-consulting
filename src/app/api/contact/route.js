// app/api/contact/route.js
// import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    console.log(name, email, phone, message);
    return Response.json({ name, email, phone, message });
  } catch (error) {
    console.error(error);
  }
}

/*
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
