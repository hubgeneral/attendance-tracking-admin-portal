import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import clsx from "clsx";
import HM_Clockr_Logo from "../assets/HM-Clockr-Logo.png";
import ProfileMenu from "./ProfileMenu";

function NavItem({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center rounded-lg px-3 py-2 text-sm whitespace-nowrap",
          isActive
            ? "text-green-700 font-bold"
            : "text-gray-600 hover:bg-gray-100"
        )
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
}

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* ========= TOP NAVBAR ========= */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-6">
            {/* ============ Left Section (Logo + Nav) ================ */}
            <div className="flex items-center gap-6">
              <a href="/app/dashboard">
                <img
                  src={HM_Clockr_Logo}
                  alt="HM-Clockr-Logo"
                  className="h-8 w-auto"
                />
              </a>

              <nav className="hidden md:flex items-center space-x-1">
                <NavItem to="/app/dashboard" label="Dashboard" />
                <NavItem to="/app/attendance" label="Attendance" />
                <NavItem to="/app/manualLogs" label="Manual Logs" />
                <NavItem to="/app/settings" label="Settings" />
              </nav>
            </div>

            {/* ============ Right Section (Profile Menu) ============ */}
            <ProfileMenu />
          </div>
        </div>
      </header>

      {/* ========= MAIN CONTENT ========= */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* ========= FOOTER ========= */}
      <Footer />
    </div>
  );
}

export default AppLayout;
