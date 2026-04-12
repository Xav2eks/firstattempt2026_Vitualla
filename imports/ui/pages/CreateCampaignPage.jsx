import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import AdminBottomNav from '../components/AdminBottomNav.jsx';

const categories = [
  'Education', 'Calamity Relief', 'Health & Medical',
  'Infrastructure', 'Outreach', 'Sports & Culture', 'Environment',
];

export default function CreateCampaignPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [imageUploaded, setImageUploaded] = useState(false);

  const step = 1;

  return (
    <MobileShell>
      {/* Header */}
      <div className="bg-gradient-to-br from-admin-900 to-admin-700 px-4 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/admin/campaigns')}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
        >
          ←
        </button>
        <h1 className="text-white font-bold text-base flex-1">Create Campaign/Donation</h1>
      </div>

      {/* Step Indicator */}
      <div className="bg-admin-800 px-4 pb-4">
        <div className="flex items-center gap-2">
          {[1, 2].map(s => (
            <React.Fragment key={s}>
              <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-black border-2 transition-colors ${
                s === step
                  ? 'bg-white text-admin-800 border-white'
                  : s < step
                  ? 'bg-admin-400 text-white border-admin-400'
                  : 'bg-transparent text-admin-400 border-admin-600'
              }`}>
                {s < step ? '✓' : s}
              </div>
              {s < 2 && <div className={`flex-1 h-0.5 rounded-full ${s < step ? 'bg-admin-400' : 'bg-admin-700'}`} />}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-between mt-1.5">
          <p className="text-xs text-admin-300 font-medium">Campaign Details</p>
          <p className="text-xs text-admin-500">Donation Options & Review</p>
        </div>
      </div>

      <div className="px-4 py-4 space-y-5">
        {/* Campaign Title */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
            Campaign Title
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g., Scholarship Fund for Batch 2024"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-admin-500 shadow-sm"
          />
          <p className="text-xs text-gray-400 mt-1.5">Make it catchy and descriptive to attract more donors.</p>
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
            Category
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-admin-500 shadow-sm appearance-none"
            >
              <option value="">Select a category</option>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">∨</span>
          </div>
        </div>

        {/* Full Story */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
            Full Story / Details
          </label>
          <textarea
            value={story}
            onChange={e => setStory(e.target.value)}
            placeholder="Share why this campaign is important. Tell your story..."
            rows={5}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-admin-500 shadow-sm resize-none"
          />
          <div className="flex justify-between mt-1">
            <p className="text-xs text-gray-400">Be compelling and specific about the impact.</p>
            <p className="text-xs text-gray-300">{story.length}/2000</p>
          </div>
        </div>

        {/* Campaign Image */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5">
            Campaign Image / Banner
          </label>
          <button
            onClick={() => setImageUploaded(!imageUploaded)}
            className={`w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center py-8 gap-3 transition-all ${
              imageUploaded
                ? 'border-admin-500 bg-admin-50'
                : 'border-gray-200 bg-gray-50 hover:border-admin-300 hover:bg-admin-50/50'
            }`}
          >
            {imageUploaded ? (
              <>
                <div className="w-14 h-14 rounded-xl bg-admin-600 flex items-center justify-center text-white text-2xl">✅</div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-admin-700">Image Uploaded!</p>
                  <p className="text-xs text-gray-400 mt-0.5">Click to change</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-14 h-14 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-3xl">☁</div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600">Upload Header Image</p>
                  <p className="text-xs text-gray-400 mt-0.5">oPEG, PNG or oPG (Recommended: 1200×630)</p>
                </div>
              </>
            )}
          </button>
        </div>

        {/* Next Step */}
        <button
          onClick={() => navigate('/admin/campaigns/publish')}
          className="w-full bg-admin-700 hover:bg-admin-800 text-white font-bold py-4 rounded-2xl text-base shadow-lg transition-colors flex items-center justify-center gap-2"
        >
          Next Step →
        </button>
      </div>

      <AdminBottomNav />
    </MobileShell>
  );
}
