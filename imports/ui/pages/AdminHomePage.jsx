import React from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import AdminBottomNav from "../components/AdminBottomNav.jsx";

const StatCard = ({ icon, label, value, sub, color }) => (
  <div className="bg-admin-800/60 rounded-2xl p-4 border border-admin-700">
    <span className={`text-2xl ${color || ""}`}>{icon}</span>
    <p className={`font-black text-xl mt-2 ${color || "text-white"}`}>
      {value}
    </p>
    <p className="text-admin-300 text-xs uppercase tracking-wide font-semibold mt-0.5">
      {label}
    </p>
    {sub && <p className="text-admin-400 text-[10px] mt-0.5">{sub}</p>}
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
    color: "from-gray-600 to-gray-900",
  },
];

export default function AdminHomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session/auth state here if needed
    navigate("/login");
  };

  return (
    <MobileShell>
      {/* Admin Header */}
      <div className="bg-gradient-to-br from-admin-900 via-admin-800 to-admin-700 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-admin-500 border-2 border-white/30 flex items-center justify-center text-white font-black text-xl flex-shrink-0">
            MB
          </div>
          <div className="flex-1">
            <p className="text-admin-300 text-xs font-medium uppercase tracking-wide">
              Welcome, Admin!
            </p>
            <p className="text-white font-black text-lg leading-tight">
              Manon Bannerman
            </p>
          </div>
          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-red-900 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors flex-shrink-0"
          >
            <span>🚪</span> Log Out
          </button>
        </div>

        {/* Create Donation CTA */}
        <button
          onClick={() => navigate("/admin/campaigns/create")}
          className="w-full mt-4 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/20 text-white font-bold py-3.5 rounded-2xl transition-colors text-sm"
        >
          + Create Donation
        </button>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-b from-admin-800 to-admin-900 px-4 pt-4 pb-5">
        <div className="grid grid-cols-2 gap-3">
          <StatCard
            icon="💰"
            label="Total Funds Raised"
            value="₱12,500.00"
            color="text-green-400"
          />
          <StatCard
            icon="🎓"
            label="Scholar Supported"
            value="400 Students"
            color="text-sky-400"
          />
          <div className="bg-admin-800/60 rounded-2xl p-4 border border-admin-700">
            <span className="text-2xl">📈</span>
            <p className="text-admin-300 text-xs uppercase tracking-wide font-semibold mt-2">
              Active Campaigns
            </p>
            <div className="mt-2 bg-admin-700 rounded-full h-2">
              <div
                className="bg-green-400 h-2 rounded-full"
                style={{ width: "75%" }}
              />
            </div>
            <p className="text-white font-bold text-sm mt-1">75%</p>
          </div>
          <StatCard
            icon="📊"
            label="Batch Ranking"
            value="#3 Top Class"
            color="text-admin-300"
          />
        </div>
      </div>

      {/* Latest News */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 text-base">Latest News</h2>
          <button className="text-brand-700 text-sm font-semibold hover:underline">
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
                <p className="text-white font-semibold text-xs leading-tight text-left">
                  {item.title}
                </p>
                <p className="text-white/70 text-[10px] mt-0.5 text-left">
                  {item.date}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 grid grid-cols-3 gap-3">
        {[
          { label: "Campaigns", icon: "📋", path: "/admin/campaigns" },
          { label: "Leaderboard", icon: "🏆", path: "/leaderboard" },
          { label: "Notifications", icon: "🔔", path: "/admin/notifications" },
        ].map((a, i) => (
          <button
            key={i}
            onClick={() => navigate(a.path)}
            className="flex flex-col items-center gap-1.5 bg-white rounded-2xl py-3 shadow-sm border border-gray-100 hover:border-brand-200 transition-all"
          >
            <span className="text-2xl">{a.icon}</span>
            <span className="text-xs font-semibold text-gray-600">
              {a.label}
            </span>
          </button>
        ))}
      </div>

      <AdminBottomNav />
    </MobileShell>
  );
}
