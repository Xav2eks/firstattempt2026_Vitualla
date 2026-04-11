import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import BottomNav from '../components/BottomNav.jsx';

const tabs = ['All', 'Donations', 'Admin', 'Events'];

const notifications = [
  {
    id: 1,
    urgent: true,
    icon: '⚠️',
    iconBg: 'bg-red-100',
    title: 'Emergency Fund: Typhoon Relief',
    desc: 'Immediate assistance needed for students affected by the recent flooding in Davao City.',
    time: '2m ago',
    unread: true,
    action: { label: 'Donate Now', path: '/donations/checkout' },
  },
  {
    id: 2,
    icon: '❤️',
    iconBg: 'bg-brand-100',
    title: 'Campaign Milestone',
    desc: 'Scholarship Fund for 2024 has reached 90% of its funding goal! Thank you for your support.',
    time: '45m ago',
    unread: true,
    action: { label: 'View Campaign', path: '/donations/campaign/1' },
  },
  {
    id: 3,
    icon: '📅',
    iconBg: 'bg-amber-100',
    title: 'Homecoming Tomorrow',
    desc: "Don't forget the Batch 2024 Grand Homecoming at Martin Hall starts at 6:00 PM tomorrow.",
    time: '2h ago',
    unread: true,
    action: { label: 'RSVP', path: '/events' },
  },
  {
    id: 4,
    icon: '📄',
    iconBg: 'bg-gray-100',
    title: 'Transparency Report Released',
    desc: 'The Annual Alumni Financial Transparency Report for FY 2023–2024 is now available for viewing.',
    time: '5h ago',
    unread: false,
  },
  {
    id: 5,
    icon: '💝',
    iconBg: 'bg-green-100',
    title: 'Donation Processed',
    desc: "Your donation of ₱1,500 to the 'Books for Mindanao' drive has been successfully processed.",
    time: 'Yesterday',
    unread: false,
    action: { label: 'Donate Again', path: '/donations/checkout' },
  },
  {
    id: 6,
    icon: '📍',
    iconBg: 'bg-orange-100',
    title: 'Venue Change: Networking Night',
    desc: 'The Networking Night has been moved to the Arrupe Hall Rooftop. Same time, same date.',
    time: 'Yesterday',
    unread: false,
  },
];

const olderNotifs = [
  {
    id: 7,
    icon: '✅',
    iconBg: 'bg-green-100',
    title: 'Profile Verified',
    desc: 'Your alumni identity has been verified by the ADDU Alumni Office. Welcome back!',
    time: '3d ago',
    unread: false,
  },
];

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const NotifCard = ({ notif }) => (
    <div className={`bg-white rounded-2xl p-4 shadow-sm border flex gap-3 ${
      notif.unread ? 'border-brand-200' : 'border-gray-100'
    } ${notif.urgent ? 'border-l-4 border-l-red-500' : ''}`}>
      <div className={`w-11 h-11 rounded-xl ${notif.iconBg} flex items-center justify-center flex-shrink-0 text-xl`}>
        {notif.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm font-semibold text-gray-900 leading-tight ${notif.unread ? 'text-gray-900' : 'text-gray-600'}`}>
            {notif.title}
          </p>
          <span className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5">{notif.time}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{notif.desc}</p>
        {notif.action && (
          <button
            onClick={() => navigate(notif.action.path)}
            className="mt-2 bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors"
          >
            {notif.action.label}
          </button>
        )}
      </div>
      {notif.unread && (
        <div className="w-2 h-2 rounded-full bg-brand-600 flex-shrink-0 mt-1" />
      )}
    </div>
  );

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-brand-800 px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-2xl font-black">Notifications</h1>
          <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
            Mark all as read
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-white text-brand-800'
                  : 'bg-white/20 text-white/80 hover:bg-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 space-y-5 pb-4">
        {/* Urgent */}
        <div>
          <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2">
            🚨 Urgent Updates
          </p>
          <div className="space-y-3">
            {notifications.filter(n => n.urgent).map(n => <NotifCard key={n.id} notif={n} />)}
          </div>
        </div>

        {/* Recent */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Recent</p>
          <div className="space-y-3">
            {notifications.filter(n => !n.urgent).map(n => <NotifCard key={n.id} notif={n} />)}
          </div>
        </div>

        {/* Earlier */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Earlier This Week</p>
          <div className="space-y-3">
            {olderNotifs.map(n => <NotifCard key={n.id} notif={n} />)}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
