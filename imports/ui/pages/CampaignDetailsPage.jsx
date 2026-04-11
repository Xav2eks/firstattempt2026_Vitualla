import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import BottomNav from '../components/BottomNav.jsx';

const testimonials = [
  {
    quote: "I was a scholar once, and now it's my turn to pay it forward. ADDU gave me the foundation I needed.",
    label: "CLASS OF '98 ALUMNUS",
    color: 'bg-blue-50 border-blue-100',
  },
  {
    quote: "Small acts of giving can transform lives. Every peso of support means the world to a struggling student.",
    label: "ANONYMOUS DONOR",
    color: 'bg-pink-50 border-pink-100',
  },
];

export default function CampaignDetailsPage() {
  const navigate = useNavigate();

  return (
    <MobileShell noPadBottom>
      <div className="flex flex-col min-h-screen">
        {/* Hero Banner */}
        <div className="relative">
          <div className="w-full h-64 bg-gradient-to-br from-brand-700 to-brand-900 flex items-end">
            {/* Decorative circle */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-48 h-48 rounded-full bg-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Back & Share */}
            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <button
                onClick={() => navigate('/donations')}
                className="w-9 h-9 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white"
              >
                ←
              </button>
              <button className="w-9 h-9 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white text-lg">
                ↗
              </button>
            </div>

            {/* Title overlay */}
            <div className="relative z-10 p-5 w-full">
              <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                EDUCATION
              </span>
              <h1 className="text-white text-2xl font-black">Scholarship Fund 2024</h1>
              <p className="text-white/80 text-sm mt-0.5">Goal: ₱1,000,000.00</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="bg-white px-5 py-3 border-b border-gray-100">
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span className="font-semibold text-brand-700">75% Funded</span>
              <span>₱750,000 of ₱1,000,000</span>
            </div>
            <div className="bg-gray-100 rounded-full h-2.5">
              <div className="bg-brand-600 h-2.5 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 pb-32">
          {/* The Story */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">The Story</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every year, hundreds of bright and deserving students face the risk of dropping out due to
              financial constraints. The Scholarship Fund 2024 aims to provide full tuition coverage for
              50 incoming freshmen from underprivileged backgrounds in Mindanao. Your contribution ensures
              that the Blue Knight spirit continues to soar, breaking cycles of poverty through quality
              Jesuit education.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Students',  value: '50',    icon: '🎓' },
              { label: 'Donors',    value: '142',   icon: '❤️' },
              { label: 'Days Left', value: '23',    icon: '📅' },
            ].map((s, i) => (
              <div key={i} className="bg-brand-50 rounded-2xl p-3 text-center">
                <span className="text-xl">{s.icon}</span>
                <p className="font-black text-brand-800 text-lg mt-1">{s.value}</p>
                <p className="text-xs text-brand-600">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Donor Impact */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Donor Impact</h2>
            <div className="space-y-3">
              {testimonials.map((t, i) => (
                <div key={i} className={`${t.color} border rounded-2xl p-4`}>
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-6 h-6 rounded-full bg-brand-300 flex items-center justify-center text-xs font-bold text-brand-800">
                      A
                    </div>
                    <span className="text-[10px] font-bold text-brand-700 tracking-wide">{t.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Updates */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3">Recent Updates</h2>
            <div className="space-y-3">
              {[
                { date: 'Oct 20, 2024', text: 'Campaign reached 75% of its funding goal! Thank you to all 142 donors.' },
                { date: 'Oct 10, 2024', text: 'First batch of scholars identified — 50 students from Davao, Cotabato, and Zamboanga.' },
              ].map((u, i) => (
                <div key={i} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-1 rounded-full bg-brand-500 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] font-semibold text-brand-600 uppercase tracking-wide">{u.date}</p>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{u.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-5 py-4 z-40">
          <button
            onClick={() => navigate('/donations/checkout')}
            className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-4 rounded-2xl text-base shadow-lg transition-colors"
          >
            💝 Donate Now
          </button>
        </div>

        <BottomNav />
      </div>
    </MobileShell>
  );
}
