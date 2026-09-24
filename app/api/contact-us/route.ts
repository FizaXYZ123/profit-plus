import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, AuthError } from "@/app/lib/auth";
import { isValidEmail, validatePhoneNumber } from "@/app/lib/validation";
import { sendContactUsEmail } from "@/app/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, referralCode, countryCode, phone, message } = body;

    // Required fields
    if (!name || !email || !countryCode || !phone || !message) {
      return NextResponse.json(
        {
          message: "name, email, countryCode, phone and message are required",
        },
        { status: 400 },
      );
    }

    // Validate email
    if (typeof email !== "string" || !isValidEmail(email.trim())) {
      return NextResponse.json(
        {
          message: "Please provide a valid email address",
        },
        { status: 400 },
      );
    }

    // Validate phone number
    const phoneValidation = validatePhoneNumber(
      String(countryCode).trim(),
      String(phone).trim(),
    );

    if (!phoneValidation.valid) {
      return NextResponse.json(
        {
          message: phoneValidation.message,
        },
        { status: 400 },
      );
    }

    const contact = await prisma.contactUs.create({
      data: {
        name: String(name).trim(),
        email: email.trim().toLowerCase(),

        referralCode: referralCode ? String(referralCode).trim() : null,

        countryCode: phoneValidation.countryCode!,
        phone: phoneValidation.phone!,

        message: String(message).trim(),
      },
    });

    try {
      await sendContactUsEmail({
        name,
        email,
        countryCode: phoneValidation.countryCode!,
        phone: phoneValidation.phone!,
        referralCode: referralCode || null,
        message,
      });
    } catch (error) {
      console.error("Failed to send contact us email:", error);
    }

    return NextResponse.json(
      {
        message: "Contact request submitted successfully",
        data: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          referralCode: contact.referralCode,
          countryCode: contact.countryCode,
          phone: contact.phone,
          message: contact.message,
          createdAt: contact.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error while creating contact request:", error);

    return NextResponse.json(
      {
        message: "Error while submitting contact request",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await requireAdmin(request);

    const contactRequests = await prisma.contactUs.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!contactRequests) {
      return NextResponse.json(
        {
          message: "contact requests not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        data: contactRequests,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: error.status },
      );
    }

    console.log(error);
    return NextResponse.json(
      {
        message: "error while fetching contact requests",
      },
      { status: 500 },
    );
  }
}
