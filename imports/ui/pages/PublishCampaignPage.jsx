import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import AdminBottomNav from "../components/AdminBottomNav.jsx";

const presetAmounts = ["₱500", "₱1,000", "₱5,000"];

export default function PublishCampaignPage() {
  const navigate = useNavigate();
  const [selectedPresets, setSelectedPresets] = useState(["₱500"]);
  const [customAmount, setCustomAmount] = useState("");
  const [monthlyEnabled, setMonthlyEnabled] = useState(false);

  const togglePreset = (amt) => {
    setSelectedPresets((prev) =>
      prev.includes(amt) ? prev.filter((p) => p !== amt) : [...prev, amt],
    );
  };

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-gradient-to-br from-admin-900 to-admin-700 px-4 py-4 flex items-center gap-3 shrink-0">
        <button
          onClick={() => navigate("/admin/campaigns/create")}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
        >
          ←
        </button>
        <h1 className="text-white font-bold text-base flex-1">
          Donation Options & Review
        </h1>
      </div>

      {/* Step Indicator */}
      <div className="bg-admin-800 px-4 pb-4 shrink-0">
        <div className="flex items-center gap-2">
          {[1, 2].map((s) => (
            <React.Fragment key={s}>
              <div
                className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-black border-2 transition-colors ${
                  s < 2
                    ? "bg-admin-400 text-white border-admin-400"
                    : "bg-white text-admin-800 border-white"
                }`}
              >
                {s < 2 ? "✓" : s}
              </div>
              {s < 2 && (
                <div className="flex-1 h-0.5 rounded-full bg-admin-400" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          <p className="text-xs text-admin-400 font-medium">Campaign Details</p>
          <p className="text-xs text-admin-300 font-semibold">
            Donation Options & Review
          </p>
        </div>
      </div>

      {/* ── SCROLLABLE BODY ── */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="px-4 py-4 space-y-5">
          {/* Suggested Donation Amounts */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
              Suggested Donation Amounts
            </p>
            <div className="flex gap-2 mb-4">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => togglePreset(amt)}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold border-2 transition-all ${
                    selectedPresets.includes(amt)
                      ? "border-admin-600 bg-admin-600 text-white"
                      : "border-gray-200 text-gray-700 hover:border-admin-300"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">
                  ₱
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full pl-7 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-admin-500"
                />
              </div>
            </div>
          </div>

          {/* Monthly Donations Toggle */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  Enable monthly donations
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Donors can choose to give automatically every month
                </p>
              </div>
              <button
                onClick={() => setMonthlyEnabled(!monthlyEnabled)}
                className={`w-14 h-7 rounded-full transition-colors relative flex-shrink-0 ml-3 ${monthlyEnabled ? "bg-admin-600" : "bg-gray-200"}`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow absolute top-0.5 transition-transform ${monthlyEnabled ? "translate-x-7" : "translate-x-0.5"}`}
                />
              </button>
            </div>
          </div>

          {/* Campaign Preview */}
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">
              Campaign Preview
            </p>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 p-5">
                <span className="inline-block bg-admin-600 text-white text-[10px] font-black px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  Scholarship
                </span>
                <div className="bg-white rounded-xl p-3 shadow-sm">
                  <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-300 text-2xl">🖼</span>
                  </div>
                  <p className="text-xs text-center font-semibold text-gray-500">
                    Campaign Image Preview
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-black text-gray-900 text-base">
                  Scholarship Fund for Batch 2024
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Providing educational support for underprivileged and
                  deserving students from the Davao region for the ne...
                </p>
                <div className="mt-3 flex gap-3">
                  {selectedPresets.map((amt) => (
                    <span
                      key={amt}
                      className="bg-admin-50 text-admin-700 border border-admin-200 text-xs font-semibold px-3 py-1 rounded-lg"
                    >
                      {amt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3 pb-2">
            <button
              onClick={() => navigate("/admin/campaigns")}
              className="w-full bg-admin-700 hover:bg-admin-800 text-white font-bold py-4 rounded-2xl text-base shadow-lg transition-colors flex items-center justify-center gap-2"
            >
              Publish Campaign 🚀
            </button>
            <button
              onClick={() => navigate("/admin/campaigns/create")}
              className="w-full border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-2xl text-base hover:bg-gray-50 transition-colors"
            >
              Edit / Back
            </button>
          </div>
        </div>
      </div>

      <AdminBottomNav />
    </MobileShell>
  );
}
