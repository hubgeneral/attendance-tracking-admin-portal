import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { useState } from "react";

interface TakeActionModalProps {
  open: boolean;
  onClose: () => void;
  employeeName: string;
  requestDate: string;
  reason: string;
  onApprove: () => void;
  onReject: () => void;
}

export default function TakeActionModal({
  open,
  onClose,
  employeeName,
  requestDate,
  reason,
  onApprove,
  onReject,
}: TakeActionModalProps) {
  const [form, setForm] = useState({ clockIn: "", clockOut: "" });
  const isValid = !!form.clockIn;

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (isValid) {
      onApprove();
      onClose();
    } else {
      onReject();
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
        sx: { borderRadius: "10px", p: 1 },
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
          Request
        </DialogTitle>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent>
        <Box className="flex flex-col gap-2">
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#52667A", fontWeight: 500 }}
            >
              Employee
            </Typography>
            <Typography sx={{ color: "#29333D", fontWeight: 500 }}>
              {employeeName}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#52667A", fontWeight: 500 }}
            >
              Date & Time
            </Typography>
            <Typography sx={{ color: "#29333D", fontWeight: 500 }}>
              {requestDate}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#52667A", fontWeight: 500 }}
            >
              Reason/Request
            </Typography>
            <Typography sx={{ color: "#29333D", fontSize: "14px", mb: 1 }}>
              {reason}
            </Typography>
          </Box>

          <TextField
            label="Set Clock In Time"
            type="time"
            value={form.clockIn}
            onChange={(e) => handleChange("clockIn", e.target.value)}
            fullWidth
            size="small"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#29333D",
                fontSize: "14px",
              },
              "& .MuiInputBase-root": {
                borderRadius: "6px",
              },
            }}
            InputProps={{
              style: { color: form.clockIn ? "#000" : "transparent" },
              sx: {
                height: 42,
                fontSize: "15px",
                "& input": {
                  padding: "10px 12px",
                  color: "#29333D",
                  textAlign: "center",
                },
              },
            }}
          />

          <TextField
            label="Set Clock Out Time"
            type="time"
            value={form.clockOut}
            onChange={(e) => handleChange("clockOut", e.target.value)}
            fullWidth
            size="small"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#29333D",
                fontSize: "14px",
              },
              "& .MuiInputBase-root": {
                borderRadius: "6px",
              },
            }}
            InputProps={{
              sx: {
                height: 42,
                fontSize: "15px",
                "& input": {
                  padding: "10px 12px",
                  color: "#29333D",
                  textAlign: "center",
                },
              },
            }}
          />

          <Box className="flex justify-between gap-2 mt-2">
            <Button
              variant="contained"
              fullWidth
              startIcon={<CancelOutlinedIcon />}
              sx={{
                backgroundColor: "#E71818",
                color: "#fff",
                textTransform: "none",
                borderRadius: "4px",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#B91C1C" },
              }}
              onClick={onReject}
            >
              Reject Request
            </Button>

            <Button
              variant="contained"
              fullWidth
              disabled={!isValid}
              startIcon={<CheckCircleOutlineOutlinedIcon />}
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
              onClick={onApprove}
            >
              Approve Request
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
