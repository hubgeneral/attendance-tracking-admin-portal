import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export default function ManualAttendanceButton() {
  const [open, setOpen] = useState(false);
  const [searchEmployee, setSearchEmployee] = useState("");
  const [reason, setReason] = useState("");
  const [clockInTime, setClockInTime] = useState("");
  const [clockOutTime, setClockOutTime] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* ============= Manual Attendance Trigger Button ================ */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
        sx={{
          backgroundColor: "#004E2B",
          "&:hover": { backgroundColor: "#064e3b" },
          borderRadius: "6px",
          textTransform: "none",
        }}
      >
        Manual Attendance
      </Button>

      {/* =========== Modal ============= */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "16px",
            padding: "8px",
          },
        }}
      >
        {/* =========== Header ================= */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px 8px 24px",
          }}
        >
          <DialogTitle
            sx={{ padding: 0, fontSize: "20px", fontWeight: 600, color: "#00274D" }}
          >
            Manual Attendance
          </DialogTitle>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "#6B7280",
              "&:hover": { backgroundColor: "#F3F4F6" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* ========== Content ============= */}
        <DialogContent sx={{ padding: "16px 24px 24px 24px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Search Employee */}
            <TextField
              label="Search Employee"
              variant="outlined"
              fullWidth
              value={searchEmployee}
              onChange={(e) => setSearchEmployee(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: "#9CA3AF" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
                "& .MuiInputLabel-shrink": {
                  fontWeight: 500,
                },
              }}
            />

            {/* Reason */}
            <TextField
              label="Reason"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
                "& .MuiInputLabel-shrink": {
                  fontWeight: 500,
                },
              }}
            />

            {/* Clock In */}
            <TextField
              label="Set Clock In Time"
              variant="outlined"
              fullWidth
              value={clockInTime}
              onChange={(e) => setClockInTime(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon sx={{ color: "#9CA3AF" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
                "& .MuiInputLabel-shrink": {
                  fontWeight: 500,
                },
              }}
            />

            {/* Clock Out */}
            <TextField
              label="Set Clock Out Time"
              variant="outlined"
              fullWidth
              value={clockOutTime}
              onChange={(e) => setClockOutTime(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTimeIcon sx={{ color: "#9CA3AF" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "14px",
                },
                "& .MuiInputLabel-shrink": {
                  fontWeight: 500,
                },
              }}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              startIcon={<CheckCircleOutlinedIcon />}
              fullWidth
              disabled={!searchEmployee || !reason || !clockInTime || !clockOutTime}
              sx={{
                backgroundColor: "#004E2B",
                "&:hover": {
                  backgroundColor: "#064e3b",
                  opacity: 0.9,
                },
                "&.Mui-disabled": {
                  backgroundColor: "#064e3b",
                  opacity: 0.5,
                  color: "#ffffff",
                },
                borderRadius: "8px",
                textTransform: "none",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: 600,
                marginTop: "8px",
              }}
            >
              Set Manual Attendance
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
