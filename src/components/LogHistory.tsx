import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { logHistory, type AttendanceRecord } from "../services/mockData";

export default function LogHistory() {
  const [query, setQuery] = useState("");
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  // Filter logs
  const rows = logHistory.filter((r: AttendanceRecord) => {
    const matchesQuery =
      r.employeeName.toLowerCase().includes(query.toLowerCase()) ||
      r.reason.toLowerCase().includes(query.toLowerCase());

    const matchesDate =
      !dateRange ||
      (new Date(r.date) >= dateRange[0] && new Date(r.date) <= dateRange[1]);

    return matchesQuery && matchesDate;
  });

  return (
    <Card elevation={1}>
      <CardContent>
        {/* Header Row */}
        <Box className="flex items-center justify-between mb-4">
          <Typography variant="h6" component="h2" className="font-bold"
          sx={{
              fontWeight: 600, 
              color: "#29333D",
            }}
            >
            Logs History
          </Typography>

          <Box className="flex items-center gap-3">
            {/* Search */}
            <TextField
              placeholder="Search employee name"
              variant="outlined"
              size="small"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
                minWidth: "220px",
              }}
            />

            {/* Date Range Picker */}
          <Box
            sx={{
              position: "relative",
              minWidth: "220px",
            }}
          >
            <DateRangePicker
              placeholder="Select Date"
              style={{
                fontWeight: "bold",
                width: "100%",
                height: "40px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                paddingLeft: "40px",
                fontSize: "14px",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                color: "#1d1d1dff",
              }}
              value={dateRange || undefined}
              onChange={(value) =>
                setDateRange(value ? (value as [Date, Date]) : null)
              }
              format="MM/dd/yyyy"
              cleanable={true}
              appearance="default"
              caretAs={null} 
              placement="bottomEnd"
            />
            <CalendarTodayIcon
              sx={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#1d1d1dff",
                fontSize: "20px",
                pointerEvents: "none",
              }}
            />
          </Box>


          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ border: "1px solid #e5e7eb" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F0F2F5" }}>
                <TableCell sx={{ fontWeight: 400, color: "#52667A" }}>Employee</TableCell>
                <TableCell sx={{ fontWeight: 400, color: "#52667A" }}>Reason</TableCell>
                <TableCell sx={{ fontWeight: 400, color: "#52667A" }}>Clock In</TableCell>
                <TableCell sx={{ fontWeight: 400, color: "#52667A" }}>Clock Out</TableCell>
                <TableCell sx={{ fontWeight: 400, color: "#52667A" }}>Action By</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} hover>
                  {/* Employee */}
                  <TableCell sx={{ fontWeight: 500 }}>
                    {row.employeeName}
                  </TableCell>

                  {/* Reason */}
                  <TableCell sx={{ maxWidth: 350 }}>
                    <Typography variant="body2" className="text-gray-600">
                      {row.reason}
                    </Typography>
                  </TableCell>

                  {/* Clock In */}
                  <TableCell>{row.clockIn || "N/A"}</TableCell>

                  {/* Clock Out */}
                  <TableCell>{row.clockOut || "N/A"}</TableCell>

                  {/* Action By */}
                  <TableCell>
                    <Typography
                      variant="body2"
                      className="font-medium text-gray-900"
                    >
                      {row.actionBy}
                    </Typography>
                    <Typography
                      variant="caption"
                      className="text-gray-500 block"
                    >
                      {row.date}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {rows.length === 0 && (
          <Box className="text-center py-8">
            <Typography variant="body1" color="textSecondary">
              No records found matching your criteria.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}