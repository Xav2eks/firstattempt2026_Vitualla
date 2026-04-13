import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";

export default function ResetSuccessPage() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  return (
    <MobileShell noPadBottom>
      <div className="flex flex-col min-h-screen bg-slate-50">
        {/* Success Banner */}
        <div className="bg-green-500 text-white text-center py-3 px-4 text-sm font-semibold flex items-center justify-center gap-2">
          <span>✅</span> Password reset successfully! Please log in.
        </div>

        {/* Header */}
        <div className="bg-gradient-to-br from-brand-900 to-brand-700 px-6 pt-10 pb-12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <img
              src="https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
              alt="Ateneo Logo"
            />
          </div>
          <h1 className="text-white text-2xl font-bold">
            Welcome, Blue Knight
          </h1>
          <p className="text-brand-200 text-sm mt-1">AdDU Alumni Portal</p>
        </div>

        {/* Form */}
        <div className="flex-1 px-6 py-8 space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
              Alumni ID or Email
            </label>
            <input
              type="text"
              placeholder="Enter your ID or email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your new password"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
              >
                {showPass ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-brand-700 text-sm font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            onClick={() => navigate("/role-selection")}
            className="w-full bg-brand-800 hover:bg-brand-900 text-white font-semibold py-4 rounded-xl shadow-md transition-colors text-base"
          >
            Login →
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-brand-700 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>

          <p className="text-center text-xs text-gray-400 leading-relaxed pt-2">
            By logging in, you agree to the ADDU Alumni Data Privacy Policy and
            Terms of Service.
          </p>
          <div className="h-0.5 w-16 bg-gray-300 rounded-full mx-auto mt-2" />
        </div>
      </div>
    </MobileShell>
  );
}
