import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/prisma";

export class AuthError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "AuthError";
    this.status = status;
  }
}

type JwtPayload = {
  userId: string;
  email?: string;
  role?: "USER" | "ADMIN";
};

export async function requireAdmin(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  // No Authorization header
  if (!authHeader) {
    throw new AuthError(
      "Unauthorized: No token provided",
      401,
    );
  }

  const [type, token] = authHeader.split(" ");

  // Invalid Authorization format
  if (type !== "Bearer" || !token) {
    throw new AuthError(
      "Unauthorized: Invalid token format",
      401,
    );
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new AuthError(
      "Internal Server Error: JWT_SECRET is not configured",
      500,
    );
  }

  let decoded: JwtPayload;

  try {
    decoded = jwt.verify(token, secret) as JwtPayload;
  } catch {
    throw new AuthError(
      "Unauthorized: Invalid or expired token",
      401,
    );
  }

  if (!decoded.userId) {
    throw new AuthError(
      "Unauthorized: Invalid token payload",
      401,
    );
  }

  // Get the current user from database
  const user = await prisma.user.findUnique({
    where: {
      id: decoded.userId,
    },
    select: {
      id: true,
      role: true,
      email: true,
      name: true,
    },
  });

  if (!user) {
    throw new AuthError(
      "Unauthorized: User not found",
      401,
    );
  }

  // Check current database role
  if (user.role !== "ADMIN") {
    throw new AuthError(
      "Forbidden: Admin access required",
      403,
    );
  }

  return user;
}

export async function requireAuth(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    throw new AuthError(
      "Unauthorized: No token provided",
      401,
    );
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    throw new AuthError(
      "Unauthorized: Invalid token format",
      401,
    );
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new AuthError(
      "Internal Server Error: JWT_SECRET is not configured",
      500,
    );
  }

  let decoded: JwtPayload;

  try {
    decoded = jwt.verify(token, secret) as JwtPayload;
  } catch {
    throw new AuthError(
      "Unauthorized: Invalid or expired token",
      401,
    );
  }

  if (!decoded.userId) {
    throw new AuthError(
      "Unauthorized: Invalid token payload",
      401,
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      id: decoded.userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      password: true,
    },
  });

  if (!user) {
    throw new AuthError(
      "Unauthorized: User not found",
      401,
    );
  }

  return user;
}