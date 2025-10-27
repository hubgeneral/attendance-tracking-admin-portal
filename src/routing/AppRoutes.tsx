import React, { type ReactNode } from "react";
import { useAuth } from "../app/hooks/useAuth";
import { Navigate, Route, Routes } from "react-router";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import Attendance from "../pages/Attendance";
import ManualLogs from "../pages/ManualLogs";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "../pages/Login";
import Layout from "../layout/Layout";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/settings/Settings";
import UsersPage from "../pages/settings/Users";
import Page404 from "./page404";

const PublicRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes - redirect to dashboard if already authenticated */}
      <Route
        path="/"
        element={
          // <PublicRoute>
          <Login />
          // </PublicRoute>
        }
      />
      <Route
        path="forgot-password"
        element={
          // <PublicRoute>
          <ForgotPassword />
          // </PublicRoute>
        }
      />
      <Route
        path="reset-password"
        element={
          <ProtectedRoutes>
            <ResetPassword />
          </ProtectedRoutes>
        }
      />

      {/* Protected routes - require authentication */}
      <Route
        path="/app"
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logs" element={<ManualLogs />} />
        <Route path="settings/users" element={<UsersPage />} />
      </Route>

      {/* Catch all - redirect to 404 */}
      <Route
        path="*"
        element={
          // <PublicRoute>
          <Page404 />
          // </PublicRoute>
        }
      />
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default AppRoutes;
