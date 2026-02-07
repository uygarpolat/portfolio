import { Resend } from "resend";
import * as dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.RESEND_API_KEY as string;
const RECEPIENT_EMAIL = process.env.RECEPIENT_EMAIL as string;

if (!API_KEY) {
  console.error("No RESEND_API_KEY found in .env file.");
  process.exit(1);
}

if (!RECEPIENT_EMAIL) {
  console.error("No RECEPIENT_EMAIL found in .env file.");
  process.exit(1);
}

const resend = new Resend(API_KEY);

async function testEmail() {
  try {
    const name = "Test User";
    const email = "test.user@example.com";
    const message = "Hello from the contact form test.";

    const data = await resend.emails.send({
      from: "Uygar Polat Portfolio <info@uygarpolat.com>",
      replyTo: email,
      to: [RECEPIENT_EMAIL],
      subject: `You have a new message on uygarpolat.com from ${name}`,
      html: `
        <h3>You have a new portfolio message!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (data.error) {
      console.error("Resend returned an error:", data.error);
    } else {
      console.log("Success! Email sent.");
      console.log("Message ID:", data.data?.id);
    }
  } catch (error) {
    console.error("Script failed:", error);
  }
}

testEmail();
