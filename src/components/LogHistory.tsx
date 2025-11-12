import SearchIcon from "@mui/icons-material/Search";
import { useLogHistroyQuery } from "../generated/graphql";
import TableComponent from "./Tables";

import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { DateRangePicker } from "rsuite";
import { formatDate, formatTime } from "../../helpers";

export default function LogHistory() {
  const [query, setQuery] = useState("");

  const { data, loading, error } = useLogHistroyQuery();
  const LogHistory = data?.manualLogs || [];

  interface LogRecord {
    id: string;
    employeeName: string;
    reason: string;
    clockIn: string;
    clockOut: string;
    oldClockIn?: string;
    oldClockOut?: string;
    actionBy: string;
    actionDate: string;
  }

  const rows = useMemo(() => {
    let filtered = LogHistory as LogRecord[];
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter((r) => {
        const employee = (r.employeeName ?? "").toString().toLowerCase();
        const reason = (r.reason ?? "").toString().toLowerCase();
        const clockIn = (r.clockIn ?? "").toString().toLowerCase();
        const clockOut = (r.clockOut ?? "").toString().toLowerCase();
        const actionBy = (r.actionBy ?? "").toString().toLowerCase();
        return (
          employee.includes(q) ||
          reason.includes(q) ||
          clockIn.includes(q) ||
          clockOut.includes(q) ||
          actionBy.includes(q)
        );
      });
    }
    return filtered;
  }, [query, LogHistory]);

  const columns = [
    {
      field: "employeeName",
      headerName: "Employee",
      valueGetter: (row: any) => row.employeeName,
    },
    {
      field: "reason",
      headerName: "Reason",
      valueGetter: (row: any) => row.reason,
    },
    {
      field: "clockIn",
      headerName: "Clock In",
      valueGetter: (row: any) => (
        <>
          {row.oldClockIn ? (
            <span
              style={{
                textDecoration: "line-through",
                color: "#A4A4A4",
                marginRight: 6,
              }}
            >
              {formatTime(row.oldClockIn)}
            </span>
          ) : null}
          {formatTime(row.clockIn)}
        </>
      ),
    },

    {
      field: "clockOut",
      headerName: "Clock Out",
      valueGetter: (row: any) => (
        <>
          {row.oldClockOut ? (
            <span
              style={{
                textDecoration: "line-through",
                color: "#A4A4A4",
                marginRight: 6,
              }}
            >
              {formatTime(row.oldClockOut)}
            </span>
          ) : null}
          {formatTime(row.clockOut)}
        </>
      ),
    },
    {
      field: "actionBy",
      headerName: "Action By",
      valueGetter: (row: any) => {
        if (!row.actionBy && !row.actionDate) {
          return <span style={{ color: "#A4A4A4" }}>—</span>;
        }
        return `${row.actionBy} ${formatDate(row.actionDate)}`;
      },
    },
  ];
  return (
    <Card className="mb-6" elevation={1}>
      <CardContent className="dark:bg-[#14241D]">
        <Box className="flex items-center justify-between mb-6">
          <Typography
            variant="h6"
            component="h6"
            className="font-bold dark:text-[#E8EAE9]"
          >
            Logs History
          </Typography>

          <Box
            className="flex items-center gap-3 "
            sx={{ maxWidth: 600, borderRadius: "5px", boxShadow: "none" }}
          >
            <TextField
              placeholder="Search employee name"
              variant="outlined"
              size="small"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: "#52667A", fontSize: 20 }}
                      className="dark:text-[#E8EAE9]"
                    />
                  </InputAdornment>
                ),
                sx: {
                  height: 40,
                  fontSize: 14,
                  fontFamily: "inherit",
                  paddingX: 1,
                  borderColor: "#E8ECF0",
                },
              }}
              sx={{
                minWidth: 220,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  fontSize: 14,
                  height: 38,
                  color: "#52667A",
                },
                "& .MuiInputBase-input": {
                  padding: "8px 12px",
                },
              }}
              className="[&_.MuiOutlinedInput-root]:bg-white [&_.MuiOutlinedInput-root]:dark:bg-[#1A2D26]
             [&_.MuiOutlinedInput-input]:text-gray-900 [&_.MuiOutlinedInput-input]:dark:text-white
             [&_.MuiOutlinedInput-notchedOutline]:border-gray-300 [&_.MuiOutlinedInput-notchedOutline]:dark:border-[#204335]"
            />

            <div className="flex-shrink-0 w-full sm:w-auto">
              <DateRangePicker
                size="md"
                placeholder="Select Date"
                placement="bottomEnd"
                className="w-full sm:w-auto"
              />
            </div>
          </Box>
        </Box>

        {/* Table */}
        {loading ? (
          <Box className="flex justify-center items-center h-full">
            <CircularProgress size={24} className="dark:text-white" />
            <span className="ms-2 dark:text-white">Loading..</span>
          </Box>
        ) : error ? (
          <p className="text-center">Error loading History</p>
        ) : (
          <TableComponent columns={columns} data={LogHistory} />
        )}
        {rows.length === 0 && (
          <Box className="text-center py-8">
            <Typography variant="body1" color="textSecondary">
              No records found matching your search criteria.
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
