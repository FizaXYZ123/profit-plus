import { prisma } from "@/app/lib/prisma";
import { AuthError, requireAdmin } from "@/app/lib/auth";
import { Prisma } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

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

async function findBlog(slugOrId: string) {
  const value = decodeURIComponent(slugOrId).trim();

  let blog = await prisma.blog.findUnique({
    where: {
      slug: value,
    },
    select: {
      id: true,
      title: true,
      content: true,
      featuredImage: true,
      metaTitle: true,
      metaDescription: true,
      slug: true,
      date: true,
      shortDescription: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!blog) {
    blog = await prisma.blog.findUnique({
      where: {
        id: value,
      },
      select: {
        id: true,
        title: true,
        content: true,
        featuredImage: true,
        metaTitle: true,
        metaDescription: true,
        slug: true,
        date: true,
        shortDescription: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  return blog;
}

// GET - Find blog by slug
export async function GET(
  request: NextRequest,
  context: RouteContext,
) {
  try {
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        {
          message: "slug is required",
        },
        { status: 400 },
      );
    }

    const blog = await findBlog(slug);

    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        data: formatBlogImage(blog),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching blog:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch blog",
      },
      { status: 500 },
    );
  }
}

// DELETE - Delete blog
export async function DELETE(
  request: NextRequest,
  context: RouteContext,
) {
  try {
    await requireAdmin(request);

    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        {
          message: "id or slug is required",
        },
        { status: 400 },
      );
    }

    const existingBlog = await findBlog(slug);

    if (!existingBlog) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        { status: 404 },
      );
    }

    const deletedBlog = await prisma.blog.delete({
      where: {
        id: existingBlog.id,
      },
      select: {
        id: true,
        title: true,
        slug: true,
      },
    });

    return NextResponse.json(
      {
        message: "Blog deleted successfully",
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

    console.error("Error deleting blog:", error);

    return NextResponse.json(
      {
        message: "Failed to delete blog",
      },
      { status: 500 },
    );
  }
}

// PUT - Update blog
export async function PUT(
  request: NextRequest,
  context: RouteContext,
) {
  try {
    await requireAdmin(request);

    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        {
          message: "id or slug is required",
        },
        { status: 400 },
      );
    }

    const existingBlog = await findBlog(slug);

    if (!existingBlog) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        { status: 404 },
      );
    }

    const formData = await request.formData();

    const title = formData.get("title");
    const content = formData.get("content");
    const featuredImage = formData.get("featuredImage");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const newSlug = formData.get("slug");
    const date = formData.get("date");
    const shortDescription = formData.get("shortDescription");

    // IMPORTANT:
    // Use Prisma's generated type instead of manually defining
    // the update object.
    const updateData: Prisma.BlogUpdateInput = {};

    // TITLE
    if (title !== null) {
      if (typeof title !== "string" || !title.trim()) {
        return NextResponse.json(
          {
            message: "title must be a non-empty string",
          },
          { status: 400 },
        );
      }

      updateData.title = title.trim();
    }

    // CONTENT
    if (content !== null) {
      if (typeof content !== "string" || !content.trim()) {
        return NextResponse.json(
          {
            message: "content must be a non-empty string",
          },
          { status: 400 },
        );
      }

      updateData.content = content.trim();
    }

    // SLUG
    let finalSlug = existingBlog.slug;

    if (newSlug !== null) {
      if (typeof newSlug !== "string" || !newSlug.trim()) {
        return NextResponse.json(
          {
            message: "slug must be a non-empty string",
          },
          { status: 400 },
        );
      }

      const formattedSlug = newSlug.trim().toLowerCase();

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

      if (formattedSlug !== existingBlog.slug) {
        const duplicateBlog = await prisma.blog.findUnique({
          where: {
            slug: formattedSlug,
          },
        });

        if (
          duplicateBlog &&
          duplicateBlog.id !== existingBlog.id
        ) {
          return NextResponse.json(
            {
              message: "Blog with this slug already exists",
            },
            { status: 409 },
          );
        }
      }

      updateData.slug = formattedSlug;
      finalSlug = formattedSlug;

      // Update image URL when slug changes
      if (
        existingBlog.featuredImage &&
        existingBlog.featuredImage.startsWith("/api/blog/")
      ) {
        updateData.featuredImage =
          `/api/blog/${formattedSlug}/image`;
      }
    }

    // DATE
    if (date !== null) {
      if (typeof date !== "string" || !date.trim()) {
        return NextResponse.json(
          {
            message: "date must be provided",
          },
          { status: 400 },
        );
      }

      const dateStr = date.trim();

      const dateOnly = dateStr.includes("T")
        ? dateStr.split("T")[0]
        : dateStr;

      const parsedDate = new Date(
        `${dateOnly}T00:00:00.000Z`,
      );

      if (Number.isNaN(parsedDate.getTime())) {
        return NextResponse.json(
          {
            message: "Invalid date",
          },
          { status: 400 },
        );
      }

      updateData.date = parsedDate;
    }

    // META TITLE
    if (metaTitle !== null) {
      if (typeof metaTitle !== "string") {
        return NextResponse.json(
          {
            message: "metaTitle must be a string",
          },
          { status: 400 },
        );
      }

      updateData.metaTitle = metaTitle.trim() || null;
    }

    // META DESCRIPTION
    if (metaDescription !== null) {
      if (typeof metaDescription !== "string") {
        return NextResponse.json(
          {
            message: "metaDescription must be a string",
          },
          { status: 400 },
        );
      }

      updateData.metaDescription =
        metaDescription.trim() || null;
    }

    // SHORT DESCRIPTION
    if (shortDescription !== null) {
      if (
        typeof shortDescription !== "string" ||
        !shortDescription.trim()
      ) {
        return NextResponse.json(
          {
            message:
              "shortDescription is required and cannot be empty",
          },
          { status: 400 },
        );
      }

      updateData.shortDescription =
        shortDescription.trim();
    }

    // FEATURED IMAGE
    if (
      featuredImage instanceof File &&
      featuredImage.size > 0
    ) {
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

      // Max 10MB
      const maxFileSize = 10 * 1024 * 1024;

      if (featuredImage.size > maxFileSize) {
        return NextResponse.json(
          {
            message: "Image size exceeds 10MB limit",
          },
          { status: 400 },
        );
      }

      const bytes = await featuredImage.arrayBuffer();

      updateData.featuredImageData = new Uint8Array(bytes);
      updateData.featuredImageType = featuredImage.type;
      updateData.featuredImage =
        `/api/blog/${finalSlug}/image`;
    }

    // UPDATE BLOG
    const updatedBlog = await prisma.blog.update({
      where: {
        id: existingBlog.id,
      },
      data: updateData,
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
        message: "Blog updated successfully",
        data: formatBlogImage(updatedBlog),
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

    console.error("Error updating blog:", error);

    return NextResponse.json(
      {
        message: "Failed to update blog",
      },
      { status: 500 },
    );
  }
}