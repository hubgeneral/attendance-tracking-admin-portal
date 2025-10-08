import clsx from "clsx";
import { NavLink } from "react-router-dom";
import HM_Clockr_Logo from "../assets/HmClockrLogo.svg";
import HM_Clockr_Logo_Dark from "../assets/HMClockrLogoDark.svg";
import ProfileMenu from "../layout/ProfileMenu";
import ThemeBtn from "./ThemeBtn";
import { useState } from "react";

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
          "flex items-center rounded-lg px-3 py-2 text-sm whitespace-nowrap dark:text-[#E8EAE9]",
          isActive
            ? "text-[#004E2B]  font-bold"
            : "text-gray-600 hover:bg-gray-100 dark:hover:bg-[#253F35]"
        )
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
}

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-[#1A2D26] shadow-sm border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-6">
          {/* ============ Left Section ================ */}
          <div className="flex items-center gap-6 ml-2">
            <a href="/app/dashboard">
              <img
                src={HM_Clockr_Logo_Dark}
                alt="HM-Clockr-Logo"
                className="h-8 w-auto hidden dark:block"
              />
              <img
                src={HM_Clockr_Logo}
                alt="HM-Clockr-Logo"
                className="h-8 w-auto dark:hidden"
              />
            </a>

            <nav className="flex items-center space-x-1">
              <NavItem to="/app/dashboard" label="Dashboard" />
              <NavItem to="/app/attendance" label="Attendance" />
              <NavItem to="/app/logs" label="Manual Logs" />
              <NavItem to="/app/settings" label="Settings" />
            </nav>
          </div>

          <div>
            <ThemeBtn />
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
