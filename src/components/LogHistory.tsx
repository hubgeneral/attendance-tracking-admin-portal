import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  logHistory,
  getDepartments,
  getStatuses,
  type AttendanceRecord,
} from "../services/mockData";
export default function LogHistory() {
  const [query, setQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const rows = useMemo(() => {
    let filtered = logHistory;
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (r: AttendanceRecord) =>
          r.employeeName.toLowerCase().includes(q) ||
          r.employeeId.toLowerCase().includes(q) ||
          r.email.toLowerCase().includes(q) ||
          r.department.toLowerCase().includes(q)
      );
    }
    if (departmentFilter !== "All") {
      filtered = filtered.filter((r) => r.department === departmentFilter);
    }
    if (statusFilter !== "All") {
      filtered = filtered.filter((r) => r.status === statusFilter);
    }
    return filtered;
  }, [query, departmentFilter, statusFilter]);
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return { backgroundColor: "#dcfce7", color: "#16a34a" };
      case "On Leave":
        return { backgroundColor: "#fef3c7", color: "#d97706" };
      default:
        return { backgroundColor: "#f3f4f6", color: "#374151" };
    }
  };
  const departments = getDepartments();
  const statuses = getStatuses();


  return (
    <Card elevation={1}>
      <CardContent>
        {/* ========= Search + Filters ========== */}
          <Box className="flex items-center justify-between mb-6">
            <Typography variant="h6" component="h6" className="font-bold">
              Logs History
            </Typography>

            {/* Right: Search + Filters */}
            <Box className="flex items-center gap-3" sx={{ maxWidth: 600 }}>
              <TextField
                placeholder="Search employee name or id ..."
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
                  minWidth: 200,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />

              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>Departments</InputLabel>
                <Select
                  value={departmentFilter}
                  label="Departments"
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  startAdornment={<FilterListIcon className="text-gray-400 mr-2" />}
                >
                  {departments.map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                  startAdornment={<FilterListIcon className="text-gray-400 mr-2" />}
                >
                  {statuses.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

        {/* Table */}
        <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #e5e7eb" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                <TableCell sx={{ fontWeight: 600 }}>Employee</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Employee ID</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                <TableCell align="center" sx={{ fontWeight: 600 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                  return (
                      <TableRow key={row.id} hover>
                          <TableCell sx={{ fontWeight: 500 }}>{row.employeeName}</TableCell>
                          <TableCell>{row.employeeId}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.department}</TableCell>
                          <TableCell>{row.role}</TableCell>
                          <TableCell align="center">
                              <Chip
                                  label={row.status}
                                  size="small"
                                  sx={{
                                      ...getStatusColor(row.status),
                                      fontWeight: 500,
                                      fontSize: "0.75rem",
                                  }} />
                          </TableCell>
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