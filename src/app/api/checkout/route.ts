import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function POST(req: Request) {
  try {
    
    const { customer, cart } = await req.json();

    const orderText = cart
      .map(
        (item: any) =>
          `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`
      )
      .join("\n");

    const total = cart.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );

    // 📧 EMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${customer.name}" <${customer.email}>`,
      to: process.env.EMAIL_USER,
      subject: "🛒 New Sofa Order",
      text: `
Customer:
${customer.name}
${customer.phone}
${customer.email}
${customer.address}

Order:
${orderText}

Total: ₹${total}
      `,
    });

    // 📲 WHATSAPP
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM!,
      to: process.env.TWILIO_WHATSAPP_TO!,
      body: `
🛒 NEW ORDER

👤 ${customer.name}
📞 ${customer.phone}
📧 ${customer.email}

📦 Items:
${orderText}

💰 Total: ₹${total}
📍 Address:
${customer.address}
      `,
    });

    return NextResponse.json({
      message: "Order placed successfully!",
    });
  } catch (error: any) {
    console.error("CHECKOUT ERROR:", error.message);
    return NextResponse.json(
      { message: "Order failed" },
      { status: 500 }
    );
  }
}
