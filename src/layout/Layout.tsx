import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="flex h-screen flex-col bg-gray-50 text-gray-800">
      {/* ========= HEADER ========= */}
      <Header />

      {/* Main content */}
      <main className="flex-1 p-7 dark:bg-[#131C18] bg-[#F0F2F5] pt-20 pb-12 scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
