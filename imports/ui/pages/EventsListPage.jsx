import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import TopBar from '../components/TopBar.jsx';
import BottomNav from '../components/BottomNav.jsx';

const categories = ['All', 'Reunions', 'Outreach', 'Donations', 'Events'];

const events = [
  {
    month: 'OCT', day: '08',
    title: 'Blue Knights Reach Out Program',
    time: '6:00 PM – 9:00 PM',
    location: 'Barangay Vicente Hizon',
    desc: 'Reach Out program for Barangay communities in need of support and outreach.',
    attendees: 12,
    color: 'text-amber-600',
  },
  {
    month: 'OCT', day: '12',
    title: 'Coastal Clean-up Drive',
    time: '7:00 AM – 11:00 AM',
    location: 'Times Beach, Matina',
    desc: 'Join Arrupe Volunteers in our monthly environmental stewardship activity. Bring your own water bottles!',
    attendees: 45,
    color: 'text-amber-600',
  },
  {
    month: 'OCT', day: '15',
    title: 'Alumni Homecoming Gala',
    time: '7:00 PM Onwards',
    location: 'Martin Hall Auditorium',
    desc: 'A grand celebration for all ADDU graduates. Buffet dinner, live music, and special batch presentations.',
    attendees: 0,
    color: 'text-amber-600',
    bookmarked: true,
  },
];

export default function EventsListPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <MobileShell>
      <TopBar title="All Events" backPath="/events" rightIcon="☰" />

      {/* View Toggle */}
      <div className="bg-brand-800 px-4 p-4">
        <div className="flex bg-brand-700/60 rounded-xl p-1">
          {['Calendar','List View'].map(v => (
            <button
              key={v}
              onClick={() => v === 'Calendar' && navigate('/events')}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                v === 'List View' ? 'bg-white text-brand-800 shadow' : 'text-brand-200 hover:text-white'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Search */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 pb-1">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                active === c
                  ? 'bg-brand-700 text-white border-brand-700'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-brand-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="space-y-4 pb-4">
          {events.map((event, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="flex gap-3">
                {/* Date Badge */}
                <div className="w-14 text-center flex-shrink-0">
                  <p className={`text-[10px] font-bold uppercase ${event.color}`}>{event.month}</p>
                  <p className="text-3xl font-black text-gray-900 leading-none">{event.day}</p>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight pr-2">{event.title}</h3>
                    {event.bookmarked && <span className="text-brand-700 text-lg flex-shrink-0">🔖</span>}
                  </div>
                  <div className="mt-1.5 space-y-0.5">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span>🕐</span> {event.time}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span>📍</span> {event.location}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{event.desc}</p>

              <div className="flex items-center justify-between mt-3">
                {event.attendees > 0 ? (
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1.5">
                      {[...Array(Math.min(event.attendees, 3))].map((_, j) => (
                        <div key={j} className="w-6 h-6 rounded-full bg-brand-200 border-2 border-white flex items-center justify-center text-[9px] font-bold text-brand-800">
                          {String.fromCharCode(65 + j)}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">+{event.attendees}</span>
                  </div>
                ) : <div />}

                <button className="bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors">
                  RSVP
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
