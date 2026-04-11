import React from 'react';

export default function MobileShell({ children, noPadBottom = false }) {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className={`w-full max-w-md bg-slate-50 min-h-screen relative flex flex-col ${noPadBottom ? '' : 'pb-16'} overflow-x-hidden`}>
        {children}
      </div>
    </div>
  );
}
