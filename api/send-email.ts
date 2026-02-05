import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECEPIENT_EMAIL = process.env.RECEPIENT_EMAIL as string;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
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

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
