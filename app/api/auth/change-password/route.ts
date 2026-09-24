import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { AuthError, requireAuth } from "@/app/lib/auth";
import { prisma } from "@/app/lib/prisma";

export async function PUT(request: NextRequest) {
  try {
    const user = await requireAuth(request);

    const body = await request.json();

    const { currentPassword, newPassword } = body;

    // Validate required fields
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        {
          message: "Current password and new password are required",
        },
        { status: 400 },
      );
    }

    if (currentPassword === newPassword) {
      return NextResponse.json(
        {
          message: "Current password and new password cannot be same",
        },
        { status: 400 },
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        {
          message: "New password must be at least 6 characters",
        },
        { status: 400 },
      );
    }

    // Check current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          message: "Current password is incorrect",
        },
        { status: 400 },
      );
    }

    // Don't allow same password
    const isSamePassword = await bcrypt.compare(newPassword, user.password);

    if (isSamePassword) {
      return NextResponse.json(
        {
          success: false,
          message: "New password must be different from current password",
        },
        { status: 400 },
      );
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        message: "Password changed successfully",
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

    console.error("Error while changing password:", error);

    return NextResponse.json(
      {
        message: "Error while changing password",
      },
      { status: 500 },
    );
  }
}
