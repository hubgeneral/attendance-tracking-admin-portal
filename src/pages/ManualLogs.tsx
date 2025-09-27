import { Typography, Box } from "@mui/material";
import RecentRequests from "../components/RecentRequest";
import LogHistory from "../components/LogHistory";
import ManualAttendanceButton from "../components/ManualAttendance";

export default function ManualLogs() {
  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Header Row */}
      <Box className="flex items-center justify-between mb-6">
        <Typography variant="h4" component="h1" className="font-bold text-gray-900"
        sx={{
              fontWeight: 900, 
              color: "#29333D",
            }}>
          Manual Logs
        </Typography>
        <ManualAttendanceButton />
      </Box>

      {/* =========== Component Sections ============= */}
      <RecentRequests />
      <LogHistory />
    </div>
  );
}
