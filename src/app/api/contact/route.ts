import { NextResponse } from "next/server";
import twilio from "twilio";
import nodemailer from "nodemailer";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: Request) {
  try {
    // 1️⃣ Read form data ONCE
    const { name, email, phone, message } = await req.json();

    // 2️⃣ SEND EMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: `Phone: ${phone}\n\n${message}`,
    });

    // 3️⃣ SEND WHATSAPP
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.TWILIO_WHATSAPP_TO!,
      body: `
📩 New Order Message

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}

💬 Message:
${message}
      `,
    });

    return NextResponse.json({
      message: "Email & WhatsApp sent successfully",
    });
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error.message);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
