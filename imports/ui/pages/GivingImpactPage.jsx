import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import BottomNav from '../components/BottomNav.jsx';

const drives = [
  { title: 'Calamity Relief: Davao', desc: 'Urgent support for flood victims.', amounts: ['₱500','₱1000','₱2000'] },
  { title: 'Animal Shelter',         desc: 'Urgent support for animals in shelter.', amounts: ['₱500','₱1000'] },
];

const history = [
  { icon: '🎓', name: 'Scholarship Fund', date: 'Oct 24, 2024', amount: '₱2,500' },
  { icon: '🌊', name: 'Calamity Relief',  date: 'Sep 12, 2024', amount: '₱1,500' },
];

export default function GivingImpactPage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-brand-800 px-5 pt-6 pb-5">
        <h1 className="text-white text-2xl font-bold">Giving & Impact</h1>
        <p className="text-brand-200 text-sm mt-1">Empowering the next generation of Ateneans.</p>
      </div>

      <div className="px-4 pt-5 space-y-5">
        {/* Featured Campaign */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">Featured Campaigns</h2>
            <button className="text-brand-700 text-sm font-semibold hover:underline">Slide to view</button>
          </div>
          <button
            onClick={() => navigate('/donations/campaign/1')}
            className="w-full rounded-2xl overflow-hidden shadow-md relative"
          >
            <div className="w-full h-44 bg-gradient-to-br from-brand-700 to-brand-900 flex flex-col justify-end p-4">
              <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full mb-2 self-start">
                75% Funded
              </span>
              <h3 className="text-white font-bold text-lg text-left">Scholarship Fund 2024</h3>
              <div className="mt-2 bg-white/20 rounded-full h-1.5 mb-1">
                <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: '75%' }} />
              </div>
              <p className="text-brand-200 text-xs text-left">₱750k / ₱1M</p>
            </div>
            <div className="bg-brand-700/90 px-4 py-3">
              <button className="w-full bg-white text-brand-800 font-bold py-2.5 rounded-xl text-sm hover:bg-brand-50 transition-colors">
                View Campaign
              </button>
            </div>
          </button>
        </div>

        {/* Recent Donation Drives */}
        <div>
          <h2 className="font-bold text-gray-900 mb-3">Recent Donation Drives</h2>
          <div className="grid grid-cols-2 gap-3">
            {drives.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm">{d.title}</h3>
                <p className="text-xs text-gray-400 mt-0.5 mb-3">{d.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {d.amounts.map(a => (
                    <button key={a} className="px-2.5 py-1 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 hover:border-brand-400 hover:text-brand-700 transition-colors">
                      {a}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/donations/checkout')}
                  className="w-full bg-brand-700 text-white text-xs font-bold py-2 rounded-xl hover:bg-brand-800 transition-colors"
                >
                  Donate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Donation History Summary */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-gray-900">My Donation History</h2>
            <button onClick={() => navigate('/donations/history')} className="text-brand-700 text-xl">🔄</button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Total Contributed</p>
              <p className="font-black text-xl text-gray-900">₱5,000</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide">Campaigns Supported</p>
              <p className="font-black text-xl text-gray-900">3</p>
            </div>
          </div>
          <div className="space-y-3">
            {history.map((h, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{h.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">{h.name}</p>
                  <p className="text-xs text-gray-400">{h.date}</p>
                </div>
                <p className="font-bold text-gray-900 text-sm">{h.amount}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate('/donations/history')}
            className="w-full mt-4 border border-brand-200 text-brand-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-brand-50 transition-colors"
          >
            View Full History
          </button>
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
