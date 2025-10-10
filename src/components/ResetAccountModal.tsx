import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

interface ResetAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  user?: {
    name?: string;
    employeeId?: string;
  };
}

export default function ResetAccountModal({
  isOpen,
  onClose,
  onConfirm,
  user,
}: ResetAccountModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px]">
        <h2 className="text-lg font-semibold mb-2 text-#00274D,">
          Reset Account
        </h2>
        <p className="text-sm text-#00274D,, mb-4">
          Confirm you want to reset the account of{" "}
          <span className="font-medium">{user?.name}</span> –{" "}
          <span className="font-medium">{user?.employeeId}</span>?
          <br />
          <span className="text-xs text-gray-500 ">
            NB: This action will clear the user’s account password.
          </span>
        </p>
        <div className="flex justify-end gap-5">
          <Button
            onClick={onClose}
            startIcon={<CloseIcon />}
            sx={{
              backgroundColor: "#ffffffff",
              border: 1,
              borderColor: "#004E2B",
              color: "#004E2B",
              width: "180px",
              textTransform: "none",
              marginTop: "8px",
              "&:hover": { backgroundColor: "#eefcf5ff" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={onClose}
            startIcon={<CheckCircleOutlinedIcon />}
            sx={{
              backgroundColor: "#004E2B",
              color: "#ffffffff",
              width: "180px",
              textTransform: "none",
              marginTop: "8px",
              "&:hover": { backgroundColor: "#027340ff" },
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}
