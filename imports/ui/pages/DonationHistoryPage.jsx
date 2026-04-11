import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import TopBar from '../components/TopBar.jsx';
import BottomNav from '../components/BottomNav.jsx';

const transactions = [
  { icon: '🎓', name: 'Scholarship Fund', date: 'Oct 24, 2024 · GCash',  amount: '₱2,500' },
  { icon: '🌊', name: 'Calamity Relief',  date: 'Sep 12, 2024 · Maya',   amount: '₱1,500' },
  { icon: '⛪', name: 'Chapel Renovation', date: 'Aug 05, 2024 · Visa',  amount: '₱5,000' },
];

const impactBadges = [
  { icon: '🏅', label: 'Supported 5 Campaigns', unlocked: true },
  { icon: '💯', label: '₱100k Milestone',        unlocked: false },
  { icon: '⭐', label: 'Top Donor Badge',         unlocked: false },
];

const recommended = [
  { title: 'Digital Media Equipment Fund', color: 'from-teal-500 to-teal-700' },
  { title: 'New Broadcasting Studio',      color: 'from-brand-600 to-brand-800' },
];

// Mini bar chart data
const chartBars = [
  { h: '20%' }, { h: '30%' }, { h: '45%' }, { h: '40%' },
  { h: '55%' }, { h: '70%' }, { h: '60%' }, { h: '80%' },
  { h: '90%' }, { h: '75%' }, { h: '85%' }, { h: '95%' },
];

export default function DonationHistoryPage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      <TopBar title="Donation History" backPath="/donations" />

      <div className="px-4 pt-4 space-y-4">
        {/* Giving Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Giving Summary</p>
          <div className="flex gap-8 mb-4">
            <div>
              <p className="text-3xl font-black text-gray-900">₱12,500</p>
              <p className="text-xs text-gray-400 mt-0.5">Total Donated</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand-700">8</p>
              <p className="text-xs text-gray-400 mt-0.5">Campaigns Supported</p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end gap-1 h-20">
            {chartBars.map((bar, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-sm ${i >= 8 ? 'bg-brand-700' : 'bg-brand-200'}`}
                style={{ height: bar.h }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
            <span>JAN</span><span>JUN</span><span>DEC</span>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-3">Recent Transactions</h2>
          <div className="space-y-4">
            {transactions.map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 text-xl">
                  {t.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{t.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-gray-900 text-sm">{t.amount}</p>
                  <button className="text-gray-300 hover:text-brand-600 transition-colors text-lg">⬇</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Impact */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-900 mb-3">Your Impact</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {impactBadges.map((b, i) => (
              <div key={i} className={`flex-shrink-0 w-28 flex flex-col items-center text-center p-3 rounded-2xl border-2 ${
                b.unlocked ? 'border-amber-300 bg-amber-50' : 'border-gray-100 bg-gray-50 opacity-50'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mb-1 ${
                  b.unlocked ? 'bg-amber-100' : 'bg-gray-100'
                }`}>
                  {b.unlocked ? b.icon : '🔒'}
                </div>
                <p className="text-[10px] font-semibold text-gray-700 leading-tight">{b.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended For You */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="mb-1">
            <h2 className="font-bold text-gray-900">Recommended for You</h2>
            <p className="text-xs text-gray-400">Based on AB Comm Batch '26</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3">
            {recommended.map((r, i) => (
              <button
                key={i}
                onClick={() => navigate('/donations/campaign/1')}
                className="rounded-2xl overflow-hidden shadow-sm"
              >
                <div className={`h-24 bg-gradient-to-br ${r.color} flex items-end p-3`}>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight text-left">{r.title}</p>
                    <div className="mt-1 bg-white/30 rounded-full h-1">
                      <div className="bg-white h-1 rounded-full" style={{ width: '40%' }} />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
