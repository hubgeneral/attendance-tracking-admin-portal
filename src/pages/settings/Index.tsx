import { Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import Users from "./Users";

export default function Index() {
  return (
    <Routes>
      {/* Default settings page */}
      <Route path="/settings" element={<Settings />} />

      {/* Sub-page for managing users */}
      <Route path="/settings/users" element={<Users />} />
    </Routes>
  );
}
