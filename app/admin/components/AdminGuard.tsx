"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAdminAuth } from "../context/AdminAuthContext";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated && pathname !== "/admin/login") {
        router.replace("/admin/login");
      } else if (isAuthenticated && pathname === "/admin/login") {
        router.replace("/admin");
      }
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-[#f6fbf8] flex flex-col items-center justify-center text-zinc-900">
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-3 border-emerald-500/20 border-t-[#199250] animate-spin" />
          <div className="absolute w-7 h-7 rounded-full bg-emerald-500/15 animate-ping" />
        </div>
        <p className="mt-4 text-emerald-800 font-['Manrope'] text-sm tracking-wide font-semibold">
          Verifying Admin Credentials...
        </p>
      </div>
    );
  }

  // If unauthenticated on non-login route, show nothing while redirecting
  if (!isAuthenticated && pathname !== "/admin/login") {
    return null;
  }

  return <>{children}</>;
}
