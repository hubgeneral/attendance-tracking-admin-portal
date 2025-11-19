import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

const AccessDenied = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#1B2420] flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white dark:bg-[#14201C] shadow-xl rounded-2xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300 flex items-center justify-center">
            <MdOutlineLock className="w-8 h-8" />
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-red-600 font-semibold mb-2">
            Access Denied
          </p>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            You don&apos;t have permission to access this portal
          </h1>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          {currentUser?.userName
            ? `${currentUser.userName}, your account is not authorized to use the admin dashboard.`
            : "Your account is not authorized to use the admin dashboard."}{" "}
          Please contact an administrator if you believe this is an error.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          {/* <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Go Back
          </button> */}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full px-5 py-3 rounded-lg bg-red-400 text-white font-semibold hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessDenied;
