"use client";

import React, { useState } from "react";
import { useAdminAuth } from "../context/AdminAuthContext";
import { useToast } from "../context/ToastContext";

export default function AdminSettingsPage() {
  const { user, authFetch, logout } = useAdminAuth();
  const { success, error, warning } = useToast();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 6) score += 25;
    if (pass.length >= 10) score += 25;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score += 25;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score += 25;
    return score;
  };

  const strength = getPasswordStrength(newPassword);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword) {
      warning("Missing Password", "Please enter your current password.");
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      warning("Password Too Short", "New password must be at least 6 characters long.");
      return;
    }

    if (newPassword === currentPassword) {
      warning("Same Password", "New password must be different from current password.");
      return;
    }

    if (newPassword !== confirmPassword) {
      error("Password Mismatch", "New password and confirmation do not match.");
      return;
    }

    setIsChangingPassword(true);

    try {
      const res = await authFetch("/api/auth/change-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        success("Password Updated!", "Your admin password was changed successfully.");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        error("Update Failed", data.message || "Could not change password.");
      }
    } catch (err) {
      console.error("Change password error", err);
      error("Network Error", "An error occurred while changing password.");
    } finally {
      setIsChangingPassword(false);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-300 pb-16 font-['Manrope']">
      {/* Top Header Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs">
        <h2 className="font-['Outfit'] font-black text-2xl text-zinc-900 tracking-tight">
          Admin Settings &amp; Security
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1">
          Manage your administrator profile, security credentials, and system configurations
        </p>
      </div>

      {/* Admin Profile Details */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
          <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900">
            Administrator Profile
          </h3>
          <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">
            {user?.role || "ADMIN"}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#199250] to-[#22c55e] flex items-center justify-center font-['Outfit'] font-black text-3xl text-white shadow-md shadow-emerald-700/20 shrink-0">
            {user?.name ? user.name[0].toUpperCase() : "A"}
          </div>

          <div className="space-y-1">
            <h4 className="font-['Outfit'] font-bold text-xl text-zinc-900">
              {user?.name || "Administrator"}
            </h4>
            <p className="text-sm text-[#199250] font-medium">
              {user?.email || "admin@profitplus.us"}
            </p>
            <p className="text-xs text-zinc-500">
              Account Role: <strong className="text-zinc-700 font-semibold">{user?.role}</strong> (Full Administrative Control)
            </p>
          </div>
        </div>
      </div>

      {/* Change Password Form */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
        <div className="border-b border-zinc-100 pb-4">
          <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900">
            Change Password
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Update your account password regularly to ensure admin account safety
          </p>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-5 max-w-lg">
          {/* Current Password */}
          <div>
            <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-['Manrope'] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label={showCurrentPassword ? "Hide password" : "Show password"}
              >
                {showCurrentPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Minimum 6 characters"
                className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-['Manrope'] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                {showNewPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Strength meter bar */}
            {newPassword && (
              <div className="mt-2 space-y-1">
                <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      strength <= 25
                        ? "w-1/4 bg-rose-500"
                        : strength <= 50
                        ? "w-2/4 bg-amber-500"
                        : strength <= 75
                        ? "w-3/4 bg-sky-500"
                        : "w-full bg-[#199250]"
                    }`}
                  />
                </div>
                <p className="text-[11px] text-zinc-500">
                  Strength:{" "}
                  <span
                    className={`font-semibold ${
                      strength <= 25
                        ? "text-rose-600"
                        : strength <= 50
                        ? "text-amber-600"
                        : strength <= 75
                        ? "text-sky-600"
                        : "text-[#199250]"
                    }`}
                  >
                    {strength <= 25 ? "Weak" : strength <= 50 ? "Fair" : strength <= 75 ? "Good" : "Strong"}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="w-full pl-4 pr-11 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-sm font-['Manrope'] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isChangingPassword}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#199250] to-[#1eb564] hover:from-[#147a42] hover:to-[#199250] text-white font-['Outfit'] font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/20 transition-all active:scale-95 flex items-center gap-2 disabled:opacity-50"
          >
            {isChangingPassword ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Updating Password...</span>
              </>
            ) : (
              <span>Update Password</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
