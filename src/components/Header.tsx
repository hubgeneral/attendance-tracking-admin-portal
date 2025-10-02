import { NavLink } from "react-router-dom";
import clsx from "clsx";
import HM_Clockr_Logo from "../assets/HmClockrLogo.svg";
import ProfileMenu from "../layout/ProfileMenu";

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
            ? "text-[var(--primary-color)] font-bold"
            : "text-gray-600 hover:bg-gray-100"
        )
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* ============ Left Section ================ */}
          <div className="flex items-center gap-6">
            <a href="/app/dashboard">
              <img
                src={HM_Clockr_Logo}
                alt="HM-Clockr-Logo"
                className="h-8 w-auto"
              />
            </a>

            <nav className="flex items-center space-x-1">
              <NavItem to="/app/dashboard" label="Dashboard" />
              <NavItem to="/app/attendance" label="Attendance" />
              <NavItem to="/app/logs" label="Manual Logs" />
              <NavItem to="/app/settings" label="Settings" />
            </nav>
          </div>

          {/* ============ Profile Menu ============ */}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
