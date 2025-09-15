import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import ManualLogs from "./pages/ManualLogs";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logs" element={<ManualLogs />} />
      </Route>
    </Routes>
  );
};

export default App;
