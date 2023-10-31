import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { name, email, number, city, message } = await request.json();
  const myemail = process.env.EMAIL;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: myemail,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: myemail,
      to: myemail,
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `<p><h3>Name:</h3> ${name} </p>
      <p><h3>Email:</h3> ${email} </p>
      <p><h3>Phone Number:</h3> ${number} </p>
      <p><h3>City:</h3> ${city} </p>
      <p><h3>Message:</h3> ${message} </p>`,
    });

    console.log("Message Sent:", mail.messageId);

    return new Response("Success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Your Message was not sent.", { status: 400 });
  }
};
