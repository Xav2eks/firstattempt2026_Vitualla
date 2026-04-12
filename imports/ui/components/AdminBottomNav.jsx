import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/admin/home", icon: "🏠" },
  { label: "Donation", path: "/admin/campaigns", icon: "💝" },
  {
    label: "Notifications",
    path: "/admin/notifications",
    icon: "🔔",
    badge: 5,
  },
];

export default function AdminBottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="bg-white border-t border-gray-200 flex justify-around items-center py-2.5 pb-4 w-full sticky bottom-0 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center gap-0.5 relative px-4"
          >
            {/* Icon + Badge wrapper */}
            <div className="relative">
              <span className="text-xl">{item.icon}</span>
              {/* Badge */}
              {item.badge && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Label */}
            <span
              className={`text-[10px] font-semibold ${
                isActive ? "text-indigo-600" : "text-gray-400"
              }`}
            >
              {item.label}
            </span>

            {/* Active dot indicator */}
            {isActive && (
              <div className="w-1 h-1 rounded-full bg-indigo-600 mt-0.5" />
            )}
          </button>
        );
      })}
    </div>
  );
}
