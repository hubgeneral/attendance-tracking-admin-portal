import { useState } from "react";
import TimeClocker from "../assets/HmClockrLogo.svg";
import TimeClockerwh from "../assets/HMClockrwh.svg";
import HMLogo from "../assets/HMLogo.svg";
import HMlogowh from "../assets/HMLogowh.svg";
import Footer from "../components/Footer";
import ThemeBtn from "../components/ThemeBtn";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [employeeId, setEmployeeId] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const navigate = useNavigate();
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
                src={HMLogo}
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
                src={HMlogowh}
                alt="Heidelberg Materials"
                className="h-8 hidden dark:block"
              />
            </>
          </div>

          <h1 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-5">
            Digital Hub Ghana Clocking System
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
            Forgot Password?
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div className="relative w-full flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />

              <input
                type="text"
                placeholder="Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-10"
                required
              />

              <input
                type="text"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-10"
                required
              />

              {/* <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {showPassword ? (
                  <MdOutlineRemoveRedEye className="h-5 w-5 text-gray-400" />
                ) : (
                  <GoEyeClosed className="h-5 w-5 text-gray-400" />
                )}
              </button> */}

              <button
                type="submit"
                className="w-full loginbtn text-white py-2 rounded-lg hover:bg-green-800 dark:bg-[#004E2B] transition-colors flex items-center justify-center space-x-2"
                onClick={() => {
                  navigate("/reset-password-confirmation");
                }}
              >
                <MdLock />
                <span>Reset Password</span>
              </button>
            </div>

            {/* <div className="text-right">
              <a
                href="reset-password"
                className="text-green-600 text-sm hover:underline dark:text-green-400"
              >
                Reset password?
              </a>
            </div> */}
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ResetPassword;
