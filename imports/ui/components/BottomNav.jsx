import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home',          path: '/home',          icon: '🏠' },
  { label: 'Events',        path: '/events',         icon: '📅' },
  { label: 'Donations',     path: '/donations',      icon: '💝' },
  { label: 'Notifications', path: '/notifications',  icon: '🔔', badge: 3 },
  { label: 'Profile',       path: '/profile',        icon: '👤' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex">
        {navItems.map(item => {
          const active = pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex-1 flex flex-col items-center justify-center py-2 gap-0.5 text-xs font-medium transition-colors relative ${
                active ? 'text-brand-700' : 'text-gray-400 hover:text-gray-600'
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
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-brand-700 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
