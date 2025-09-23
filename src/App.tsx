import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Settings from "./pages/settings/Settings";
import ManualLogs from "./pages/ManualLogs";
import Layout from "./layout/Layout";
import Login from "./pages/Login";
import UsersPage from "./pages/settings/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/app" element={<Layout />} >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="logs" element={<ManualLogs />} />
        <Route path="/app/settings/users" element={<UsersPage />} />

      </Route>
    </Routes>
  );
};

export default App;
