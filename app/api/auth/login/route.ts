import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required",
        },
        { status: 400 },
      );
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        createdAt:true,
        updatedAt:true
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "user with this email does not exist",
        },
        { status: 401 },
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Invalid password",
        },
        { status: 401 },
      );
    }

    // Check JWT secret
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "90d",
      },
    );


    return NextResponse.json(
      {
       jwt : token,
        data:user
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error while logging in:", error);

    return NextResponse.json(
      {
        message: "Error while logging in",
      },
      { status: 500 },
    );
  }
}

