import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { useState } from "react";
import type { RecentRequest } from "../services/mockData";

interface ActionModalProps {
  open: boolean;
  onClose: () => void;
  request: RecentRequest | null;
}

export default function ActionModal({ open, onClose, request }: ActionModalProps) {
  const [clockIn, setClockIn] = useState("");
  const [clockOut, setClockOut] = useState("");

  if (!request) return null;

  const canApprove = clockIn.trim() !== "" && clockOut.trim() !== "";

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          width: 500,
          p: 3,
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6" className="font-bold"
          sx={{
            color: "#00274D",
            fontWeight: "bold",
          }}>
            Request
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Employee */}
        <Typography variant="caption" className=" text-gray-500">
          Employee
        </Typography>
        <Typography variant="body1" className="mb-3 font-medium text-gray-800">
          {request.employeeName}
        </Typography>

        {/* Date & Time */}
        <Typography variant="caption" className=" text-gray-500">
          Date & Time
        </Typography>
        <Typography variant="body1" className="mb-3 font-medium text-gray-800">
          {request.date}
        </Typography>

        {/* Reason */}
        <Typography variant="caption" className=" text-gray-500">
          Reason/Request
        </Typography>
        <Typography
          variant="body2"
          className="mb-5 text-gray-700 leading-relaxed"
        >
          {request.reason}
        </Typography>

        {/* Clock In / Clock Out fields */}
        <div className="space-y-4 mb-6">
          <TextField
            label="Set Clock In Time"
            fullWidth
            value={clockIn}
            onChange={(e) => setClockIn(e.target.value)}
            InputProps={{
              endAdornment: <AccessTimeIcon className="text-gray-500" />,
            }}
          />
          <TextField
            label="Set Clock Out Time"
            fullWidth
            value={clockOut}
            onChange={(e) => setClockOut(e.target.value)}
            InputProps={{
              endAdornment: <AccessTimeIcon className="text-gray-500" />,
            }}
          />
        </div>


        {/* ==================== Footer Buttons ================== */}


            <div className="flex justify-between gap-3 mt-4">
            {/* Reject Button */}
            <Button
                variant="contained"
                startIcon={<CancelOutlinedIcon />}
                sx={{
                flex: 1,
                backgroundColor: "#E71818",
                "&:hover": {
                    backgroundColor: "#B71C1C",
                },
                borderRadius: "8px",
                textTransform: "none",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: 600,
                }}
                onClick={onClose}
            >
                Reject Request
            </Button>

            {/* Approve Button */}
            <Button
                variant="contained"
                startIcon={<CheckCircleOutlinedIcon />}
                sx={{
                flex: 1,
                backgroundColor: "#004E2B",
                "&:hover": {
                    backgroundColor: "#064e3b",
                    opacity: 0.9,
                },
                "&.Mui-disabled": {
                    backgroundColor: "#064e3b",
                    opacity: 0.3,
                    color: "#ffffff",
                },
                borderRadius: "8px",
                textTransform: "none",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: 600,
                }}
                disabled={!canApprove}
            >
                Approve Request
            </Button>
            </div>
      </Box>
    </Modal>
  );
}
