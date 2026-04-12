import React from "react";

/**
 * MobileShell
 *
 * On mobile  → centres content in a max-w-md card (original behaviour).
 * On desktop → the DesktopLayout already provides the full-width column,
 *              so MobileShell becomes a transparent pass-through wrapper.
 */
export default function MobileShell({ children, noPadBottom = false }) {
  return (
    <>
      {/* Mobile layout */}
      <div
        className={`lg:hidden min-h-screen bg-slate-100 flex justify-center`}
      >
        <div
          className={`w-full max-w-md bg-slate-50 min-h-screen relative flex flex-col ${noPadBottom ? "" : "pb-16"} overflow-x-hidden`}
        >
          {children}
        </div>
      </div>

      {/* Desktop layout — full width, no max-w-md cap, no bottom padding */}
      <div className="hidden lg:flex lg:flex-col lg:w-full lg:min-h-full">
        {children}
      </div>
    </>
  );
}
