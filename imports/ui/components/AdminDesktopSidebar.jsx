import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const adminNavItems = [
  { label: "Dashboard", path: "/admin/home", icon: "📊" },
  { label: "Campaigns", path: "/admin/campaigns", icon: "💝" },
  { label: "Create Campaign", path: "/admin/campaigns/create", icon: "➕" },
  { label: "Leaderboard", path: "/leaderboard", icon: "🏆" },
  {
    label: "Notifications",
    path: "/admin/notifications",
    icon: "🔔",
    badge: 5,
  },
];

export default function AdminDesktopSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-admin-900 fixed left-0 top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-admin-700">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg">
          <img
            src="https://www.addu.edu.ph/wp-content/uploads/2020/08/UniversitySeal240px.png"
            alt="Ateneo Logo"
          />
        </div>
        <div>
          <p className="text-white font-black text-sm leading-tight">
            Admin Portal
          </p>
          <p className="text-admin-300 text-xs">Ateneo de Davao</p>
        </div>
      </div>

      {/* Admin User Card */}
      <div className="mx-4 mt-5 bg-admin-800 rounded-2xl p-4 border border-admin-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-admin-500 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
            MB
          </div>
          <div className="min-w-0">
            <p className="text-white font-semibold text-sm truncate">
              Manon Bannerman
            </p>
            <p className="text-admin-300 text-xs">Administrator</p>
          </div>
        </div>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        {adminNavItems.map((item) => {
          const active =
            pathname === item.path || pathname.startsWith(item.path + "/");
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all relative ${
                active
                  ? "bg-white text-admin-900 shadow-sm font-semibold"
                  : "text-admin-200 hover:bg-admin-800 hover:text-white"
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

      {/* Bottom */}
      <div className="px-3 pb-6 border-t border-admin-700 pt-4 space-y-1">
        <button
          onClick={() => navigate("/admin/campaigns/create")}
          className="w-full bg-admin-500 hover:bg-admin-400 text-white font-bold py-3 rounded-xl text-sm transition-colors"
        >
          ➕ Create Campaign
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-red-900 text-admin-400 hover:text-red-400 font-medium py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 hover:bg-admin-800"
        >
          <span>🚪</span> Log Out
        </button>
      </div>
    </aside>
  );
}
