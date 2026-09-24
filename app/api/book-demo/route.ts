import { requireAdmin, AuthError } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import { isValidEmail, validatePhoneNumber } from "@/app/lib/validation";
import { sendDemoRequestEmail } from "@/app/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, countryCode, phone, message } = body;

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

    const demo = await prisma.bookDemo.create({
      data: {
        name: String(name).trim(),
        email: email.trim().toLowerCase(),

        countryCode: phoneValidation.countryCode!,
        phone: phoneValidation.phone!,

        message: String(message).trim(),
      },
    });

    try {
      await sendDemoRequestEmail({
        name,
        email,
        countryCode: phoneValidation.countryCode!,
        phone: phoneValidation.phone!,
        message,
      });
    } catch (error) {
      console.error("Failed to send demo request email:", error);
    }

    return NextResponse.json(
      {
        message: "Demo request submitted successfully",
        data: {
          id: demo.id,
          name: demo.name,
          email: demo.email,
          countryCode: demo.countryCode,
          phone: demo.phone,
          message: demo.message,
          createdAt: demo.createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error while creating book demo:", error);

    return NextResponse.json(
      {
        message: "Error while submitting demo request",
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await requireAdmin(request);

    const demoRequests = await prisma.bookDemo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!demoRequests) {
      return NextResponse.json(
        {
          message: "demo requests not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        data: demoRequests,
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
        message: "error while fetching demo requests",
      },
      { status: 500 },
    );
  }
}
