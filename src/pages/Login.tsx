import { useState, useEffect } from "react";
import HMLogo from "../assets/HM.logo.png";
import TimeClocker from "../assets/TimeClocker.logo.png";
import TimeClockerwh from "../assets/TimeClockerwh.logo.png"
import HMlogowh from "../assets/HM.logowh.png"
import {
  MdOutlineRemoveRedEye,
  MdLogin,
  MdOutlineWbSunny,
} from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";


type Theme = "light" | "dark";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="h-screen bg-gray-100 dark:bg-[#1B2420] flex flex-col">
  {/* Theme toggle */}
  <div className="absolute top-4 right-10">
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full bg-white-200 dark:bg-green-700 shadow-md"
    >
      {theme === "light" ? <IoMoonOutline /> : <MdOutlineWbSunny />}
    </button>
  </div>

  {/* Centered Login Box */}
  <div className="flex-1 flex items-center justify-center">
    <div className="bg-white dark:bg-[#14201C] shadow-md rounded-xl p-8 w-full max-w-md">
      <div className="flex items-center justify-center space-x-4 mb-7">
        {theme === "light" ? (
          <>
            <img
              src={TimeClocker}
              alt="HM Clockr"
              className="h-8 border-e-2 border-gray-200 pe-4"
            />
            <img src={HMLogo} alt="Heidelberg Materials" className="h-8" />
          </>
        ) : (
          <>
            <img
              src={TimeClockerwh}
              alt="HM Clockr"
              className="h-8 border-e-2 border-gray-200 pe-4"
            />
            <img src={HMlogowh} alt="Heidelberg Materials" className="h-8" />
          </>
        )}
      
      </div>

      <h1 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-5">
        Digital Hub Ghana Clocking System
      </h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
        Sign in
      </p>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          <Link
            to="/app/dashboard"
            className="text-green-600 text-sm hover:underline dark:text-green-400"
          >
            Reset password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full loginbtn text-white py-2 rounded-lg hover:bg-green-800 dark:bg-[#004E2B] transition-colors flex items-center justify-center space-x-2"
        >
          <MdLogin />
          <span>Login</span>
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
