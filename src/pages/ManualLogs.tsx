import { Alert, Box, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RecentRequests from "../components/RecentRequest";
import LogHistory from "../components/LogHistory";
import { useState } from "react";
import ManualAttendanceModal from "../components/ManualAttendanceModal";
import TakeActionModal from "../components/TakeActionModal";

export default function ManualLogs() {
  const [openManualModal, setOpenManualModal] = useState(false);
  const [openActionModal, setOpenActionModal] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    type: "success" as "success" | "error",
    message: "",
  });

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
    handleSuccess("Request approved successfully");
  };

  const handleReject = () => {
    console.log("Request rejected");
    setOpenActionModal(false);
    handleSuccess("Request rejected successfully");
  };

  const handleSuccess = (msg: string) => {
    setAlert({ open: true, type: "success", message: msg });
    setTimeout(() => setAlert((prev) => ({ ...prev, open: false })), 3000);
  };

  const handleError = (msg: string) => {
    setAlert({ open: true, type: "error", message: msg });
    setTimeout(() => setAlert((prev) => ({ ...prev, open: false })), 3000);
  };

  return (
    <div className="relative">
      <Collapse in={alert.open}>
        <Box
          sx={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2000,
            width: "auto",
            maxWidth: "90%",
          }}
        >
          <Alert
            severity={alert.type}
            variant="filled"
            sx={{
              backgroundColor: alert.type === "success" ? "#F2FBF6" : "#F2FBF6",
              color: alert.type === "success" ? "#065f46" : "#991b1b",
              border: "1px solid #D9F2E5",
              borderLeft: `4px solid ${
                alert.type === "success" ? "#00AB50" : "#ef4444"
              }`,
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              display: "flex",
              alignItems: "center",
              px: 4,
              py: 1,
              minWidth: "280px",
              "& .MuiAlert-message": {
                padding: 0,
                width: "100%",
              },
            }}
            onClose={() => setAlert((prev) => ({ ...prev, open: false }))}
          >
            {alert.message}
          </Alert>
        </Box>
      </Collapse>

      {/* Page header */}
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
        onSuccess={handleSuccess}
        onError={handleError}
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
