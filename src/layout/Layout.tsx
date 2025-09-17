import { NavLink, Outlet } from "react-router-dom";
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
    <div className="flex h-screen bg-gray-50 text-gray-800 flex-col">
      {/* ========= TOP NAVBAR ========= */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-6">
            {/* ============ Left Section (Logo + Nav) ================ */}
            <div className="flex items-center gap-6">
              <a href="/">
                <img
                  src={HM_Clockr_Logo}
                  alt="HM-Clockr-Logo"
                  className="h-8 w-auto"
                />
              </a>

              <nav className="hidden md:flex items-center space-x-1">
                <NavItem to="/dashboard" label="Dashboard" />
                <NavItem to="/attendance" label="Attendance" />
                <NavItem to="/manualLogs" label="Manual Logs" />
                <NavItem to="/settings" label="Settings" />
              </nav>
            </div>

            {/* Right Section (Profile) */}
            <ProfileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
