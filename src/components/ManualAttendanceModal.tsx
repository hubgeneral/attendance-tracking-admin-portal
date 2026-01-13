import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect, useRef } from "react";
import {
  useAddManualAttendanceMutation,
  useSearchEmployeesLazyQuery,
} from "../generated/graphql";

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
    employeeID: "",
    reason: "",
    clockIn: "",
    clockOut: "",
  });

  const [addManualAttendance, { loading: adding }] =
    useAddManualAttendanceMutation();
  const [searchEmployees, { data: employeeData, loading: searching }] =
    useSearchEmployeesLazyQuery();

  const [showDropdown, setShowDropdown] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnterKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && form.employeeName.trim() !== "") {
      e.preventDefault();
      await searchEmployees({ variables: { search: form.employeeName } });
      setShowDropdown(true);
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });

    if (field === "employeeName") {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      if (value.trim() !== "") {
        typingTimeoutRef.current = setTimeout(() => {
          searchEmployees({ variables: { search: value } });
          setShowDropdown(true);
        }, 500);
      } else {
        setShowDropdown(false);
      }
    }
  };

  const handleSelectEmployee = (employeeName: string, id: string) => {
    setForm({
      ...form,
      employeeName: employeeName,
      employeeID: id,
    });
    setShowDropdown(false);
  };

  const isValid = form.employeeName && form.reason && form.clockIn;

  const handleSubmit = async () => {
    if (!isValid) return;

    try {
      // Use today's date for the DateTime
      const today = new Date().toISOString().split("T")[0];

      const result = await addManualAttendance({
        variables: {
          adminID: 1,
          adminName: "Admin",
          userid: Number(form.employeeID),
          employeeName: form.employeeName,
          reason: form.reason,
          clockIn: new Date(`${today}T${form.clockIn}:00`),
          clockOut: form.clockOut
            ? new Date(`${today}T${form.clockOut}:00`)
            : new Date(`${today}T23:59:59`),
          approvalStatus: "PENDING",
        },
        refetchQueries: ["RecentRequests"],
        awaitRefetchQueries: true,
      });

      console.log("Manual attendance added:", result);

      onSuccess("Manual attendance request submitted successfully.");

      // Reset form
      setForm({
        employeeName: "",
        employeeID: "",
        reason: "",
        clockIn: "",
        clockOut: "",
      });

      onClose();
    } catch (error) {
      console.error("Error submitting manual attendance:", error);
      onError("Failed to set manual attendance. Try again.");
    }
  };

  useEffect(() => {
    if (!open) {
      setForm({
        employeeName: "",
        employeeID: "",
        reason: "",
        clockIn: "",
        clockOut: "",
      });
      setShowDropdown(false);
    }
  }, [open]);

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
          <Box position="relative">
            <TextField
              label="Search Employee"
              value={form.employeeName}
              onChange={(e) => handleChange("employeeName", e.target.value)}
              onKeyDown={handleEnterKeyPress}
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {searching ? (
                      <CircularProgress size={20} />
                    ) : (
                      <SearchIcon sx={{ color: "#6B7280" }} />
                    )}
                  </InputAdornment>
                ),
              }}
            />

            {showDropdown &&
              !searching &&
              (employeeData as any)?.users?.length > 0 && (
                <Box
                  sx={{
                    position: "absolute",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    borderRadius: "6px",
                    width: "100%",
                    maxHeight: 150,
                    overflowY: "auto",
                    zIndex: 10,
                    mt: 1,
                  }}
                >
                  {(employeeData as any)?.users.map((emp: any) => (
                    <MenuItem
                      key={emp.id}
                      onClick={() =>
                        handleSelectEmployee(emp.employeeName, emp.id)
                      }
                    >
                      {emp.employeeName}
                    </MenuItem>
                  ))}
                </Box>
              )}
          </Box>

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
              style: { color: form.clockOut ? "#000" : "transparent" },
            }}
          />

          <Button
            onClick={handleSubmit}
            disabled={!isValid || adding}
            variant="contained"
            fullWidth
            startIcon={
              adding ? <CircularProgress size={20} /> : <CheckCircleIcon />
            }
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
            {adding ? "Submitting..." : "Set Manual Attendance"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
