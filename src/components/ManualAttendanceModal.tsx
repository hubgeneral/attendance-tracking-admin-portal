import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

interface ManualAttendanceModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

export default function ManualAttendanceModal({
  open,
  onClose,
  onSuccess,
  onError,
}: ManualAttendanceModalProps) {
  const [form, setForm] = useState({
    employeeName: "",
    reason: "",
    clockIn: "",
    clockOut: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const isValid = form.employeeName && form.reason && form.clockIn;

  const handleSubmit = () => {
    if (isValid) {
      onSuccess("Manual attendance set successfully.");
      onClose();
    } else {
      onError("Sorry, we couldn’t set manual attendance. Try again."); // ❌ error alert
      onClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "10px",
          p: 1,
        },
      }}
    >
      <Box className="flex justify-between items-center px-4 pt-2 pb-1">
        <DialogTitle
          sx={{
            fontWeight: 600,
            color: "#00274D",
            fontSize: "1rem",
            px: 1,
            py: 0,
          }}
        >
          Manual Attendance
        </DialogTitle>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>
        <Box className="flex flex-col gap-4">
          <TextField
            label="Search Employee"
            value={form.employeeName}
            onChange={(e) => handleChange("employeeName", e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#6B7280" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Reason"
            value={form.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            fullWidth
            multiline
            minRows={3}
            size="small"
          />

          <TextField
            label="Set Clock In Time"
            type="time"
            value={form.clockIn}
            onChange={(e) => handleChange("clockIn", e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              style: { color: form.clockIn ? "#000" : "transparent" },
            }}
          />

          <TextField
            label="Set Clock Out Time"
            type="time"
            value={form.clockOut}
            onChange={(e) => handleChange("clockOut", e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              style: { color: form.clockIn ? "#000" : "transparent" },
            }}
          />

          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            variant="contained"
            fullWidth
            startIcon={<CheckCircleIcon />}
            sx={{
              backgroundColor: "#004E2B",
              color: "#fff",
              textTransform: "none",
              borderRadius: "4px",
              fontWeight: 600,
              py: 1.2,
              "&:hover": {
                backgroundColor: "#006636",
              },
              "&.Mui-disabled": {
                backgroundColor: "#004E2B",
                color: "#fff",
                opacity: 0.2,
              },
            }}
          >
            Set Manual Attendance
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
