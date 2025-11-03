import SearchIcon from "@mui/icons-material/Search";
import { useLogHistroyQuery } from "../generated/graphql";

import {
  Box,
  Card,
  CardContent,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { DateRangePicker } from "rsuite";

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
        <TableContainer component={Paper} className="dark:bg-[#1A2D26]">
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#F0F2F5",
                  height: "5px",
                  border: "1px solid #E8ECF0",
                }}
                className="dark:bg-[#203d32] dark:border-none"
              >
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: 14,
                    py: 1,
                    color: "#52667A",
                    whiteSpace: "nowrap",
                  }}
                  className="dark:text-[#E8EAE9] dark:border-none"
                >
                  Employee
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    py: 1,
                    color: "#52667A",
                  }}
                  className="dark:text-[#E8EAE9] dark:border-none"
                >
                  Reason
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    py: 1,

                    color: "#52667A",
                  }}
                  className="dark:text-[#E8EAE9] dark:border-none"
                >
                  Clock In
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    py: 1,
                    color: "#52667A",
                  }}
                  className="dark:text-[#E8EAE9] dark:border-none"
                >
                  Clock Out
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    fontSize: 14,
                    py: 1,
                    color: "#52667A",
                  }}
                  className="dark:text-[#E8EAE9] dark:border-none"
                >
                  Action By
                </TableCell>
                <TableCell
                  align="center"
                  className="dark:border-none"
                ></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row: LogRecord) => {
                return (
                  <TableRow key={row.id} hover>
                    {/* Employee */}
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: 14,
                        whiteSpace: "nowrap",
                      }}
                      className="dark:text-[#E8EAE9] dark:border-[#263b34]"
                    >
                      {row.employeeName}
                    </TableCell>

                    <TableCell
                      sx={{
                        maxWidth: 300,
                        overflow: "hidden",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                      className="dark:text-[#E8EAE9] dark:border-[#263b34]"
                    >
                      {row.reason}
                    </TableCell>

                    {/* Clock In */}
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#29333D",
                      }}
                      className="dark:text-[#E8EAE9] dark:border-[#263b34]"
                    >
                      {row.oldClockIn ? (
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#A4A4A4",
                            marginRight: 6,
                          }}
                        >
                          {row.oldClockIn}
                        </span>
                      ) : null}
                      {row.clockIn}
                    </TableCell>

                    {/* Clock Out */}
                    <TableCell
                      sx={{
                        whiteSpace: "nowrap",
                        color: "#29333D",
                      }}
                      className="dark:text-[#E8EAE9] dark:border-[#263b34]"
                    >
                      {row.oldClockOut ? (
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#A4A4A4",
                            marginRight: 6,
                          }}
                        >
                          {row.oldClockOut}
                        </span>
                      ) : null}
                      {row.clockOut}
                    </TableCell>

                    {/* Action By */}
                    <TableCell className="dark:border-[#263b34]">
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 500 }}
                        className="dark:text-[#E7E9E8]"
                      >
                        {row.actionBy}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#6b7280",
                          display: "block",
                          whiteSpace: "nowrap",
                        }}
                        className="dark:text-[#707274]"
                      >
                        {row.actionDate}
                      </Typography>
                    </TableCell>

                    {/* Status with Chip */}
                    <TableCell
                      align="center"
                      className="dark:border-[#263b34]"
                    ></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
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
