import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import TopBar from '../components/TopBar.jsx';
import BottomNav from '../components/BottomNav.jsx';

const certificates = [
  {
    id: 1,
    campaign: 'Library Fund 2024',
    amount: '$500.00',
    date: 'Oct 12, 2024',
    color: 'from-slate-100 to-slate-200',
    textColor: 'text-slate-700',
    verified: true,
  },
  {
    id: 2,
    campaign: 'Science Lab Expansion',
    amount: '$1,200.00',
    date: 'Aug 05, 2024',
    color: 'from-teal-50 to-teal-100',
    textColor: 'text-teal-800',
    verified: true,
  },
  {
    id: 3,
    campaign: 'Annual Sports Meet',
    amount: '$250.00',
    date: 'May 20, 2024',
    color: 'from-amber-50 to-amber-100',
    textColor: 'text-amber-800',
    verified: true,
  },
];

export default function CertificateVaultPage() {
  const navigate = useNavigate();
  const [autoShare, setAutoShare] = useState(true);

  return (
    <MobileShell>
      {/* Custom Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate('/profile')}
          className="text-brand-700 text-sm font-semibold flex items-center gap-1 hover:underline"
        >
          ← Profile
        </button>
        <span className="text-gray-300">|</span>
        <h1 className="font-bold text-gray-900 text-sm">Certificate Vault</h1>
      </div>

      <div className="px-4 pt-4 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-black text-gray-900">Your Impact</h2>

        {/* Auto-share toggle */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900 text-sm">Auto-share to Profile</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed max-w-[220px]">
                Allow other alumni to see your contributions and inspire the community through your generosity.
              </p>
            </div>
            <button
              onClick={() => setAutoShare(!autoShare)}
              className={`w-14 h-7 rounded-full transition-colors relative flex-shrink-0 ml-3 ${autoShare ? 'bg-brand-600' : 'bg-gray-200'}`}
            >
              <div className={`w-6 h-6 rounded-full bg-white shadow absolute top-0.5 transition-transform ${autoShare ? 'translate-x-7' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>

        {/* Certificates List */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
              Recent Certificates ({certificates.length})
            </p>
            <button className="text-brand-700 text-xs font-semibold">☰</button>
          </div>

          <div className="space-y-4">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Certificate Preview */}
                <div className={`bg-gradient-to-br ${cert.color} p-6 flex flex-col items-center justify-center min-h-[120px] relative`}>
                  {/* Decorative certificate look */}
                  <div className="border-2 border-dashed border-current opacity-20 absolute inset-3 rounded-xl" />
                  <div className={`text-center ${cert.textColor}`}>
                    <p className="font-serif italic text-sm font-medium">Certificate</p>
                    <p className="text-[10px] uppercase tracking-widest mt-0.5 opacity-70">of Donation</p>
                    <p className="font-black text-sm mt-2">SOPHIA LAFORTEZA</p>
                    <p className="text-[10px] mt-1 opacity-60">for outstanding support to</p>
                    <p className="font-bold text-xs mt-0.5">{cert.campaign}</p>
                  </div>

                  {/* Verified badge */}
                  {cert.verified && (
                    <div className="absolute bottom-2 left-2 bg-green-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide flex items-center gap-1">
                      <span>✓</span> Verified
                    </div>
                  )}
                </div>

                {/* Certificate Info */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{cert.campaign}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      <span className="font-semibold text-brand-600">{cert.amount}</span>
                      {' · '}{cert.date}
                    </p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors">
                    ›
                  </button>
                </div>

                {/* Actions */}
                <div className="px-4 pb-3 flex gap-2">
                  <button className="flex-1 border border-gray-200 text-gray-600 text-xs font-semibold py-2 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                    <span>⬇</span> Download
                  </button>
                  <button className="flex-1 border border-brand-200 text-brand-700 text-xs font-semibold py-2 rounded-xl hover:bg-brand-50 transition-colors flex items-center justify-center gap-1">
                    <span>↗</span> Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Impact Summary */}
        <div className="bg-brand-800 rounded-2xl p-4 text-white">
          <p className="text-xs font-semibold text-brand-200 uppercase tracking-wide mb-3">Total Impact</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-black">$1,950</p>
              <p className="text-brand-300 text-xs mt-0.5">Total Donated</p>
            </div>
            <div>
              <p className="text-2xl font-black">3</p>
              <p className="text-brand-300 text-xs mt-0.5">Certificates Earned</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
