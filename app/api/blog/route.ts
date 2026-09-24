import { prisma } from "@/app/lib/prisma";
import { AuthError, requireAdmin } from "@/app/lib/auth";
import { NextRequest, NextResponse } from "next/server";

function formatBlogImage<T extends {
  featuredImage: string | null;
  updatedAt: Date;
}>(blog: T) {
  return {
    ...blog,
    featuredImage: blog.featuredImage?.startsWith("/api/blog/")
      ? `${blog.featuredImage.split("?")[0]}?v=${new Date(
          blog.updatedAt,
        ).getTime()}`
      : blog.featuredImage,
  };
}

// GET - Find all blogs
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        date: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        featuredImage: true,
        date: true,
        shortDescription: true,
        content: true,
        metaTitle: true,
        metaDescription: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      data: blogs.map(formatBlogImage),
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch blogs",
      },
      { status: 500 },
    );
  }
}

// POST - Create blog
export async function POST(request: NextRequest) {
  try {
    await requireAdmin(request);

    const formData = await request.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const featuredImage = formData.get("featuredImage");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const slug = formData.get("slug");
    const date = formData.get("date");
    const shortDescription = formData.get("shortDescription");

    // Required fields
    if (typeof title !== "string" || !title.trim()) {
      return NextResponse.json(
        { message: "title is required" },
        { status: 400 },
      );
    }

    if (typeof content !== "string" || !content.trim()) {
      return NextResponse.json(
        { message: "content is required" },
        { status: 400 },
      );
    }

    if (typeof slug !== "string" || !slug.trim()) {
      return NextResponse.json(
        { message: "slug is required" },
        { status: 400 },
      );
    }

    if (typeof date !== "string" || !date.trim()) {
      return NextResponse.json(
        { message: "date is required" },
        { status: 400 },
      );
    }

    if (
      typeof shortDescription !== "string" ||
      !shortDescription.trim()
    ) {
      return NextResponse.json(
        { message: "shortDescription is required" },
        { status: 400 },
      );
    }

    // Featured image is required
    if (!(featuredImage instanceof File) || featuredImage.size === 0) {
      return NextResponse.json(
        {
          message: "featuredImage is required",
        },
        { status: 400 },
      );
    }

    // Validate slug
    const formattedSlug = slug.trim().toLowerCase();

    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

    if (!slugRegex.test(formattedSlug)) {
      return NextResponse.json(
        {
          message:
            "slug can only contain lowercase letters, numbers and hyphens",
        },
        { status: 400 },
      );
    }

    // Check duplicate slug
    const existingBlog = await prisma.blog.findUnique({
      where: {
        slug: formattedSlug,
      },
    });

    if (existingBlog) {
      return NextResponse.json(
        {
          message: "Blog with this slug already exists",
        },
        { status: 409 },
      );
    }

    // Validate date
    const dateStr = date.trim();
    const dateOnly = dateStr.includes("T")
      ? dateStr.split("T")[0]
      : dateStr;

    const parsedDate = new Date(`${dateOnly}T00:00:00.000Z`);

    if (Number.isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        {
          message: "Invalid date",
        },
        { status: 400 },
      );
    }

    // Validate image type
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
    ];

    if (!allowedTypes.includes(featuredImage.type)) {
      return NextResponse.json(
        {
          message:
            "Only JPEG, PNG, WebP and GIF images are allowed",
        },
        { status: 400 },
      );
    }

    // Validate image size - 10MB
    const maxFileSize = 10 * 1024 * 1024;

    if (featuredImage.size > maxFileSize) {
      return NextResponse.json(
        {
          message: "Image size exceeds 10MB limit",
        },
        { status: 400 },
      );
    }

    // Convert image to Uint8Array
    const bytes = await featuredImage.arrayBuffer();
    const imageData = new Uint8Array(bytes);

    // Image endpoint
    const imageUrl = `/api/blog/${formattedSlug}/image`;

    // Create blog
    const blog = await prisma.blog.create({
      data: {
        title: title.trim(),
        content: content.trim(),

        featuredImage: imageUrl,
        featuredImageData: imageData,
        featuredImageType: featuredImage.type,

        metaTitle:
          typeof metaTitle === "string" && metaTitle.trim()
            ? metaTitle.trim()
            : null,

        metaDescription:
          typeof metaDescription === "string" &&
          metaDescription.trim()
            ? metaDescription.trim()
            : null,

        slug: formattedSlug,

        date: parsedDate,

        shortDescription: shortDescription.trim(),
      },

      select: {
        id: true,
        title: true,
        slug: true,
        featuredImage: true,
        date: true,
        shortDescription: true,
        content: true,
        metaTitle: true,
        metaDescription: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Blog created successfully",
        data: formatBlogImage(blog),
      },
      { status: 201 },
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

    console.error("Error creating blog:", error);

    return NextResponse.json(
      {
        message: "Failed to create blog",
      },
      { status: 500 },
    );
  }
}