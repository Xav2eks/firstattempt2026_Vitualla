import React from "react";
import DesktopSidebar from "./DesktopSidebar.jsx";
import AdminDesktopSidebar from "./AdminDesktopSidebar.jsx";
import DesktopTopBar from "./DesktopTopBar.jsx";

/**
 * DesktopLayout
 *
 * Wraps any page with the correct sidebar + topbar on lg+ screens.
 * On mobile it renders nothing extra — the page's own MobileShell takes over.
 *
 * Usage:
 *   <DesktopLayout isAdmin={false}>
 *     <AlumniHomePage />
 *   </DesktopLayout>
 *
 * Props:
 *   isAdmin  – boolean, switches between alumni and admin chrome (default false)
 *   children – the page component (MobileShell is rendered inside for mobile)
 */
export default function DesktopLayout({ isAdmin = false, children }) {
  const Sidebar = isAdmin ? AdminDesktopSidebar : DesktopSidebar;

  return (
    <>
      {/* ── Desktop chrome (lg+) ─────────────────────────────────── */}
      <Sidebar />

      <div className="hidden lg:flex lg:flex-col lg:pl-64 min-h-screen bg-slate-100">
        <DesktopTopBar isAdmin={isAdmin} />

        {/* Page content area — full width, no max-w-md cap */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/*
           * Strip the MobileShell constraint so content can breathe at desktop.
           * The inner page still renders its MobileShell, but we override it here
           * via a CSS utility that lets the children use the full column width.
           */}
          <div className="desktop-page-content">{children}</div>
        </main>
      </div>

      {/* ── Mobile (below lg) — children render as-is ───────────── */}
      <div className="lg:hidden">{children}</div>
    </>
  );
}
