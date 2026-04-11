import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import TopBar from '../components/TopBar.jsx';
import BottomNav from '../components/BottomNav.jsx';

const tabs = ['Global Rank', 'Your Batch', 'Recent Activity'];

const topThree = [
  { rank: 2, year: '2008', raised: '$38.1K', participation: '78%', icon: '🥈' },
  { rank: 1, year: '2012', raised: '$42.5K', participation: '91%', icon: '🥇' },
  { rank: 3, year: '2015', raised: '$31.2K', participation: '72%', icon: '🥉' },
];

const rankings = [
  { rank: 4, year: '2005', participation: '64%', raised: '$28,900', isYours: false },
  { rank: 5, year: '1998', participation: '58%', raised: '$24,200', isYours: false },
  { rank: 6, year: '2018', participation: '52%', raised: '$18,500', isYours: true  },
  { rank: 7, year: '2021', participation: '45%', raised: '$12,100', isYours: false },
  { rank: 8, year: '2003', participation: '41%', raised: '$9,800',  isYours: false },
];

export default function BatchLeaderboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Global Rank');

  return (
    <MobileShell>
      <TopBar title="Batch Leaderboard" backPath="/home" rightIcon="ℹ" />

      {/* Tabs */}
      <div className="bg-brand-800 px-4 pb-3">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-white text-brand-800'
                  : 'text-brand-300 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Podium */}
        <div className="bg-gradient-to-br from-brand-900 to-brand-700 rounded-2xl p-5">
          <div className="flex items-end justify-center gap-3">
            {topThree.map((b, i) => {
              const isFirst = b.rank === 1;
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center ${isFirst ? 'order-2' : b.rank === 2 ? 'order-1' : 'order-3'}`}
                >
                  <span className="text-2xl mb-1">{b.icon}</span>
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-2 ${
                    isFirst ? 'bg-amber-400' : 'bg-white/20'
                  }`}>
                    🎓
                  </div>
                  <p className="text-white font-black text-base">{b.year}</p>
                  <div className={`mt-2 rounded-t-xl flex flex-col items-center justify-end pb-2 px-3 ${
                    isFirst ? 'h-24 bg-brand-500/60' : 'h-16 bg-brand-600/50'
                  }`} style={{ minWidth: '72px' }}>
                    <p className="text-white font-black text-sm">{b.raised}</p>
                    <p className="text-brand-300 text-[9px] font-semibold uppercase">Raised</p>
                    <p className="text-white/70 text-[9px]">{b.participation} participated</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Rankings */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">All Batch Rankings</h2>
            <button className="text-brand-700 text-xs font-semibold flex items-center gap-1">
              Filter by Year ☰
            </button>
          </div>

          <div className="space-y-3">
            {rankings.map((item) => (
              <div
                key={item.rank}
                className={`bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 border-2 transition-all ${
                  item.isYours ? 'border-brand-400 bg-brand-50' : 'border-transparent'
                }`}
              >
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-base flex-shrink-0 ${
                  item.isYours ? 'bg-brand-700 text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900">Class of {item.year}</p>
                    {item.isYours && (
                      <span className="bg-brand-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Your Batch
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{item.participation} Participation · {item.raised}</p>
                  {/* Mini progress bar */}
                  <div className="mt-1.5 bg-gray-100 rounded-full h-1.5 w-full">
                    <div
                      className={`h-1.5 rounded-full ${item.isYours ? 'bg-brand-600' : 'bg-gray-300'}`}
                      style={{ width: item.participation }}
                    />
                  </div>
                </div>
                <button className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 ${
                  item.isYours
                    ? 'bg-brand-100 text-brand-700 hover:bg-brand-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                  {item.isYours ? '< Invite' : '👏 Cheer'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Footer */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Total Alumni Raised</p>
              <p className="font-black text-2xl text-gray-900 mt-0.5">$1.2M+</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Active Batches</p>
              <p className="font-black text-2xl text-gray-900 mt-0.5">42 Classes</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
