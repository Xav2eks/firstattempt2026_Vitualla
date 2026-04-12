import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import AdminBottomNav from "../components/AdminBottomNav.jsx";

const tabs = ["Global Rank", "By Batch", "Recent Activity"];

const topThree = [
  { rank: 2, year: "2008", raised: "$38.1K", participation: "78%", icon: "🥈" },
  { rank: 1, year: "2012", raised: "$42.5K", participation: "91%", icon: "🥇" },
  { rank: 3, year: "2015", raised: "$31.2K", participation: "72%", icon: "🥉" },
];

const rankings = [
  {
    rank: 4,
    year: "2005",
    participation: "64%",
    raised: "$28,900",
    donors: 84,
  },
  {
    rank: 5,
    year: "1998",
    participation: "58%",
    raised: "$24,200",
    donors: 71,
  },
  {
    rank: 6,
    year: "2018",
    participation: "52%",
    raised: "$18,500",
    donors: 63,
  },
  {
    rank: 7,
    year: "2021",
    participation: "45%",
    raised: "$12,100",
    donors: 48,
  },
  { rank: 8, year: "2003", participation: "41%", raised: "$9,800", donors: 39 },
];

export default function BatchLeaderboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Global Rank");

  return (
    <MobileShell>
      {/* Admin Header */}
      <div className="bg-gradient-to-br from-admin-900 to-admin-700 px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/admin/home")}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              ←
            </button>
            <div>
              <p className="text-admin-300 text-[10px] font-semibold uppercase tracking-widest">
                Admin View
              </p>
              <h1 className="text-white text-xl font-black">
                Batch Leaderboard
              </h1>
            </div>
          </div>
          {/* Export button — admin-only action */}
          <button className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors">
            ⬇ Export
          </button>
        </div>

        {/* Summary stats row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { label: "Total Raised", value: "$1.2M+" },
            { label: "Active Batches", value: "42" },
            { label: "Total Donors", value: "1,840" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl p-3 text-center border border-white/10"
            >
              <p className="text-white font-black text-base">{s.value}</p>
              <p className="text-admin-300 text-[10px] font-semibold uppercase tracking-wide mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab
                  ? "bg-white text-admin-800"
                  : "bg-white/20 text-white/80 hover:bg-white/30"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4 space-y-4 pb-4">
        {/* Podium */}
        <div className="bg-gradient-to-br from-admin-900 to-admin-700 rounded-2xl p-5">
          <p className="text-admin-300 text-[10px] font-black uppercase tracking-widest mb-4 text-center">
            Top Performing Batches
          </p>
          <div className="flex items-end justify-center gap-3">
            {topThree.map((b, i) => {
              const isFirst = b.rank === 1;
              return (
                <div
                  key={i}
                  className={`flex flex-col items-center ${isFirst ? "order-2" : b.rank === 2 ? "order-1" : "order-3"}`}
                >
                  <span className="text-2xl mb-1">{b.icon}</span>
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-2 ${
                      isFirst ? "bg-amber-400" : "bg-white/20"
                    }`}
                  >
                    🎓
                  </div>
                  <p className="text-white font-black text-base">{b.year}</p>
                  <div
                    className={`mt-2 rounded-t-xl flex flex-col items-center justify-end pb-2 px-3 ${
                      isFirst ? "h-24 bg-admin-500/60" : "h-16 bg-admin-600/50"
                    }`}
                    style={{ minWidth: "72px" }}
                  >
                    <p className="text-white font-black text-sm">{b.raised}</p>
                    <p className="text-admin-300 text-[9px] font-semibold uppercase">
                      Raised
                    </p>
                    <p className="text-white/70 text-[9px]">
                      {b.participation} participated
                    </p>
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
            <button className="text-admin-700 text-xs font-semibold flex items-center gap-1">
              Filter ☰
            </button>
          </div>

          <div className="space-y-3">
            {rankings.map((item) => (
              <div
                key={item.rank}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 border border-gray-100 hover:border-admin-200 hover:shadow-md transition-all"
              >
                {/* Rank badge */}
                <div className="w-9 h-9 rounded-full bg-admin-100 text-admin-800 flex items-center justify-center font-black text-base flex-shrink-0">
                  {item.rank}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-gray-900">
                      Class of {item.year}
                    </p>
                    <span className="text-xs font-bold text-gray-500">
                      {item.donors} donors
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {item.participation} Participation · {item.raised}
                  </p>
                  <div className="mt-1.5 bg-gray-100 rounded-full h-1.5 w-full">
                    <div
                      className="h-1.5 rounded-full bg-admin-500"
                      style={{ width: item.participation }}
                    />
                  </div>
                </div>

                {/* Admin action */}
                <button className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold bg-admin-100 text-admin-700 hover:bg-admin-200 transition-colors flex items-center gap-1">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Admin note */}
        <div className="bg-admin-900 rounded-2xl p-4 flex gap-3 items-start">
          <span className="text-lg flex-shrink-0">🔒</span>
          <div>
            <p className="text-white font-bold text-sm">Admin-only View</p>
            <p className="text-admin-300 text-xs mt-0.5 leading-relaxed">
              This leaderboard is visible only to administrators. Alumni see an
              aggregated version without donor counts or export access.
            </p>
          </div>
        </div>
      </div>

      <AdminBottomNav />
    </MobileShell>
  );
}
