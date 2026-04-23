import React from "react";

export default function MobileShell({ children, noPadBottom = false }) {
  return (
    <>
      {/* MOBILE & TABLET VIEW (0px to 767px)
          - No max-w-md: It will now fill the screen on wider phones/tablets.
          - md:hidden: This whole section disappears at 768px.
      */}
      <div className="md:hidden min-h-screen bg-slate-100 flex justify-center">
        <div
          className={`w-full bg-slate-50 min-h-screen relative flex flex-col ${
            noPadBottom ? "" : "pb-16"
          } overflow-x-hidden`}
        >
          {children}
        </div>
      </div>

      {/* DESKTOP VIEW (768px and up)
          - md:flex: Shows the desktop version starting at 768px.
      */}
      <div className="hidden md:flex md:flex-col md:w-full md:min-h-full">
        {children}
      </div>
    </>
  );
}
