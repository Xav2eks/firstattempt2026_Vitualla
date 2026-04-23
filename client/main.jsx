import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { App } from "../imports/ui/App.jsx";
import "./main.css";

Meteor.startup(() => {
  // ── React mount ────────────────────────────────────────────
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  root.render(<App />);

  // ── PWA: Service Worker registration ───────────────────────
  // Runs after the React tree is mounted so it never blocks
  // the initial paint.
  if ("serviceWorker" in navigator) {
    // Use window.addEventListener('load') so the SW registration
    // doesn't compete with Meteor's DDP connection on first load.
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js", {
          // Scope defaults to the SW script's directory — '/' here,
          // which covers the whole Meteor app. Be explicit anyway.
          scope: "/",
        })
        .then((registration) => {
          console.log("[SW] Registered. Scope:", registration.scope);

          // Check for a waiting SW (new deploy arrived) and prompt
          // the user to refresh so they get the latest bundles.
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (!newWorker) return;

            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // A new SW is waiting — you can show a toast here.
                // Example (wire this up to your React state/context):
                //   window.dispatchEvent(new CustomEvent('sw:update-ready'));
                console.log("[SW] New version available — reload to update.");
              }
            });
          });
        })
        .catch((err) => {
          // Registration failure is non-fatal — the app still works,
          // it just won't be cached / installable.
          console.warn("[SW] Registration failed:", err);
        });

      // If the controller changes mid-session (new SW took over),
      // force-reload so the user isn't on a stale JS bundle.
      let swRefreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (swRefreshing) return;
        swRefreshing = true;
        window.location.reload();
      });
    });
  }
});
