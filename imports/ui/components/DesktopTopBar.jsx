import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const pageTitles = {
  "/home": { title: "Home Dashboard", sub: "Welcome back, Sophia!" },
  "/events": {
    title: "Events Calendar",
    sub: "Stay updated with alumni activities",
  },
  "/events/list": { title: "All Events", sub: "Browse and RSVP to events" },
  "/donations": {
    title: "Giving & Impact",
    sub: "Empowering the next generation of Ateneans",
  },
  "/donations/campaign/1": {
    title: "Campaign Details",
    sub: "Scholarship Fund 2024",
  },
  "/donations/checkout": {
    title: "Secure Checkout",
    sub: "Complete your donation safely",
  },
  "/donations/history": {
    title: "Donation History",
    sub: "Track your contributions",
  },
  "/notifications": {
    title: "Notifications",
    sub: "Stay informed in real time",
  },
  "/profile": {
    title: "My Profile",
    sub: "Manage your account and credentials",
  },
  "/profile/edit": {
    title: "Edit Profile",
    sub: "Update your personal information",
  },
  "/profile/certificates": {
    title: "Certificate Vault",
    sub: "Your verified donation certificates",
  },
  "/leaderboard": {
    title: "Batch Leaderboard",
    sub: "Real-time rankings by graduation year",
  },
  "/admin/home": { title: "Admin Dashboard", sub: "Fundraising overview" },
  "/admin/campaigns": {
    title: "Donation Campaigns",
    sub: "Manage all active campaigns",
  },
  "/admin/campaigns/create": {
    title: "Create Campaign",
    sub: "Step 1: Campaign details",
  },
  "/admin/campaigns/publish": {
    title: "Publish Campaign",
    sub: "Step 2: Donation options & review",
  },
  "/admin/notifications": {
    title: "Admin Notifications",
    sub: "System and campaign alerts",
  },
};

export default function DesktopTopBar({ isAdmin = false }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const page = pageTitles[pathname] || { title: "Alumni Hub", sub: "" };
  const accent = isAdmin ? "text-admin-600" : "text-brand-600";

  return (
    <header
      className={`hidden lg:flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 sticky top-0 z-30`}
    >
      <div>
        <h1 className="text-xl font-black text-gray-900">{page.title}</h1>
        {page.sub && (
          <p className={`text-sm ${accent} font-medium`}>{page.sub}</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-400 w-56"
          />
        </div>
        {/* Notification bell */}
        <button
          onClick={() =>
            navigate(isAdmin ? "/admin/notifications" : "/notifications")
          }
          className="relative w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-xl transition-colors"
        >
          🔔
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
        </button>
        {/* Avatar */}
        <button
          onClick={() => navigate(isAdmin ? "/admin/home" : "/profile")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm ${isAdmin ? "bg-admin-600" : "bg-brand-600"}`}
        >
          {isAdmin ? "MB" : "SL"}
        </button>
      </div>
    </header>
  );
}
