import { Link, Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
         <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/logs">Logs</Link>
      </nav> */}

      {/* Main content */}
      <main className="flex-1 p-0">
        <Outlet />
      </main>
    </div>

    </div>
  )
}

export default Layout
