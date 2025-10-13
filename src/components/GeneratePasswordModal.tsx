import React from "react";
import { Button } from "@mui/material";
import { Copy } from "lucide-react";
import CloseIcon from "@mui/icons-material/Close";

interface GeneratedPasswordModal {
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
}: GeneratedPasswordModal) {
  if (!open) return null;

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-4 text-[#00274D]">
          Password Generated for {employeeId}
        </h2>
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-4">
          <span className="font-mono text-gray-800">{password}</span>
          <Copy
            className="w-4 h-4 cursor-pointer text-gray-600"
            onClick={copyPassword}
          />
        </div>
        <Button
          startIcon={<CloseIcon className="-mt-0.5" />}
          className="w-full"
          onClick={onClose}
          sx={{
            backgroundColor: "#004E2B",
            color: "white",
            "&:hover": { backgroundColor: "#027340ff" },
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
