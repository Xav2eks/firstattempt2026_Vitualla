import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages
import SignUpPage        from './pages/SignUpPage.jsx';
import LoginPage         from './pages/LoginPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import ResetSuccessPage  from './pages/ResetSuccessPage.jsx';
import RoleSelectionPage from './pages/RoleSelectionPage.jsx';

// Alumni Pages
import AlumniHomePage        from './pages/AlumniHomePage.jsx';
import EventsCalendarPage    from './pages/EventsCalendarPage.jsx';
import EventsListPage        from './pages/EventsListPage.jsx';
import GivingImpactPage      from './pages/GivingImpactPage.jsx';
import CampaignDetailsPage   from './pages/CampaignDetailsPage.jsx';
import SecureCheckoutPage    from './pages/SecureCheckoutPage.jsx';
import DonationHistoryPage   from './pages/DonationHistoryPage.jsx';
import NotificationsPage     from './pages/NotificationsPage.jsx';
import ProfileOverviewPage   from './pages/ProfileOverviewPage.jsx';
import ProfileEditPage       from './pages/ProfileEditPage.jsx';
import CertificateVaultPage  from './pages/CertificateVaultPage.jsx';
import BatchLeaderboardPage  from './pages/BatchLeaderboardPage.jsx';

// Admin Pages
import AdminHomePage          from './pages/AdminHomePage.jsx';
import AdminCampaignsPage     from './pages/AdminCampaignsPage.jsx';
import CreateCampaignPage     from './pages/CreateCampaignPage.jsx';
import PublishCampaignPage    from './pages/PublishCampaignPage.jsx';
import AdminNotificationsPage from './pages/AdminNotificationsPage.jsx';

export const App = () => (
  <BrowserRouter>
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/signup" replace />} />

      {/* Auth */}
      <Route path="/signup"         element={<SignUpPage />} />
      <Route path="/login"          element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-success"  element={<ResetSuccessPage />} />
      <Route path="/role-selection" element={<RoleSelectionPage />} />

      {/* Alumni */}
      <Route path="/home"              element={<AlumniHomePage />} />
      <Route path="/events"            element={<EventsCalendarPage />} />
      <Route path="/events/list"       element={<EventsListPage />} />
      <Route path="/donations"         element={<GivingImpactPage />} />
      <Route path="/donations/campaign/:id" element={<CampaignDetailsPage />} />
      <Route path="/donations/checkout" element={<SecureCheckoutPage />} />
      <Route path="/donations/history" element={<DonationHistoryPage />} />
      <Route path="/notifications"     element={<NotificationsPage />} />
      <Route path="/profile"           element={<ProfileOverviewPage />} />
      <Route path="/profile/edit"      element={<ProfileEditPage />} />
      <Route path="/profile/certificates" element={<CertificateVaultPage />} />
      <Route path="/leaderboard"       element={<BatchLeaderboardPage />} />

      {/* Admin */}
      <Route path="/admin/home"            element={<AdminHomePage />} />
      <Route path="/admin/campaigns"       element={<AdminCampaignsPage />} />
      <Route path="/admin/campaigns/create" element={<CreateCampaignPage />} />
      <Route path="/admin/campaigns/publish" element={<PublishCampaignPage />} />
      <Route path="/admin/notifications"   element={<AdminNotificationsPage />} />
    </Routes>
  </BrowserRouter>
);
