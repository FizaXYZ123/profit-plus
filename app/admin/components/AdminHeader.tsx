"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAdminAuth } from "../context/AdminAuthContext";

interface AdminHeaderProps {
  onOpenMobile: () => void;
}

export default function AdminHeader({ onOpenMobile }: AdminHeaderProps) {
  const pathname = usePathname();
  const { user, logout } = useAdminAuth();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  // Derive breadcrumbs and page title
  const getPageInfo = () => {
    if (pathname === "/admin") {
      return { title: "Dashboard Overview", breadcrumb: "Dashboard" };
    }
    if (pathname === "/admin/blogs") {
      return { title: "Blog Management", breadcrumb: "Blogs" };
    }
    if (pathname === "/admin/blogs/new") {
      return { title: "Create New Blog", breadcrumb: "Blogs / New Blog" };
    }
    if (pathname.startsWith("/admin/blogs/edit") || pathname.includes("/edit")) {
      return { title: "Edit Blog", breadcrumb: "Blogs / Edit" };
    }
    if (pathname === "/admin/inquiries") {
      return { title: "Contact Inquiries", breadcrumb: "Inquiries" };
    }
    if (pathname === "/admin/demo-requests") {
      return { title: "Demo Requests", breadcrumb: "Demo Requests" };
    }
    if (pathname === "/admin/settings") {
      return { title: "Admin Settings", breadcrumb: "Settings" };
    }
    return { title: "Admin Portal", breadcrumb: "Admin" };
  };

  const pageInfo = getPageInfo();

  return (
    <header className="fixed top-0 right-0 left-0 md:left-72 z-30 h-16 sm:h-20 bg-white border-b border-zinc-200 px-4 sm:px-8 flex items-center justify-between shadow-xs">
      {/* Left: Mobile Toggle & Breadcrumb / Title */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Mobile menu trigger */}
        <button
          onClick={onOpenMobile}
          className="md:hidden p-2 rounded-xl text-zinc-600 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors"
          aria-label="Open Sidebar Menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div>
          <h1 className="font-['Outfit'] font-bold text-lg sm:text-2xl text-zinc-900 tracking-tight">
            {pageInfo.title}
          </h1>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Quick New Blog Button (Hidden if already on /new) */}
        {pathname !== "/admin/blogs/new" && (
          <Link
            href="/admin/blogs/new"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#199250] hover:bg-[#147a42] text-white font-['Manrope'] font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            <span>New Blog</span>
          </Link>
        )}

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 transition-colors select-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#199250] to-[#22c55e] flex items-center justify-center font-['Outfit'] font-bold text-xs text-white shadow-xs">
              {user?.name ? user.name[0].toUpperCase() : "A"}
            </div>
            <div className="hidden sm:block text-left">
              <p className="font-['Outfit'] font-bold text-xs text-zinc-900 leading-tight">
                {user?.name || "Admin"}
              </p>
              <p className="font-['Manrope'] text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">
                {user?.role || "ADMIN"}
              </p>
            </div>
            <svg className="w-4 h-4 text-zinc-400 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {userDropdownOpen && (
            <>
              <div
                onClick={() => setUserDropdownOpen(false)}
                className="fixed inset-0 z-40"
              />
              <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-zinc-200 p-2 shadow-xl shadow-zinc-900/10 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-2 border-b border-zinc-100">
                  <p className="font-['Outfit'] font-bold text-sm text-zinc-900">{user?.name || "Admin"}</p>
                  <p className="font-['Manrope'] text-xs text-zinc-500 truncate">{user?.email}</p>
                </div>

                <div className="py-1 space-y-0.5">
                  <Link
                    href="/admin/settings"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-['Manrope'] text-zinc-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Account Settings</span>
                  </Link>

                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-['Manrope'] text-zinc-700 hover:text-emerald-800 hover:bg-emerald-50 transition-colors font-medium"
                  >
                    <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>View Public Site</span>
                  </a>
                </div>

                <div className="pt-1 border-t border-zinc-100">
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-['Manrope'] text-rose-600 hover:bg-rose-50 font-semibold transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
