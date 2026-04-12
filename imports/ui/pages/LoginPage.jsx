import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  return (
    <MobileShell noPadBottom>
      {/* 1. Updated background to a very light, subtle horizontal gradient 
          2. Adjusted text colors to match the image's dark navy/slate
      */}
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#e9f1f9] to-[#ffffff] text-[#0d2f66]">
        {/* Header Section */}
        <div className="px-6 pt-16 pb-8 flex flex-col items-center">
          <div className="w-28 h-28 mb-6">
            <img
              src="https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
              alt="Ateneo logo"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            Welcome, Blue Knight
          </h1>
          <p className="text-gray-500 text-sm font-medium mt-1">
            AdDU Alumni Portal
          </p>
        </div>

        {/* Form Section */}
        <div className="flex-1 px-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#334155] mb-2">
              Alumni ID or Email
            </label>
            <input
              type="text"
              placeholder="Enter your ID or email"
              className="w-full px-4 py-4 rounded-2xl border-none bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_4px_12px_rgba(0,0,0,0.05)] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#334155] mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-4 rounded-2xl border-none bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_4px_12px_rgba(0,0,0,0.05)] pr-12 placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {/* Using a standard Eye icon style for a cleaner look */}
                {showPass ? "Hide" : "👁"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/forgot-password")}
              className="text-[#004a99] text-sm font-bold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button - Adjusted to that specific deep AdDU blue */}
          <button
            onClick={() => navigate("/role-selection")}
            className="w-full bg-[#004a99] hover:bg-[#003d7a] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20 transition-all text-lg active:scale-[0.98]"
          >
            Login →
          </button>

          {/* Footer Links */}
          <div className="space-y-6 pt-4">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-[#004a99] font-bold hover:underline"
              >
                Sign Up
              </button>
            </p>

            <p className="text-center text-[10px] text-gray-400 leading-relaxed px-4">
              By logging in, you agree to the ADDU Alumni Data Privacy Policy
              and Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </MobileShell>
  );
}
