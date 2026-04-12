import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layout
import DesktopLayout from "./components/DesktopLayout.jsx";

// Auth Pages (no desktop chrome)
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetSuccessPage from "./pages/ResetSuccessPage.jsx";
import RoleSelectionPage from "./pages/RoleSelectionPage.jsx";

// Alumni Pages
import AlumniHomePage from "./pages/AlumniHomePage.jsx";
import EventsCalendarPage from "./pages/EventsCalendarPage.jsx";
import EventsListPage from "./pages/EventsListPage.jsx";
import GivingImpactPage from "./pages/GivingImpactPage.jsx";
import CampaignDetailsPage from "./pages/CampaignDetailsPage.jsx";
import SecureCheckoutPage from "./pages/SecureCheckoutPage.jsx";
import DonationHistoryPage from "./pages/DonationHistoryPage.jsx";
import NotificationsPage from "./pages/NotificationsPage.jsx";
import ProfileOverviewPage from "./pages/ProfileOverviewPage.jsx";
import ProfileEditPage from "./pages/ProfileEditPage.jsx";
import CertificateVaultPage from "./pages/CertificateVaultPage.jsx";
import BatchLeaderboardPage from "./pages/BatchLeaderboardPage.jsx";

// Admin Pages
import AdminHomePage from "./pages/AdminHomePage.jsx";
import AdminCampaignsPage from "./pages/AdminCampaignsPage.jsx";
import CreateCampaignPage from "./pages/CreateCampaignPage.jsx";
import PublishCampaignPage from "./pages/PublishCampaignPage.jsx";
import AdminNotificationsPage from "./pages/AdminNotificationsPage.jsx";

// ─────────────────────────────────────────────────────────────
// Layout helpers — wrap each page in the correct desktop chrome
// ─────────────────────────────────────────────────────────────

const Alumni = ({ page: Page }) => (
  <DesktopLayout isAdmin={false}>
    <Page />
  </DesktopLayout>
);

const Admin = ({ page: Page }) => (
  <DesktopLayout isAdmin={true}>
    <Page />
  </DesktopLayout>
);

// ─────────────────────────────────────────────────────────────

export const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/signup" replace />} />

      {/* Auth — no sidebar/topbar */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-success" element={<ResetSuccessPage />} />
      <Route path="/role-selection" element={<RoleSelectionPage />} />

      {/* Alumni */}
      <Route path="/home" element={<Alumni page={AlumniHomePage} />} />
      <Route path="/events" element={<Alumni page={EventsCalendarPage} />} />
      <Route path="/events/list" element={<Alumni page={EventsListPage} />} />
      <Route path="/donations" element={<Alumni page={GivingImpactPage} />} />
      <Route
        path="/donations/campaign/:id"
        element={<Alumni page={CampaignDetailsPage} />}
      />
      <Route
        path="/donations/checkout"
        element={<Alumni page={SecureCheckoutPage} />}
      />
      <Route
        path="/donations/history"
        element={<Alumni page={DonationHistoryPage} />}
      />
      <Route
        path="/notifications"
        element={<Alumni page={NotificationsPage} />}
      />
      <Route path="/profile" element={<Alumni page={ProfileOverviewPage} />} />
      <Route path="/profile/edit" element={<Alumni page={ProfileEditPage} />} />
      <Route
        path="/profile/certificates"
        element={<Alumni page={CertificateVaultPage} />}
      />
      <Route
        path="/leaderboard"
        element={<Admin page={BatchLeaderboardPage} />}
      />

      {/* Admin */}
      <Route path="/admin/home" element={<Admin page={AdminHomePage} />} />
      <Route
        path="/admin/campaigns"
        element={<Admin page={AdminCampaignsPage} />}
      />
      <Route
        path="/admin/campaigns/create"
        element={<Admin page={CreateCampaignPage} />}
      />
      <Route
        path="/admin/campaigns/publish"
        element={<Admin page={PublishCampaignPage} />}
      />
      <Route
        path="/admin/notifications"
        element={<Admin page={AdminNotificationsPage} />}
      />
    </Routes>
  </BrowserRouter>
);
