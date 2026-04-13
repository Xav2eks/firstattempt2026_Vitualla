import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home", icon: "🏠" },
  { label: "Events", path: "/events", icon: "📅" },
  { label: "Donations", path: "/donations", icon: "💝" },
  { label: "Notifications", path: "/notifications", icon: "🔔", badge: 3 },
  { label: "Profile", path: "/profile", icon: "👤" },
];

export default function DesktopSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-brand-900 fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-brand-700">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg">
          <img
            src="https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
            alt="Ateneo Logo"
          />
        </div>
        <div>
          <p className="text-white font-black text-sm leading-tight">
            Alumni Hub
          </p>
          <p className="text-brand-300 text-xs">Ateneo de Davao</p>
        </div>
      </div>

      {/* User Card */}
      <div className="mx-4 mt-5 bg-brand-800 rounded-2xl p-4 border border-brand-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-400 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
            SL
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">
              Sophia Laforteza
            </p>
            <p className="text-brand-300 text-xs truncate">
              AB Communications '24
            </p>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {navItems.map((item) => {
          const active =
            pathname === item.path || pathname.startsWith(item.path + "/");
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all relative ${
                active
                  ? "bg-white text-brand-900 shadow-sm font-semibold"
                  : "text-brand-200 hover:bg-brand-800 hover:text-white"
              }`}
            >
              <span className="text-lg leading-none">{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 pb-6 space-y-1 border-t border-brand-700 pt-4">
        <button
          onClick={() => navigate("/donations/checkout")}
          className="w-full bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold py-3 rounded-xl text-sm transition-colors"
        >
          💝 Donate Now
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-red-900 text-brand-400 hover:text-red-400 font-medium py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 hover:bg-brand-800"
        >
          <span>🚪</span> Log Out
        </button>
      </div>
    </aside>
  );
}
