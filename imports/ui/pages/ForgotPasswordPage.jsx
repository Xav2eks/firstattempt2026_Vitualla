import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email');

  return (
    <MobileShell noPadBottom>
      <div className="flex flex-col min-h-screen bg-slate-50 px-6 py-8">
        {/* Back */}
        <button
          onClick={() => navigate('/login')}
          className="flex items-center gap-2 text-brand-700 font-medium text-sm mb-8 self-start"
        >
          <span className="text-lg">←</span> Back to Login
        </button>

        {/* Icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center mb-5">
            <span className="text-3xl">🔄</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center">Forgot Password?</h1>
          <p className="text-sm text-gray-500 text-center mt-2 leading-relaxed">
            Select a method to verify your identity and recover your account access.
          </p>
        </div>

        {/* Method Toggle */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setMethod('email')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
              method === 'email'
                ? 'border-brand-700 bg-brand-50 text-brand-800'
                : 'border-gray-200 bg-white text-gray-500'
            }`}
          >
            <span>✉️</span> Email Address
          </button>
          <button
            onClick={() => setMethod('id')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
              method === 'id'
                ? 'border-brand-700 bg-brand-50 text-brand-800'
                : 'border-gray-200 bg-white text-gray-500'
            }`}
          >
            <span>🎓</span> Student ID
          </button>
        </div>

        {/* Input */}
        <div className="mb-2">
          <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
            {method === 'email' ? 'School Email Address' : 'Student ID Number'}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
              {method === 'email' ? '@' : '#'}
            </span>
            <input
              type={method === 'email' ? 'email' : 'text'}
              placeholder={method === 'email' ? 'e.g. student@university.edu.ph' : 'e.g. 2024-00001'}
              className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1.5">
            We'll send a password reset link to this address.
          </p>
        </div>

        <button
          onClick={() => navigate('/reset-success')}
          className="w-full bg-brand-800 hover:bg-brand-900 text-white font-semibold py-4 rounded-xl shadow-md transition-colors text-base mt-4"
        >
          Continue
        </button>

        {/* Support */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Can't access your email or don't know your ID?
          </p>
          <button className="flex items-center gap-1.5 text-brand-700 font-semibold text-sm mx-auto hover:underline">
            <span>🛟</span> Contact Support
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-10 text-center">
          <p className="text-xs text-gray-400">© 2026 ADDU alumni. All rights reserved.</p>
        </div>
      </div>
    </MobileShell>
  );
}
