import SearchIcon from "@mui/icons-material/Search";
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
import { logHistory, type LogRecord } from "../Mockdata/LogHistoryData";
export default function LogHistory() {
  const [query, setQuery] = useState("");
  const rows = useMemo(() => {
    let filtered = logHistory;
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (r: LogRecord) =>
          r.employeeName.toLowerCase().includes(q) ||
          r.reason.toLowerCase().includes(q) ||
          r.clockIn.toLowerCase().includes(q) ||
          r.clockOut.toLowerCase().includes(q) ||
          r.actionBy.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [query]);
  return (
    <Card className="mb-6" elevation={1}>
      <CardContent>
        <Box className="flex items-center justify-between mb-6">
          <Typography variant="h6" component="h6" className="font-bold">
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
                    <SearchIcon sx={{ color: "#52667A", fontSize: 20 }} />
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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#F0F2F5",
                  height: "5px",
                  border: "1px solid #E8ECF0",
                }}
              >
                <TableCell
                  sx={{
                    fontWeight: 600,
                    fontSize: 14,
                    py: 1,
                    color: "#52667A",
                    whiteSpace: "nowrap",
                  }}
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
                >
                  Action By
                </TableCell>
                <TableCell align="center"></TableCell>
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
                    >
                      {row.reason}
                    </TableCell>

                    {/* Clock In */}
                    <TableCell>
                      {row.clockIn === "N/A" ? (
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#9ca3af",
                            whiteSpace: "nowrap",
                          }}
                        >
                          N/A
                        </span>
                      ) : (
                        row.clockIn
                      )}
                    </TableCell>

                    {/* Clock Out */}
                    <TableCell>
                      {row.clockOut === "N/A" ? (
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#9ca3af",
                            whiteSpace: "nowrap",
                          }}
                        >
                          N/A
                        </span>
                      ) : (
                        row.clockOut
                      )}
                    </TableCell>

                    {/* Action By */}
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {row.actionBy}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#6b7280",
                          display: "block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {row.actionDate}
                      </Typography>
                    </TableCell>

                    {/* Status with Chip */}
                    <TableCell align="center"></TableCell>
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
