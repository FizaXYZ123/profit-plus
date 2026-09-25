"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import { ToastProvider } from "./context/ToastContext";
import AdminGuard from "./components/AdminGuard";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  if (isLoginPage) {
    return <AdminGuard>{children}</AdminGuard>;
  }

  return (
    <AdminGuard>
      <div className="min-h-screen bg-[#f6fbf8] text-zinc-900 flex flex-col font-['Manrope'] selection:bg-[#199250] selection:text-white">
        {/* Soft Background Ambiance */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[500px] bg-emerald-200/30 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[160px]" />
        </div>

        {/* Sidebar */}
        <AdminSidebar
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="relative z-10 flex-1 md:pl-72 flex flex-col min-h-screen pt-16 sm:pt-20">
          <AdminHeader onOpenMobile={() => setMobileSidebarOpen(true)} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <ToastProvider>
        <AdminLayoutContent>{children}</AdminLayoutContent>
      </ToastProvider>
    </AdminAuthProvider>
  );
}
