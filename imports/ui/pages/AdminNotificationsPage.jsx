import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import AdminBottomNav from '../components/AdminBottomNav.jsx';

const tabs = ['All', 'Campaigns', 'User Reports'];

const notifications = [
  {
    id: 1,
    urgent: true,
    icon: '🔴',
    iconBg: 'bg-red-100',
    title: 'System Alert: Server Maintenance',
    desc: 'Maintenance is scheduled for midnight 12:00 AM PSTI. Core donation services may be briefly unavailable.',
    time: 'Just now',
    unread: true,
  },
  {
    id: 2,
    icon: '✨',
    iconBg: 'bg-admin-100',
    title: 'New Campaign Request',
    desc: 'Sarah Jerome submitted "Clean Water Initiative" for approval. Review required.',
    time: '45m ago',
    unread: true,
    action: 'Review',
  },
  {
    id: 3,
    icon: '⏳',
    iconBg: 'bg-amber-100',
    title: 'Verification Pending',
    desc: '14 new donor identities are waiting for manual verification in the admin queue.',
    time: '2h ago',
    unread: true,
    action: 'Verify',
  },
  {
    id: 4,
    icon: '🎯',
    iconBg: 'bg-green-100',
    title: 'Goal Reached: Typhoon Relief',
    desc: 'Success! The typhoon relief fund has reached its target of $50,000. Campaign closed.',
    time: '4h ago',
    unread: false,
  },
];

const olderNotifs = [
  {
    id: 5,
    icon: '📊',
    iconBg: 'bg-brand-100',
    title: 'Monthly Donor Report Ready',
    desc: 'The October 2024 donor engagement report is ready. 142 new donors this month.',
    time: 'Yesterday',
    unread: false,
    action: 'Download',
  },
  {
    id: 6,
    icon: '🚫',
    iconBg: 'bg-red-100',
    title: 'Campaign Flagged',
    desc: '"Sports Equipment Drive" was flagged for review due to incomplete documentation.',
    time: 'Yesterday',
    unread: false,
    action: 'Review',
  },
  {
    id: 7,
    icon: '👤',
    iconBg: 'bg-gray-100',
    title: 'New Alumni Registered',
    desc: '8 new alumni completed registration and are pending batch verification.',
    time: '2d ago',
    unread: false,
  },
];

export default function AdminNotificationsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const AdminNotifCard = ({ notif }) => (
    <div className={`bg-white rounded-2xl p-4 shadow-sm flex gap-3 border ${
      notif.unread ? 'border-admin-200' : 'border-gray-100'
    } ${notif.urgent ? 'border-l-4 border-l-red-500' : ''}`}>
      <div className={`w-11 h-11 rounded-xl ${notif.iconBg} flex items-center justify-center flex-shrink-0 text-xl`}>
        {notif.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm font-semibold leading-tight ${notif.unread ? 'text-gray-900' : 'text-gray-600'}`}>
            {notif.title}
          </p>
          <span className="text-[10px] text-gray-400 flex-shrink-0 mt-0.5">{notif.time}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1 leading-relaxed">{notif.desc}</p>
        {notif.action && (
          <button className="mt-2 bg-admin-700 hover:bg-admin-800 text-white text-xs font-bold px-4 py-1.5 rounded-lg transition-colors">
            {notif.action}
          </button>
        )}
      </div>
      {notif.unread && (
        <div className="w-2 h-2 rounded-full bg-admin-500 flex-shrink-0 mt-1" />
      )}
    </div>
  );

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-gradient-to-br from-admin-900 to-admin-700 px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-2xl font-black">Notifications</h1>
          <button className="bg-white/20 hover:bg-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
            Mark all as read
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-white text-admin-800'
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
            {notifications.filter(n => n.urgent).map(n => <AdminNotifCard key={n.id} notif={n} />)}
          </div>
        </div>

        {/* Recent */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Recent</p>
          <div className="space-y-3">
            {notifications.filter(n => !n.urgent).map(n => <AdminNotifCard key={n.id} notif={n} />)}
          </div>
        </div>

        {/* Yesterday */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Yesterday</p>
          <div className="space-y-3">
            {olderNotifs.map(n => <AdminNotifCard key={n.id} notif={n} />)}
          </div>
        </div>
      </div>

      <AdminBottomNav />
    </MobileShell>
  );
}
