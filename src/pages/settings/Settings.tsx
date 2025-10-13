import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useNavigate } from "react-router-dom";
import ManageAccounts from "../../assets/ManageAccountsIcon.svg";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-3">Settings</h1>
      <div className="p-8  bg-white min-h-[70vh] ">
        <div className="max-w-xs">
          <div
            onClick={() => navigate("users")}
            className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-gray-300"
          >
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
              {/* <ManageAccountsIcon className="w-10 h-10 text-green-600" /> */}
              <img src={ManageAccounts} alt="User Icon" className="w-8 h-8" />
            </div>

            <span className="text-base font-semibold text-gray-800 mt-3">
              Users
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
