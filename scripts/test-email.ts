import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.RESEND_API_KEY as string;
const RECEPIENT_EMAIL = "info@uygarpolat.com";

if (!API_KEY) {
  console.error("No RESEND_API_KEY found in .env file.");
  process.exit(1);
}

const resend = new Resend(API_KEY);

async function testEmail() {
  try {
    const data = await resend.emails.send({
      from: "Portfolio Test <onboarding@resend.dev>",
      to: [RECEPIENT_EMAIL],
      subject: "Test Email from Resend",
      html: "<p>It works! Your API key is valid and Resend is ready.</p>",
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
