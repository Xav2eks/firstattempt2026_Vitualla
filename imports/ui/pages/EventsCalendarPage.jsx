import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileShell from '../components/MobileShell.jsx';
import TopBar from '../components/TopBar.jsx';
import BottomNav from '../components/BottomNav.jsx';

const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
const calDays = [
  { d: 29, prev: true }, { d: 30, prev: true },
  { d: 1  }, { d: 2, dots: ['blue'] },  { d: 3 }, { d: 4 }, { d: 5 },
  { d: 6  }, { d: 7, dots: ['red'] },   { d: 8, today: true }, { d: 9 }, { d: 10 }, { d: 11, dots: ['blue'] }, { d: 12 },
  { d: 13 }, { d: 14 }, { d: 15, dots: ['blue','red'] }, { d: 16 }, { d: 17 }, { d: 18 }, { d: 19 },
  { d: 20 }, { d: 21 }, { d: 22 }, { d: 23 }, { d: 24 }, { d: 25, dots: ['amber'] }, { d: 26 },
];

const dotColor = { blue: 'bg-blue-500', red: 'bg-red-400', amber: 'bg-amber-400' };

export default function EventsCalendarPage() {
  const navigate = useNavigate();
  const [view, setView] = useState('calendar');

  return (
    <MobileShell>
      <TopBar title="Events Calendar" backPath="/home" rightIcon="☰" />

      {/* View Toggle */}
      <div className="bg-brand-800 px-4 pb-4">
        <div className="flex bg-brand-700/60 rounded-xl p-1">
          {['calendar','list'].map(v => (
            <button
              key={v}
              onClick={() => v === 'list' ? navigate('/events/list') : setView(v)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
                view === v ? 'bg-white text-brand-800 shadow' : 'text-brand-200 hover:text-white'
              }`}
            >
              {v === 'calendar' ? 'Calendar' : 'List View'}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pt-4">
        {/* Month Nav */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-gray-900 text-lg">October 2024</h2>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm">‹</button>
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm">›</button>
          </div>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 mb-2">
          {days.map(d => (
            <div key={d} className="text-center text-[10px] font-semibold text-gray-400 uppercase py-1">{d}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-y-1 mb-4">
          {calDays.map((day, i) => (
            <div key={i} className="flex flex-col items-center">
              <button
                className={`w-8 h-8 rounded-full text-sm font-medium flex items-center justify-center transition-colors ${
                  day.today ? 'bg-brand-700 text-white font-bold'
                  : day.prev ? 'text-gray-300'
                  : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day.d}
              </button>
              {day.dots && (
                <div className="flex gap-0.5 mt-0.5">
                  {day.dots.map((c, j) => (
                    <span key={j} className={`w-1.5 h-1.5 rounded-full ${dotColor[c]}`} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-5 mb-5">
          {[['blue','Events'],['red','Donations'],['amber','Outreach']].map(([c,l]) => (
            <div key={c} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-full ${dotColor[c]}`} />
              <span className="text-xs text-gray-500 font-medium">{l}</span>
            </div>
          ))}
        </div>

        {/* Upcoming This Week */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">Upcoming This Week</h3>
          <button onClick={() => navigate('/events/list')} className="text-brand-700 text-sm font-semibold">View All</button>
        </div>

        <div className="space-y-3 mb-4">
          {[
            { month:'OCT', day:'08', title:'Blue Knights Reach Out', desc:'Reach Out program for Barangay...', rsvp: true },
            { month:'OCT', day:'11', title:'Davao River Cleanup',     desc:'Community service outreach at...',  rsvp: false },
          ].map((e, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-12 text-center flex-shrink-0">
                <p className="text-[10px] font-semibold text-amber-500 uppercase">{e.month}</p>
                <p className="text-2xl font-black text-gray-900 leading-none">{e.day}</p>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">{e.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{e.desc}</p>
              </div>
              <button className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                e.rsvp
                  ? 'bg-brand-700 text-white hover:bg-brand-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                {e.rsvp ? 'RSVP' : 'View'}
              </button>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="space-y-3 pb-4">
          {[
            { dot:'blue', text:'Manon Bannerman RSVP\'d to the Networking Night event.', time:'2 hours ago' },
            { dot:'amber', text:'Alumni Board added a new outreach activity for Nov 2024.', time:'Yesterday' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className={`w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0 ${dotColor[item.dot]}`} />
              <div>
                <p className="text-xs text-gray-700">{item.text}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </MobileShell>
  );
}
