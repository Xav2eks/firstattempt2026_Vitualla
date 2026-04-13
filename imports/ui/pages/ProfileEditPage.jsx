import React from "react";
import { useNavigate } from "react-router-dom";
import MobileShell from "../components/MobileShell.jsx";
import TopBar from "../components/TopBar.jsx";
import BottomNav from "../components/BottomNav.jsx";

const contactDetails = [
  {
    icon: "✉️",
    label: "University Email",
    value: "sophia.laforteza@addu.edu.ph",
  },
  { icon: "📞", label: "Mobile Number", value: "+63 917 123 4567" },
  { icon: "📍", label: "Current Location", value: "Davao City, Philippines" },
];

const fields = [
  { label: "First Name", value: "Sophia", type: "text" },
  { label: "Last Name", value: "Laforteza", type: "text" },
  { label: "Program", value: "AB Communications", type: "text" },
  { label: "Batch Year", value: "2024", type: "text" },
];

export default function ProfileEditPage() {
  const navigate = useNavigate();

  return (
    <MobileShell>
      <TopBar title="Profile" backPath="/profile" rightIcon="⋯" />

      <div className="px-4 py-5 space-y-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center py-2">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 flex items-center justify-center text-white font-black text-2xl">
              SL
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-brand-600 rounded-full flex items-center justify-center border-2 border-white text-white text-xs">
              ✎
            </button>
          </div>
          <h1 className="text-xl font-black text-gray-900">Sophia Laforteza</h1>
          <p className="text-brand-700 font-semibold text-sm mt-0.5">
            AB Communications, Batch 2024
          </p>
          <p className="text-gray-400 text-xs mt-0.5 flex items-center gap-1">
            <span>🎓</span> Ateneo de Davao University
          </p>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <h2 className="font-bold text-gray-800 text-sm mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {fields.map((f, i) => (
              <div key={i}>
                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  defaultValue={f.value}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-gray-50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Verified Digital Credential */}
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0 text-white text-2xl">
              📄
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-sm">
                Verified Digital Credential
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                Official PDF with secure QR verification containing your
                complete academic records and graduation honors.
              </p>
            </div>
          </div>
          <button className="w-full mt-4 bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
            <span>⬇</span> Download Credential
          </button>
        </div>

        {/* Contact Details */}
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">
            Contact Details
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {contactDetails.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-4">
                <span className="text-xl w-7 text-center flex-shrink-0">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="font-semibold text-gray-900 text-sm mt-0.5">
                    {item.value}
                  </p>
                </div>
                <button className="text-brand-600 text-xs font-semibold hover:underline">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={() => navigate("/profile")}
          className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-4 rounded-2xl text-sm shadow-md transition-colors"
        >
          Save Changes
        </button>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
