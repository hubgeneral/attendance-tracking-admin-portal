import { Link, Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logs">Logs</Link>
      </nav> */}

      {/* Main content */}
      <main className="flex-1 p-8 bg-[#F0F2F5]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Layout;
