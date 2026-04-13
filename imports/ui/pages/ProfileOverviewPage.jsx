import React from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import BottomNav from "../components/BottomNav.jsx";

const academicItems = [
  {
    icon: "📄",
    label: "Transcript of Records",
    sub: "Official digital copy (e-TOR)",
    path: "/profile/edit",
  },
  {
    icon: "👥",
    label: "Committees & Orgs",
    sub: "SAMAHAN, BKV (Active)",
    path: "/profile/edit",
  },
  {
    icon: "💝",
    label: "Past Donations",
    sub: "Blue Knight Scholars Fund",
    path: "/donations/history",
  },
];

const accountItems = [
  { icon: "⚙️", label: "App Settings", danger: false },
  { icon: "🔒", label: "Change Password", danger: false },
  { icon: "❓", label: "Help Center", danger: false },
  { icon: "🚪", label: "Log Out", danger: true },
];

export default function ProfileOverviewPage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      {/* Profile Header */}
      <div className="bg-white pb-6 flex flex-col items-center pt-8 border-b border-gray-100">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 flex items-center justify-center text-white font-black text-3xl">
            SL
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-brand-600 rounded-full flex items-center justify-center border-2 border-white text-white text-xs">
            ✎
          </button>
        </div>
        <h1 className="text-xl font-black text-gray-900">Sophia Laforteza</h1>
        <p className="text-brand-700 font-semibold text-sm mt-0.5">
          AB Communications, Batch 2024
        </p>
        <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
          <span>🎓</span> Ateneo de Davao University
        </p>

        <button
          onClick={() => navigate("/profile/edit")}
          className="mt-4 flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white font-semibold px-8 py-3 rounded-2xl text-sm transition-colors shadow-md"
        >
          <span>✎</span> Edit Profile
        </button>

        {/* Quick Stats */}
        <div className="flex gap-6 mt-5">
          {[
            ["₱12,500", "Donated"],
            ["8", "Campaigns"],
            ["2024", "Batch"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-black text-gray-900 text-base">{v}</p>
              <p className="text-xs text-gray-400">{l}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-5 space-y-4">
        {/* Academic & Records */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
            Academic & Records
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {academicItems.map((item, i) => (
              <button
                key={i}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                </div>
                <span className="text-gray-300 text-lg">›</span>
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Vault shortcut */}
        <button
          onClick={() => navigate("/profile/certificates")}
          className="w-full flex items-center gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-4 text-left hover:bg-amber-100 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">
            🏅
          </div>
          <div className="flex-1">
            <p className="font-semibold text-amber-900 text-sm">
              Certificate Vault
            </p>
            <p className="text-xs text-amber-700 mt-0.5">
              View & download your impact certificates
            </p>
          </div>
          <span className="text-amber-400 text-lg">›</span>
        </button>

        {/* Account Settings */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
            Account Settings
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {accountItems.map((item, i) => (
              <button
                key={i}
                onClick={() => item.danger && navigate("/login")}
                className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="text-xl w-6 text-center">{item.icon}</span>
                <span
                  className={`flex-1 font-semibold text-sm ${item.danger ? "text-red-500" : "text-gray-800"}`}
                >
                  {item.label}
                </span>
                {!item.danger && (
                  <span className="text-gray-300 text-lg">›</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
