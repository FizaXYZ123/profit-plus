import { prisma } from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { Prisma, userRole } from "@/app/generated/prisma/client";
import { AuthError,requireAdmin } from "@/app/lib/auth";
import { isValidEmail } from "@/app/lib/validation";


type Routecontext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: NextRequest, context: Routecontext) {
  try {
    await requireAdmin(request);
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          message: "id is required",
        },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        id,
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

    if (!user) {
      return NextResponse.json(
        {
          message: "user not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: error.status },
      );
    }
    console.error("error while fetching the user", error);
    return NextResponse.json(
      {
        message: "error while fetching the user",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest, context: Routecontext) {
  try {
    await requireAdmin(request);
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json(
        {
          message: "id is required",
        },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        {
          message: "user not found",
        },
        { status: 404 },
      );
    }

    const deleted = await prisma.user.delete({
      where: {
        id,
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
        message: "user deleted successfully",
        data: deleted,
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
    console.log("error while deleting user", error);
    return NextResponse.json(
      {
        message: "error while deleting user",
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: Routecontext
) {
  try {
    await requireAdmin(request);

    const { id } = await context.params;

    const body = await request.json();

    const { name, email, role } = body;

    // Check ID
    if (!id) {
      return NextResponse.json(
        {
          message: "id is required",
        },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        id,
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

    if (!existingUser) {
      return NextResponse.json(
        {
          message: "user not found",
        },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: Prisma.UserUpdateInput = {};

    // Name
    if (name !== undefined) {
      if (typeof name !== "string" || !name.trim()) {
        return NextResponse.json(
          {
            message: "Name cannot be empty",
          },
          { status: 400 }
        );
      }

      updateData.name = name.trim();
    }

    // Email
    if (email !== undefined) {
      if (typeof email !== "string" || !email.trim()) {
        return NextResponse.json(
          {
            message: "Email cannot be empty",
          },
          { status: 400 }
        );
      }

      const normalizedEmail = email.trim().toLowerCase();

      // Validate email
      if (!isValidEmail(normalizedEmail)) {
        return NextResponse.json(
          {
            message: "Please provide a valid email address",
          },
          { status: 400 }
        );
      }

      // Check if email belongs to another user
      if (normalizedEmail !== existingUser.email) {
        const emailExists = await prisma.user.findUnique({
          where: {
            email: normalizedEmail,
          },
        });

        if (emailExists) {
          return NextResponse.json(
            {
              message: "Email already belongs to another user",
            },
            { status: 409 }
          );
        }
      }

      updateData.email = normalizedEmail;
    }

    // Role
    if (role !== undefined) {
      if (!Object.values(userRole).includes(role)) {
        return NextResponse.json(
          {
            message: "Invalid role",
          },
          { status: 400 }
        );
      }

      updateData.role = role;
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: updateData,
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
        message: "user updated successfully",
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AuthError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: error.status }
      );
    }

    console.error("error while updating user:", error);

    return NextResponse.json(
      {
        message: "error while updating user",
      },
      { status: 500 }
    );
  }
}
