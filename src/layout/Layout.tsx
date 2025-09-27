import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      {/* ========= HEADER ========= */}
      <div className="flex-shrink-0">
        <Header />
      </div>

      {/* ========= MAIN CONTENT (scrollable) ========= */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* ========= FOOTER ========= */}
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
