import { useState } from "react";
import TimeClocker from "../assets/HmClockrLogo.svg";
import TimeClockerwh from "../assets/HMClockrwh.svg";
import HMLogo from "../assets/HMLogo.svg";
import HMlogowh from "../assets/HMLogowh.svg";
import Footer from "./Footer";
import ThemeBtn from "./ThemeBtn";
import { MdLock, MdOutlineRemoveRedEye } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { useResetPassword } from "../app/hooks/useResetPassword";

const ResetPasswordConfirmation = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmedPassword, setShowConfirmedPassword] =
    useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { resetPassword } = useResetPassword();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword({
        newPassword: password.trim(),
        confirmPassword: confirmPassword.trim(),
      });

      console.log("Password reset successful");
      setMessage("Password reset successful. Redirecting to login...");

      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log("Password reset failed:", error);
      setLoading(false);
      setError("Password reset failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
                src={HMlogowh}
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

          <h1 className="text-center text-2xl font-semibold text-gray-900 dark:text-white mb-5">
            Digital Hub Ghana Clocking System
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
            Create New Password
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handlePasswordReset}>
            {message && (
              <div className="bg-red-100 text-green-600 px-4 py-2 rounded">
                {message}
              </div>
            )}
            {error && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded">
                {error}
              </div>
            )}
            <div className="relative w-full flex flex-col gap-4">
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-10"
                  required={true}
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
              <div className="relative w-full">
                <input
                  type={showConfirmedPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-800 dark:bg-[#14201C] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 pr-10"
                  required={true}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmedPassword(!showConfirmedPassword)
                  }
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  {showConfirmedPassword ? (
                    <MdOutlineRemoveRedEye className="h-5 w-5 text-gray-400" />
                  ) : (
                    <GoEyeClosed className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>

              <button
                type="submit"
                className="w-full loginbtn text-white py-2 rounded-lg hover:bg-green-800 dark:bg-[#004E2B] transition-colors flex items-center justify-center space-x-2  disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!password || password !== confirmPassword}
              >
                {loading ? (
                  <CircularProgress
                    size={20}
                    className="text-white dark:text-white"
                  />
                ) : (
                  <MdLock />
                )}
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

export default ResetPasswordConfirmation;
