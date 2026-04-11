import React from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import BottomNav from "../components/BottomNav.jsx";

const StatCard = ({ icon, label, value, color }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-1.5">
    <span className="text-2xl">{icon}</span>
    <p
      className={`text-xs font-semibold uppercase tracking-wide ${color || "text-gray-400"}`}
    >
      {label}
    </p>
    <p className="font-bold text-gray-900 text-base leading-tight">{value}</p>
  </div>
);

export default function AlumniHomePage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-600 px-5 py-5">
        {/* Updated wrapper for justify-between */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-brand-300 border-2 border-white/40 flex items-center justify-center text-brand-900 font-bold text-xl flex-shrink-0">
              SL
            </div>
            <div>
              <p className="text-brand-200 text-xs font-medium">
                Welcome, Atenean!
              </p>
              <p className="text-white font-bold text-lg leading-tight">
                Sophia Laforteza
              </p>
              <p className="text-brand-300 text-xs">AB Communications '24</p>
            </div>
          </div>

          {/* New Logout Button */}
          <button
            onClick={() => navigate("/login")}
            className="text-red-500 font-bold text-sm bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition-colors"
          >
            LOGOUT
          </button>
        </div>

        {/* Donate CTA */}
        <button
          onClick={() => navigate("/donations")}
          className="w-full bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold py-3.5 rounded-2xl transition-colors border border-white/30 text-sm"
        >
          💝 Donate Now
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 px-4 pt-4">
        <StatCard
          icon="💰"
          label="Total Donated"
          value="₱12,500.00"
          color="text-brand-600"
        />
        <StatCard
          icon="🎓"
          label="Scholars Supported"
          value="4 Students"
          color="text-amber-500"
        />
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <span className="text-2xl">📈</span>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1.5">
            Progress on the Calamity Fund Drive
          </p>
          <div className="mt-2 bg-gray-100 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">75%</p>
        </div>
        <StatCard
          icon="📊"
          label="Batch Ranking"
          value="#3 Top Class"
          color="text-brand-600"
        />
      </div>

      {/* Latest News */}
      <div className="px-4 mt-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 text-base">Latest News</h2>
          <button className="text-brand-700 text-sm font-semibold hover:underline">
            See all
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              title: "Grand Alumni Homecoming 2024",
              date: "OCT 24, 2024",
              color: "from-teal-400 to-teal-600",
            },
            {
              title: "Scholarship Goal",
              date: "OCT 12, 2024",
              color: "from-gray-700 to-gray-900",
            },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => navigate("/events")}
              className="rounded-2xl overflow-hidden shadow-sm relative aspect-[4/3] group"
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col justify-end p-3`}
              >
                <p className="text-white font-semibold text-xs leading-tight">
                  {item.title}
                </p>
                <p className="text-white/70 text-[10px] mt-0.5">{item.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-4 mt-4 mb-2">
        <button
          onClick={() => navigate("/leaderboard")}
          className="w-full bg-brand-50 border border-brand-200 text-brand-700 font-semibold py-3 rounded-xl text-sm hover:bg-brand-100 transition-colors"
        >
          🏆 View Batch Leaderboard
        </button>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
