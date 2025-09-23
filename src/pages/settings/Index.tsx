// ----------------------------
// This file defines the main routing entry point 
// for all "Settings"-related pages in the dashboard.
// Instead of manually managing navigation with props,
// we use React Router to control page transitions.
// ----------------------------

import { Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import Users from "./Users";

export default function Index() {
  return (
    // All routes defined here are "children" of /settings
    // Example:
    //   /settings        → shows the Settings page
    //   /settings/users  → shows the Users page
    <Routes>
      {/* Default settings page */}
      <Route path="/settings" element={<Settings />} />

      {/* Sub-page for managing users */}
      <Route path="/settings/users" element={<Users />} />
    </Routes>
  );
}
