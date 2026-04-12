import React from "react";

export default function MobileShell({ children, noPadBottom = false }) {
  return (
    <div className="h-screen bg-slate-100 flex justify-center overflow-hidden">
      <div className="w-full max-w-md bg-slate-50 h-full flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
