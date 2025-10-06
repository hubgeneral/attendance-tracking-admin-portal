import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RecentRequests from "../components/RecentRequest";
import LogHistory from "../components/LogHistory";
import { useState } from "react";
import ManualAttendanceModal from "../components/ManualAttendanceModal";
import TakeActionModal from "../components/TakeActionModal";

export default function ManualLogs() {
  const [openManualModal, setOpenManualModal] = useState(false);
  const [openActionModal, setOpenActionModal] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState<{
    employeeName: string;
    requestDate: string;
    reason: string;
  }>({
    employeeName: "",
    requestDate: "",
    reason: "",
  });

  const handleApprove = () => {
    console.log("Request approved");
    setOpenActionModal(false);
  };

  const handleReject = () => {
    console.log("Request rejected");
    setOpenActionModal(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 px-1 gap-2">
        <h1 className="text-2xl sm:text-2xl font-semibold text-[#29333D]">
          Manual Logs
        </h1>

        <button
          onClick={() => setOpenManualModal(true)}
          className="flex items-center gap-2 bg-[#004E2B] text-white px-4 py-2 rounded shadow hover:bg-[#00663A] transition w-full sm:w-auto"
        >
          <AddIcon fontSize="small" />
          Manual Attendance
        </button>
      </div>

      <RecentRequests
        onTakeAction={(request) => {
          setSelectedRequest({
            employeeName: request.employeeName,
            requestDate: request.date,
            reason: request.reason,
          });
          setOpenActionModal(true);
        }}
      />

      <LogHistory />

      <ManualAttendanceModal
        open={openManualModal}
        onClose={() => setOpenManualModal(false)}
      />

      <TakeActionModal
        open={openActionModal}
        onClose={() => setOpenActionModal(false)}
        employeeName={selectedRequest.employeeName}
        requestDate={selectedRequest.requestDate}
        reason={selectedRequest.reason}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}
