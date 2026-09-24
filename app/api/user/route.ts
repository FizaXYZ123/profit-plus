import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!users) {
      return NextResponse.json(
        {
          message: "no users found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json({
      data: users,
    });
  } catch (error) {
    console.log("error while fetching the users", error);
    return NextResponse.json(
      {
        message: "error while fetching users",
      },
      { status: 500 },
    );
  }
}
