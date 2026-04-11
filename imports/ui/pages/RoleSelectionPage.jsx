import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';

export default function RoleSelectionPage() {
  const navigate = useNavigate();

  return (
    <MobileShell noPadBottom>
      <div className="flex flex-col min-h-screen bg-slate-50 px-6 py-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full bg-brand-800 flex items-center justify-center mb-5 shadow-lg">
            <span className="text-white font-black text-2xl">AdDU</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Access Your Portal</h1>
          <p className="text-gray-500 text-sm mt-2">Select your role to continue</p>
        </div>

        {/* Role Cards */}
        <div className="space-y-4 mb-8">
          {/* Alumni */}
          <button
            onClick={() => navigate('/home')}
            className="w-full flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border-2 border-transparent hover:border-brand-400 hover:shadow-md transition-all group text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-200 transition-colors">
              <span className="text-2xl">🎓</span>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-gray-900 text-base">Alumni</h2>
              <p className="text-sm text-gray-500 mt-0.5">Add your donations and explore network</p>
            </div>
            <span className="text-gray-400 text-lg">›</span>
          </button>

          {/* Administrator */}
          <button
            onClick={() => navigate('/admin/home')}
            className="w-full flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border-2 border-transparent hover:border-admin-400 hover:shadow-md transition-all group text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-admin-100 flex items-center justify-center flex-shrink-0 group-hover:bg-admin-200 transition-colors">
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-gray-900 text-base">Administrator</h2>
              <p className="text-sm text-gray-500 mt-0.5">Access portal management tools</p>
            </div>
            <span className="text-gray-400 text-lg">›</span>
          </button>
        </div>

        {/* Help */}
        <div className="text-center mb-6">
          <button className="text-brand-700 font-semibold text-sm hover:underline flex items-center gap-1.5 mx-auto">
            <span>❓</span> Need help or support?
          </button>
        </div>

        {/* Footer */}
        <div className="mt-auto text-center space-y-2">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Ateneo de Davao University</p>
          <div className="flex justify-center gap-3 text-xs text-gray-400">
            <button className="hover:text-brand-700">Data Privacy</button>
            <span>•</span>
            <button className="hover:text-brand-700">Terms of Service</button>
          </div>
          <div className="h-0.5 w-16 bg-gray-300 rounded-full mx-auto mt-3" />
        </div>
      </div>
    </MobileShell>
  );
}
