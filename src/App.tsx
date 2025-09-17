import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import ManualLogs from "./pages/ManualLogs";
import Layout from "./layout/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manualLogs" element={<ManualLogs />} />
      </Route>
    </Routes>
  );
};

export default App;
