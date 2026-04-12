import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import AdminBottomNav from '../components/AdminBottomNav.jsx';

const statusStyles = {
  ACTIVE:       'bg-green-100 text-green-700 border-green-200',
  'ENDING SOON':'bg-orange-100 text-orange-700 border-orange-200',
  PAUSED:       'bg-gray-100 text-gray-500 border-gray-200',
};

const campaigns = [
  {
    title: 'Scholarship Fund 2024',
    status: 'ACTIVE',
    raised: '₱45,000',
    goal: '₱60,000',
    pct: 75,
    color: 'from-brand-600 to-brand-800',
  },
  {
    title: 'Library Renovation Project',
    status: 'ENDING SOON',
    raised: '₱110,000',
    goal: '₱120,000',
    pct: 92,
    color: 'from-slate-500 to-slate-700',
  },
  {
    title: 'Grand Alumni Homecoming...',
    status: 'ACTIVE',
    raised: '₱25,000',
    goal: '₱100,000',
    pct: 25,
    color: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Annual Health & Medical Mis...',
    status: 'PAUSED',
    raised: '₱5,000',
    goal: '₱20,000',
    pct: 25,
    color: 'from-gray-500 to-gray-700',
  },
];

export default function AdminCampaignsPage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-gradient-to-br from-admin-900 to-admin-700 px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-admin-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              MB
            </div>
            <div>
              <p className="text-admin-300 text-[10px] font-medium uppercase tracking-wide">Welcome, Admin!</p>
              <p className="text-white font-bold text-sm">Manon Bannerman</p>
            </div>
          </div>
          <button className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white text-xl transition-colors">
            🔍
          </button>
        </div>

        {/* Create Button */}
        <button
          onClick={() => navigate('/admin/campaigns/create')}
          className="w-full mt-4 bg-white text-admin-900 font-bold py-3.5 rounded-2xl text-sm hover:bg-admin-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          <span className="text-lg">+</span> Create Donation
        </button>
      </div>

      {/* Campaign List */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Current Donation Campaigns</h2>
          <button className="text-brand-700 text-sm font-semibold hover:underline">See all</button>
        </div>

        <div className="space-y-3 pb-4">
          {campaigns.map((c, i) => (
            <button
              key={i}
              onClick={() => navigate('/donations/campaign/1')}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all text-left flex gap-3 items-center"
            >
              {/* Thumbnail */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${c.color} flex-shrink-0`} />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border uppercase tracking-wide ${statusStyles[c.status]}`}>
                    {c.status}
                  </span>
                  <button className="text-gray-300 hover:text-gray-500 text-lg leading-none">⋯</button>
                </div>
                <p className="font-bold text-gray-900 text-sm truncate">{c.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{c.raised} / {c.goal}</p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${c.pct >= 80 ? 'bg-green-500' : c.pct >= 50 ? 'bg-brand-500' : 'bg-gray-400'}`}
                      style={{ width: `${c.pct}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-gray-600">{c.pct}%</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AdminBottomNav />
    </MobileShell>
  );
}
