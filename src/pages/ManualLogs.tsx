import { Typography } from "@mui/material";
import RecentRequests from "../components/RecentRequest";
import LogHistory from "../components/LogHistory";


export default function ManualLogs() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">

      <div className="mb-6">
        <Typography variant="h4" component="h1" className="font-semibold text-gray-900">
          Manual Logs
        </Typography>
      </div>

      {/* =========== Component Sections ============= */}
      <RecentRequests />
      <LogHistory />
    </div>
  );
}