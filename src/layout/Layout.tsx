// import { Link, Outlet } from "react-router-dom";
// import clsx from "clsx";
// import Footer from "../Component/Footer";
// import HM_Clockr_Logo from "../assets/HM-Clockr-Logo.png";
// import ProfileMenu from "./ProfileMenu";

// function NavItem({
//   to,
//   label,
//   onClick,
// }: {
//   to: string;
//   label: string;
//   onClick?: () => void;
// }) {
//   return (
//     <Link
//       to={to}
//       className={({ isActive }) =>
//         clsx(
//           "flex items-center rounded-lg px-3 py-2 text-sm whitespace-nowrap",
//           isActive
//             ? "text-green-700 font-bold"
//             : "text-gray-600 hover:bg-gray-100"
//         )
//       }
//       onClick={onClick}
//     >
//       {label}
//     </Link>
//   );
// }

// const Layout = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       {/* <nav className="bg-gray-800 text-white p-4 flex gap-4">
//         <Link to="/dashboard">Dashboard</Link>
//         <Link to="/attendance">Attendance</Link>
//         <Link to="/settings">Settings</Link>
//         <Link to="/logs">Logs</Link>
//       </nav> */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="px-4 sm:px-6">
//           <div className="flex items-center justify-between h-16 gap-6">
//             {/* ============ Left Section (Logo + Nav) ================ */}
//             <div className="flex items-center gap-6">
//               <a href="/">
//                 <img
//                   src={HM_Clockr_Logo}
//                   alt="HM-Clockr-Logo"
//                   className="h-8 w-auto"
//                 />
//               </a>

//               <nav className="hidden md:flex items-center space-x-1">
//                 <NavItem to="/app/dashboard" label="Dashboard" />
//                 <NavItem to="/app/attendance" label="Attendance" />
//                 <NavItem to="/app/logs" label="Manual Logs" />
//                 <NavItem to="/app/settings" label="Settings" />
//               </nav>
//             </div>

//             {/* Right Section (Profile) */}
//             <ProfileMenu />
//           </div>
//         </div>
//       </header>

import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

function Layout() {
  return (
    <div className="flex h-screen flex-col bg-gray-50 text-gray-800">
      {/* ========= HEADER ========= */}
      <Header />

      {/* Main content */}
      <main className="flex-1  overflow-y-auto p-7 bg-[#F0F2F5] pt-20 pb-12 scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Layout;
