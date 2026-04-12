import React from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import AdminBottomNav from "../components/AdminBottomNav.jsx";

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm">
    <span className="text-2xl">{icon}</span>
    <p className={`font-black text-lg mt-2 ${color || "text-gray-800"}`}>
      {value}
    </p>
    <p className="text-gray-400 text-[9px] uppercase tracking-wide font-semibold mt-0.5">
      {label}
    </p>
  </div>
);

const newsItems = [
  {
    title: "Grand Alumni Homecoming 2024",
    date: "OCT 24, 2024",
    color: "from-teal-400 to-teal-700",
  },
  {
    title: "Scholarship Goal",
    date: "OCT 12, 2024",
    color: "from-gray-500 to-gray-900",
  },
];

export default function AdminHomePage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      {/* ── HEADER ── */}
      <div className="bg-gradient-to-br from-admin-900 to-admin-700 px-5 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-violet-400 border-2 border-white/30 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
              MB
            </div>
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wide">
                Welcome, Admin!
              </p>
              <p className="text-white font-black text-lg leading-tight">
                Manon Bannerman
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="text-red-400 font-bold text-xs bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors"
          >
            LOG OUT
          </button>
        </div>
      </div>

      {/* ── SCROLLABLE BODY ── */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="bg-gradient-to-b from-white via-purple-50 to-purple-100 min-h-full px-4 pt-5 pb-6 flex flex-col gap-4">
          {/* Create Donation */}
          <button
            onClick={() => navigate("/admin/campaigns/create")}
            className="w-full bg-gradient-to-r from-indigo-600 to-violet-500 hover:from-indigo-700 hover:to-violet-600 text-white font-bold py-4 rounded-2xl transition-all text-sm tracking-wide shadow-md shadow-indigo-200"
          >
            + Create Donation
          </button>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              icon="💰"
              label="Total Funds Raised"
              value="₱12,500.00"
              color="text-green-500"
            />
            <StatCard
              icon="🎓"
              label="Scholar Supported"
              value="400 Students"
              color="text-sky-500"
            />
            <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-sm">
              <span className="text-2xl">📈</span>
              <p className="text-gray-400 text-[9px] uppercase tracking-wide font-semibold mt-2 mb-2">
                Active Campaigns
              </p>
              <div className="bg-gray-100 rounded-full h-2">
                <div
                  className="bg-green-400 h-2 rounded-full"
                  style={{ width: "75%" }}
                />
              </div>
              <p className="text-gray-800 font-bold text-sm mt-1.5">75%</p>
            </div>
            <StatCard
              icon="📊"
              label="Batch Ranking"
              value="#3 Top Class"
              color="text-indigo-500"
            />
          </div>

          {/* Latest News */}
          <div className="bg-white/60 rounded-2xl p-4 border border-purple-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-indigo-900 text-sm">Latest News</h2>
              <button className="text-indigo-600 text-xs font-semibold hover:underline">
                See all
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {newsItems.map((item, i) => (
                <button
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-sm aspect-[4/3]"
                >
                  <div
                    className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col justify-end p-3`}
                  >
                    <p className="text-white font-semibold text-[10px] leading-tight text-left">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-[9px] mt-0.5 text-left">
                      {item.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="px-4 mb-2">
            <button
              onClick={() => navigate("/leaderboard")}
              className="w-full bg-brand-50 border border-admin-200 text-admin-700 font-semibold py-3 rounded-xl text-sm hover:bg-brand-100 transition-colors"
            >
              🏆 View Batch Leaderboard
            </button>
          </div>
        </div>
      </div>

      {/* ── BOTTOM NAV ── */}
      <AdminBottomNav />
    </MobileShell>
  );
}
