import { useNavigate } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Settings</h1>

      <div className="max-w-xs">
        <div
          onClick={() => navigate("users")}
          className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-gray-300"
        >
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <ManageAccountsIcon style={{ fontSize: 40, color: "#16a34a" }} />
          </div>

          <span className="text-base font-medium text-gray-800 mt-3">
            Users
          </span>
        </div>
      </div>
    </div>
  );
}
