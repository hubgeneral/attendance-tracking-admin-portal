import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { MdLogin, MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../App.css";
import TimeClocker from "../assets/HMClockrgreen.svg";
import TimeClockerwh from "../assets/HMClockrwh.svg";
import HMLogo from "../assets/HMLogo.svg";
import HMLogowh from "../assets/HMLogowh.svg";
import Footer from "../components/Footer";
import ThemeBtn from "../components/ThemeBtn";
import { useAuth } from "../app/hooks/useAuth";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      await login({ username, password });

      console.log("Login successful");

      navigate("/app/dashboard");
    } catch (error) {
      console.error("Login failed:", error);

      setLoading(false);
      setError("Invalid username or password");
    }

    console.log("Email:", username, "Password:", password);
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-[#1B2420] flex flex-col">
      {/* Theme toggle */}
      <div className="absolute top-4 right-10">
        <ThemeBtn />
      </div>

      {/* Centered Login Box */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white dark:bg-[#14201C] shadow-md rounded-xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center space-x-4 mb-7">
            <>
              <img
                src={TimeClocker}
                alt="HM Clockr"
                className="h-8 border-e-2 border-gray-200 pe-4 dark:hidden"
              />
              <img
                src={HMLogowh}
                alt="Heidelberg Materials"
                className="h-8 dark:hidden"
              />
            </>
            <>
              <img
                src={TimeClockerwh}
                alt="HM Clockr"
                className="h-8 border-e-2 border-gray-200 pe-4 hidden dark:block"
              />
              <img
                src={HMLogo}
                alt="Heidelberg Materials"
                className="h-8 hidden dark:block"
              />
            </>
          </div>

          <h1 className="text-center text-xl font-semibold text-[#00274D] dark:text-white mb-5">
            Digital Hub Ghana Clocking
            <br /> System
          </h1>
          <p className="text-center text-lg text-[#00274D] dark:text-gray-300 mb-6">
            Sign in
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
                {error}
              </div>
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-10"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <MdOutlineRemoveRedEye className="h-5 w-5 text-gray-400" />
                ) : (
                  <GoEyeClosed className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>

            <div className="text-right">
              <a
                href="reset-password"
                className="text-green-600 text-sm hover:underline dark:text-green-400"
              >
                Forget password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full loginbtn text-white py-2 rounded-lg hover:bg-green-800 dark:bg-[#004E2B] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !username || !password}
            >
              {loading ? (
                <CircularProgress
                  size={20}
                  className="dark:text-white text-white"
                />
              ) : (
                <MdLogin />
              )}
              <span>{loading ? "Logging in..." : "Login"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Login;
