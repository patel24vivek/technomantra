import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, services, message, honeypot } = body;

    // Spam Honeypot Check: if honeypot field is filled, silently discard spam
    if (honeypot) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // Validation: Name is required
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    // Validation: Email is required and must match valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    // Validation: Message is required
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief description of your project or inquiry." },
        { status: 400 }
      );
    }

    // Log the received verified inquiry for processing
    console.log("=== NEW TECHNOMANTRA INQUIRY ===");
    console.log({
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || "Not specified",
      phone: phone?.trim() || "Not specified",
      services: Array.isArray(services) ? services : [],
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Message received. Thanks for reaching out. We'll review your requirement and get back to you promptly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong while sending your message. Please try again." },
      { status: 500 }
    );
  }
}
