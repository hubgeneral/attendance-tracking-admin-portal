import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
      {/* ========= HEADER ========= */}
      <Header />

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

export default Layout;
