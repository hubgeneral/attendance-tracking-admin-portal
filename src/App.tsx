import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Settings from "./pages/Settings";
import ManualLogs from "./pages/ManualLogs";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/app" element={<Layout />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logs" element={<ManualLogs />} />
      </Route>
    </Routes>
  );
};

export default App;
