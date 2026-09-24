import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { requireAdmin,AuthError } from "@/app/lib/auth";
import { isValidEmail } from "@/app/lib/validation";


export async function GET(request:NextRequest) {
  try {
    await requireAdmin(request);
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select:{
        id : true,
        name : true,
        email : true,
        role : true,
        createdAt : true,
        updatedAt : true
      }
    });
    if (!users) {
      return NextResponse.json(
        {
          message: "no users found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(users);
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: error.status },
      );
    }
    console.log("error while fetching the users", error);
    return NextResponse.json(
      {
        message: "error while fetching users",
      },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, password, role } = body;

    // Required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Name, email and password are required",
        },
        { status: 400 }
      );
    }

    // Validate email type
    if (typeof email !== "string") {
      return NextResponse.json(
        {
          message: "Email must be a valid string",
        },
        { status: 400 }
      );
    }

    // Normalize email
    const normalizedEmail = email.trim().toLowerCase();

    // Validate email format
    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        {
          message: "Please provide a valid email address",
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User with this email already exists",
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        data: user,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create user error:", error);

    return NextResponse.json(
      {
        message: "Failed to create user",
      },
      { status: 500 }
    );
  }
}
