import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MobileShell } from "@/components/MobileShell";
import LoginPage from "@/routes/index";
import HomePage from "@/routes/home";
import AnalyticsPage from "@/routes/analytics";
import FeedbackPage from "@/routes/feedback";
import AlertsPage from "@/routes/alerts";
import ProfilePage from "@/routes/profile";
import LoyaltyPage from "@/routes/loyalty";
import SurveyResultsPage from "@/routes/survey-results";
import CustomerDetailPage from "@/routes/customer.$id";
import "./styles.css";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold gradient-text">404</h1>
      <p className="mt-2 text-sm text-slate-500">Page not found</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MobileShell />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/loyalty" element={<LoyaltyPage />} />
            <Route path="/survey-results" element={<SurveyResultsPage />} />
            <Route path="/customer/:id" element={<CustomerDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
