import React from "react";
import { Button, IconButton } from "@mui/material";
import { Copy } from "lucide-react";
import CloseIcon from "@mui/icons-material/Close";

interface GeneratedPasswordModalProps {
  open: boolean;
  onClose: () => void;
  password: string;
  employeeId: string;
}

export default function GeneratedPasswordModal({
  open,
  onClose,
  password,
  employeeId,
}: GeneratedPasswordModalProps) {
  if (!open) return null;

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] relative">
        {/* Close icon in top-right corner */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "#6B7280",
            "&:hover": { color: "#111827" },
          }}
        >
          <CloseIcon />
        </IconButton>

        <h2 className="text-lg font-semibold mb-4 text-[#00274D]">
          Password Generated for {employeeId}
        </h2>

        {/* Password display box */}
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-4">
          <span className="font-mono text-gray-800 text-sm">{password}</span>
          <Copy
            className="w-5 h-5 cursor-pointer text-gray-600 hover:text-gray-800 transition"
            onClick={copyPassword}
          />
        </div>

        {/* Close button */}
        <Button
          variant="contained"
          startIcon={<CloseIcon />}
          fullWidth
          onClick={onClose}
          sx={{
            backgroundColor: "#004E2B",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: "8px",
            py: 1,
            "&:hover": { backgroundColor: "#027340" },
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
