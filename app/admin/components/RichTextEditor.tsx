"use client";

import React, { useState, useRef } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your blog content here... (Markdown & HTML supported)",
  minHeight = "420px",
}: RichTextEditorProps) {
  const [activeTab, setActiveTab] = useState<"write" | "preview" | "split">("write");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertFormatting = (prefix: string, suffix: string = "", defaultText: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end) || defaultText;
    const before = value.substring(0, start);
    const after = value.substring(end);

    const newText = `${before}${prefix}${selectedText}${suffix}${after}`;
    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selectedText.length
      );
    }, 0);
  };

  const insertAtLineStart = (prefix: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const before = value.substring(0, start);
    const lastNewline = before.lastIndexOf("\n");
    const lineStart = lastNewline === -1 ? 0 : lastNewline + 1;

    const beforeLine = value.substring(0, lineStart);
    const afterLine = value.substring(lineStart);

    const newText = `${beforeLine}${prefix}${afterLine}`;
    onChange(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length);
    }, 0);
  };

  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;
  const charCount = value.length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const parseMarkdownToHtml = (markdown: string) => {
    if (!markdown) return "<p class='text-zinc-400 italic'>No content to preview yet.</p>";

    let html = markdown
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    html = html.replace(/```([\s\S]*?)```/g, (_match, code) => {
      return `<pre class="bg-zinc-900 text-emerald-300 p-4 rounded-xl border border-zinc-800 overflow-x-auto font-mono text-xs sm:text-sm my-4"><code>${code.trim()}</code></pre>`;
    });

    html = html.replace(/`([^`]+)`/g, "<code class='bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-mono text-xs sm:text-sm border border-emerald-100'>$1</code>");

    html = html.replace(/^### (.*$)/gim, "<h3 class='text-lg sm:text-xl font-bold font-[\"Outfit\"] text-zinc-900 mt-6 mb-2'>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2 class='text-xl sm:text-2xl font-bold font-[\"Outfit\"] text-zinc-900 mt-8 mb-3 pb-1 border-b border-zinc-200'>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1 class='text-2xl sm:text-3xl font-black font-[\"Outfit\"] text-zinc-900 mt-8 mb-4'>$1</h1>");

    html = html.replace(/^\> (.*$)/gim, "<blockquote class='border-l-4 border-emerald-500 pl-4 py-1 italic text-zinc-700 my-4 bg-emerald-50/50 rounded-r-lg'>$1</blockquote>");

    html = html.replace(/\*\*\*(.*?)\*\*\*/gim, "<strong><em>$1</em></strong>");
    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong class='font-bold text-zinc-900'>$1</strong>");
    html = html.replace(/\*(.*?)\*/gim, "<em class='italic text-zinc-800'>$1</em>");

    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, "<a href='$2' target='_blank' rel='noopener noreferrer' class='text-[#199250] hover:text-[#055027] underline font-semibold'>$1</a>");

    html = html.replace(/^\s*[\-\*]\s+(.*)$/gim, "<li class='ml-6 list-disc text-zinc-700'>$1</li>");
    html = html.replace(/^\s*\d+\.\s+(.*)$/gim, "<li class='ml-6 list-decimal text-zinc-700'>$1</li>");
    html = html.replace(/^(?:---|\*\*\*|___)$/gim, "<hr class='my-6 border-zinc-200' />");

    const paragraphs = html.split(/\n\s*\n/);
    return paragraphs
      .map((p) => {
        const trimmed = p.trim();
        if (
          trimmed.startsWith("<h1") ||
          trimmed.startsWith("<h2") ||
          trimmed.startsWith("<h3") ||
          trimmed.startsWith("<pre") ||
          trimmed.startsWith("<blockquote") ||
          trimmed.startsWith("<li") ||
          trimmed.startsWith("<hr")
        ) {
          return trimmed;
        }
        return `<p class='mb-4 text-zinc-800 text-sm sm:text-base leading-relaxed'>${trimmed.replace(/\n/g, "<br />")}</p>`;
      })
      .join("");
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-300 bg-white overflow-hidden flex flex-col shadow-xs">
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 bg-zinc-50 border-b border-zinc-200 select-none">
        {/* Formatting Buttons */}
        <div className="flex flex-wrap items-center gap-1">
          <button
            type="button"
            onClick={() => insertFormatting("**", "**", "bold text")}
            title="Bold"
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs font-bold font-mono"
          >
            B
          </button>
          <button
            type="button"
            onClick={() => insertFormatting("*", "*", "italic text")}
            title="Italic"
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs italic font-mono"
          >
            I
          </button>

          <span className="h-4 w-[1px] bg-zinc-300 mx-1" />

          <button
            type="button"
            onClick={() => insertAtLineStart("# ")}
            title="Heading 1"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs font-bold"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => insertAtLineStart("## ")}
            title="Heading 2"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs font-bold"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => insertAtLineStart("### ")}
            title="Heading 3"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs font-bold"
          >
            H3
          </button>

          <span className="h-4 w-[1px] bg-zinc-300 mx-1" />

          <button
            type="button"
            onClick={() => insertAtLineStart("- ")}
            title="Bullet List"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs"
          >
            • List
          </button>
          <button
            type="button"
            onClick={() => insertAtLineStart("1. ")}
            title="Numbered List"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs"
          >
            1. List
          </button>
          <button
            type="button"
            onClick={() => insertAtLineStart("> ")}
            title="Quote"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs"
          >
            &ldquo; Quote
          </button>
          <button
            type="button"
            onClick={() => insertFormatting("```\n", "\n```", "code here")}
            title="Code Block"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs font-mono"
          >
            &lt;/&gt;
          </button>
          <button
            type="button"
            onClick={() => insertFormatting("[", "](https://example.com)", "Link text")}
            title="Insert Link"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs"
          >
            🔗 Link
          </button>
          <button
            type="button"
            onClick={() => insertAtLineStart("\n---\n")}
            title="Horizontal Divider"
            className="p-1.5 sm:px-2 sm:py-1 rounded-lg hover:bg-zinc-200/70 text-zinc-700 hover:text-zinc-900 transition-colors text-xs"
          >
            — Divider
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-1 bg-zinc-200/70 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab("write")}
            className={`px-3 py-1 rounded-lg text-xs font-['Manrope'] font-semibold transition-all ${
              activeTab === "write"
                ? "bg-[#199250] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1 rounded-lg text-xs font-['Manrope'] font-semibold transition-all ${
              activeTab === "preview"
                ? "bg-[#199250] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Live Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("split")}
            className={`hidden md:block px-3 py-1 rounded-lg text-xs font-['Manrope'] font-semibold transition-all ${
              activeTab === "split"
                ? "bg-[#199250] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Split View
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="relative w-full flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-zinc-200">
        {/* Write Pane */}
        {(activeTab === "write" || activeTab === "split") && (
          <div className="w-full flex-1 flex flex-col">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              style={{ minHeight }}
              className="w-full h-full p-4 sm:p-5 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none font-mono text-sm leading-relaxed resize-y"
            />
          </div>
        )}

        {/* Preview Pane */}
        {(activeTab === "preview" || activeTab === "split") && (
          <div
            style={{ minHeight }}
            className="w-full flex-1 p-4 sm:p-6 overflow-y-auto bg-zinc-50/50 text-zinc-800 max-w-none font-['Manrope']"
            dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(value) }}
          />
        )}
      </div>

      {/* Bottom Status Bar */}
      <div className="px-4 py-2 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 font-['Manrope']">
        <div className="flex items-center gap-4">
          <span>
            <strong className="text-zinc-800 font-semibold">{wordCount}</strong> words
          </span>
          <span>
            <strong className="text-zinc-800 font-semibold">{charCount}</strong> characters
          </span>
          <span className="hidden sm:inline">
            ~<strong className="text-zinc-800 font-semibold">{readTime}</strong> min read
          </span>
        </div>
        <span className="text-[11px] text-zinc-400 hidden sm:inline">
          Markdown &amp; HTML supported
        </span>
      </div>
    </div>
  );
}
