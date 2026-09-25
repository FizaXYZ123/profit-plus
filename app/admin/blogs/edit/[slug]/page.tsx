"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "../../../context/AdminAuthContext";
import { useToast } from "../../../context/ToastContext";
import RichTextEditor from "../../../components/RichTextEditor";
import DatePicker from "../../../components/DatePicker";

interface EditBlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { authFetch } = useAdminAuth();
  const { success, error, warning } = useToast();

  const originalSlug = decodeURIComponent(resolvedParams.slug);

  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  // Existing image vs new upload
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);

  const [seoAccordionOpen, setSeoAccordionOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadBlog() {
      setLoading(true);
      try {
        const res = await authFetch(
          `/api/blog/${encodeURIComponent(originalSlug)}`,
        );
        if (!res.ok) {
          error(
            "Blog Not Found",
            `Could not find blog with slug "${originalSlug}".`,
          );
          router.push("/admin/blogs");
          return;
        }

        const data = await res.json();
        const b = data.data;

        if (isMounted && b) {
          setTitle(b.title || "");
          setSlug(b.slug || "");
          const d = b.date ? new Date(b.date).toISOString().split("T")[0] : "";
          setDate(d);
          setShortDescription(b.shortDescription || "");
          setContent(b.content || "");
          setMetaTitle(b.metaTitle || "");
          setMetaDescription(b.metaDescription || "");
          setExistingImageUrl(b.featuredImage || null);
        }
      } catch (err) {
        console.error("Error loading blog for edit", err);
        error("Fetch Error", "Failed to load blog details.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadBlog();

    return () => {
      isMounted = false;
    };
  }, [originalSlug, authFetch, error, router]);

  const handleSlugChange = (val: string) => {
    const cleaned = val
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-");
    setSlug(cleaned);
  };

  const handleImageSelect = (file: File) => {
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      error(
        "Invalid Image Format",
        "Only JPEG, PNG, WebP, and GIF images are allowed.",
      );
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      error("File Too Large", "Image size must not exceed 10MB.");
      return;
    }

    setNewImageFile(file);
    const preview = URL.createObjectURL(file);
    setNewImagePreview(preview);
  };

  const handleRemoveNewImage = () => {
    setNewImageFile(null);
    if (newImagePreview) {
      URL.revokeObjectURL(newImagePreview);
      setNewImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      warning("Missing Title", "Please provide a blog title.");
      return;
    }

    if (!slug.trim()) {
      warning("Missing Slug", "Please provide a valid slug.");
      return;
    }

    if (!date.trim()) {
      warning("Missing Date", "Please specify a publish date.");
      return;
    }

    if (!shortDescription.trim()) {
      warning(
        "Missing Short Description",
        "Please provide a short description.",
      );
      return;
    }

    if (!content.trim()) {
      warning("Missing Content", "Please provide article content.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("slug", slug.trim().toLowerCase());
      formData.append("date", date);
      formData.append("shortDescription", shortDescription.trim());
      formData.append("content", content.trim());
      formData.append("metaTitle", metaTitle.trim());
      formData.append("metaDescription", metaDescription.trim());

      if (newImageFile) {
        formData.append("featuredImage", newImageFile);
      }

      const res = await authFetch(
        `/api/blog/${encodeURIComponent(originalSlug)}`,
        {
          method: "PUT",
          body: formData,
        },
      );

      const data = await res.json();

      if (res.ok) {
        success("Blog Updated", `"${title}" was saved successfully.`);
        window.dispatchEvent(new Event("admin_stats_updated"));
        router.push("/admin/blogs");
      } else {
        error("Update Failed", data.message || "Failed to save changes.");
      }
    } catch (err) {
      console.error("Error updating blog", err);
      error(
        "Network Error",
        "Could not submit changes. Please check your connection.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 text-center text-zinc-500 flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-3 border-emerald-500/30 border-t-[#199250] rounded-full animate-spin mb-3" />
        <p className="text-sm font-['Manrope'] font-medium">
          Loading blog for editing...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in duration-300 pb-16">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/blogs"
            className="p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors"
            title="Back to Blogs"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                Editing
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                /{originalSlug}
              </span>
            </div>
            <h2 className="font-['Outfit'] font-black text-2xl text-zinc-900 tracking-tight mt-0.5">
              Edit Blog
            </h2>
          </div>
        </div>

        <Link
          href={`/admin/blogs`}
          className="text-xs font-['Manrope'] font-semibold text-zinc-500 hover:text-zinc-800"
        >
          Cancel &amp; Return
        </Link>
      </div>

      {/* Main Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
          <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900 border-b border-zinc-100 pb-3">
            Blog Information
          </h3>

          {/* Title */}
          <div>
            <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
              Blog Title <span className="text-emerald-600">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article title"
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 focus:outline-none focus:bg-white focus:border-emerald-500 text-sm sm:text-base font-['Outfit'] font-bold transition-all"
            />
          </div>

          {/* Slug & Date Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Slug */}
            <div>
              <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
                URL Slug <span className="text-emerald-600">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs text-zinc-400 font-mono">
                  /blog/
                </span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  placeholder="slug"
                  className="w-full pl-16 pr-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-emerald-800 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs sm:text-sm font-mono transition-all"
                />
              </div>
            </div>

            {/* Date Picker */}
            <DatePicker
              value={date}
              onChange={setDate}
              label="Publish Date"
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700">
                Short Description / Excerpt{" "}
                <span className="text-emerald-600">*</span>
              </label>
              <span className="text-xs text-zinc-500 font-['Manrope']">
                {shortDescription.length} chars
              </span>
            </div>
            <textarea
              rows={3}
              required
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Article summary..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs sm:text-sm font-['Manrope'] leading-relaxed transition-all"
            />
          </div>
        </div>

        {/* Featured Image Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div>
              <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900">
                Featured Cover Image
              </h3>
              <p className="font-['Manrope'] text-xs text-zinc-500">
                Current image is saved. Upload a new image below if you wish to
                replace it.
              </p>
            </div>
            {newImagePreview && (
              <button
                type="button"
                onClick={handleRemoveNewImage}
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
              >
                Cancel New Upload
              </button>
            )}
          </div>

          {/* Current or New Image Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 h-64 sm:h-80 w-full bg-zinc-100 group">
            {newImagePreview ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={newImagePreview}
                alt="New Image Preview"
                className="w-full h-full object-cover"
              />
            ) : existingImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={existingImageUrl}
                alt="Current Image"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-400">
                No Image Set
              </div>
            )}

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-xs">
              <label className="px-5 py-2.5 rounded-xl bg-[#199250] hover:bg-[#147a42] text-white font-semibold text-xs cursor-pointer shadow-md transition-colors flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
                <span>Upload Replacement Image</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleImageSelect(e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Content Body Editor Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-4">
          <div>
            <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900">
              Blog Content <span className="text-emerald-600">*</span>
            </h3>
            <p className="font-['Manrope'] text-xs text-zinc-500 mb-4">
              Edit the content with the markdown toolbar or switch to live
              preview.
            </p>
          </div>

          <RichTextEditor
            value={content}
            onChange={setContent}
            placeholder="Edit article text..."
            minHeight="450px"
          />
        </div>

        {/* SEO Meta Tags (Collapsible) */}
        <div className="rounded-3xl bg-white border border-zinc-200/80 shadow-xs overflow-hidden">
          <button
            type="button"
            onClick={() => setSeoAccordionOpen(!seoAccordionOpen)}
            className="w-full p-6 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900">
                  Search Engine Optimization (SEO)
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-mono font-semibold border border-emerald-200">
                  Optional
                </span>
              </div>
              <p className="font-['Manrope'] text-xs text-zinc-500 mt-0.5">
                Customize search result title and meta description
              </p>
            </div>
            <svg
              className={`w-5 h-5 text-zinc-400 transition-transform ${
                seoAccordionOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {seoAccordionOpen && (
            <div className="p-6 sm:p-8 pt-0 border-t border-zinc-100 space-y-6">
              {/* Google Snippet */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 font-['Manrope'] mt-4">
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  Google Search Snippet Preview
                </p>
                <div className="space-y-1">
                  <p className="text-xs text-emerald-700 font-mono">
                    https://profitplus.us/blog/{slug}
                  </p>
                  <h4 className="text-blue-700 font-medium text-base hover:underline cursor-pointer line-clamp-1">
                    {metaTitle || title} | Profit Plus
                  </h4>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {metaDescription || shortDescription}
                  </p>
                </div>
              </div>

              {/* Meta Title */}
              <div>
                <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="Defaults to article title"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs sm:text-sm font-['Manrope'] transition-all"
                />
              </div>

              {/* Meta Description */}
              <div>
                <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  rows={2}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Defaults to short description"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 focus:outline-none focus:bg-white focus:border-emerald-500 text-xs sm:text-sm font-['Manrope'] transition-all"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Action Bar */}
        <div className="sticky bottom-6 z-20 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200 shadow-xl flex items-center justify-between gap-4">
          <Link
            href="/admin/blogs"
            className="px-5 py-2.5 rounded-xl font-['Manrope'] font-semibold text-xs sm:text-sm text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#199250] to-[#1eb564] hover:from-[#147a42] hover:to-[#199250] text-white font-['Outfit'] font-bold text-sm shadow-lg shadow-emerald-700/25 transition-all duration-200 active:scale-95 flex items-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Saving Changes...</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
