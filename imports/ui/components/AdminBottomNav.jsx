import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const adminNavItems = [
  { label: 'Home',          path: '/admin/home',          icon: '🏠' },
  { label: 'Donation',      path: '/admin/campaigns',     icon: '💝' },
  { label: 'Notifications', path: '/admin/notifications', icon: '🔔', badge: 5 },
];

export default function AdminBottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-admin-900 border-t border-admin-700 shadow-lg z-50">
      <div className="flex">
        {adminNavItems.map(item => {
          const active = pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-medium transition-colors relative ${
                active ? 'text-admin-300' : 'text-admin-500 hover:text-admin-400'
              }`}
            >
              <span className="text-xl leading-none">{item.icon}</span>
              <span>{item.label}</span>
              {item.badge && (
                <span className="absolute top-1 right-1/4 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-admin-300 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
