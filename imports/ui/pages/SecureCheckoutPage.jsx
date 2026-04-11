import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import TopBar from '../components/TopBar.jsx';
import BottomNav from '../components/BottomNav.jsx';

const presetAmounts = ['₱500', '₱1,000', '₱5,000'];
const paymentMethods = [
  { id: 'gcash',  label: 'GCash',            icon: '💙' },
  { id: 'maya',   label: 'Maya',             icon: '💚' },
  { id: 'card',   label: 'Credit / Debit Card', icon: '💳' },
];

export default function SecureCheckoutPage() {
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState('₱1,000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('gcash');
  const [anonymous, setAnonymous] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <MobileShell>
      <TopBar title="Secure Checkout" backPath="/donations/campaign/1" />

      <div className="px-4 py-4 space-y-4">
        {/* Campaign Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-brand-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl">🎓</span>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Scholarship Fund 2024</p>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mt-0.5">Campaign Donation</p>
          </div>
        </div>

        {/* Select Amount */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Select Amount</p>
          <div className="flex gap-2 mb-3">
            {presetAmounts.map(amt => (
              <button
                key={amt}
                onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-all ${
                  selectedAmount === amt && !customAmount
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-gray-200 text-gray-700 hover:border-brand-300'
                }`}
              >
                {amt}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm">₱</span>
            <input
              type="number"
              placeholder="Custom Amount"
              value={customAmount}
              onChange={e => { setCustomAmount(e.target.value); setSelectedAmount(''); }}
              className="w-full pl-7 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>
        </div>

        {/* Email Receipt */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email Receipt</p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <p className="text-xs text-gray-400 mt-1.5">Required for your digital donation receipt.</p>

          {/* Anonymous toggle */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div>
              <p className="text-sm font-semibold text-gray-800">Donate Anonymously</p>
              <p className="text-xs text-gray-400">Your name won't be shown publicly.</p>
            </div>
            <button
              onClick={() => setAnonymous(!anonymous)}
              className={`w-12 h-6 rounded-full transition-colors relative ${anonymous ? 'bg-brand-600' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-white shadow absolute top-0.5 transition-transform ${anonymous ? 'translate-x-6' : 'translate-x-0.5'}`} />
            </button>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Payment Method</p>
            <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
              <span>✅</span> Verified & Secure
            </span>
          </div>
          <div className="space-y-2.5">
            {paymentMethods.map(m => (
              <button
                key={m.id}
                onClick={() => setPaymentMethod(m.id)}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 transition-all ${
                  paymentMethod === m.id ? 'border-brand-600 bg-brand-50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="text-2xl">{m.icon}</span>
                <span className="font-semibold text-gray-800 text-sm flex-1 text-left">{m.label}</span>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === m.id ? 'border-brand-600' : 'border-gray-300'
                }`}>
                  {paymentMethod === m.id && <div className="w-2.5 h-2.5 rounded-full bg-brand-600" />}
                </div>
              </button>
            ))}
            {/* Security icons */}
            <div className="flex justify-center gap-4 pt-1">
              {['🔒','🛡️','💳'].map((icon, i) => (
                <span key={i} className="text-xl text-gray-300">{icon}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
            Message for Receivers <span className="text-gray-300 font-normal normal-case">(Optional)</span>
          </p>
          <textarea
            placeholder="Leave a word of encouragement..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          />
        </div>

        {/* Complete Button */}
        <button
          onClick={() => navigate('/donations/history')}
          className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-4 rounded-2xl text-base shadow-lg transition-colors"
        >
          Complete Donation
        </button>

        <p className="text-center text-xs text-gray-400 pb-2">
          🔒 Your payment is encrypted and secure
        </p>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
