import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

import {
  getDepartments,
  getStatuses,
  logHistory,
} from "../../services/mockData";

import AddInternModal from "../../components/AddInternModal"; // modal component



export default function Users() {
  const navigate = useNavigate();

  const [query, setQuery] = React.useState("");
  const [departmentFilter, setDepartmentFilter] = React.useState("All");
  const [statusFilter, setStatusFilter] = React.useState("All");

  const [rows, setRows] = React.useState(logHistory);
  const [open, setOpen] = React.useState(false);

  // Filtering logic
  const filteredRows = rows.filter(
    (row) =>
      (row.employeeName.toLowerCase().includes(query.toLowerCase()) ||
        row.employeeId.toLowerCase().includes(query.toLowerCase())) &&
      (departmentFilter === "All" || row.department === departmentFilter) &&
      (statusFilter === "All" || row.status === statusFilter)
  );

  // Status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return { bgcolor: "#ecfdf5", color: "#16a34a" };
      case "Inactive":
        return { bgcolor: "#fef2f2", color: "#dc2626" };
      case "On Leave":
        return { bgcolor: "#fefce8", color: "#d97706" };
      default:
        return {};
    }
  };

  // Add Intern handler
  const handleAddIntern = (intern: {
    employeeId: string;
    employeeName: string;
    email: string;
  }) => {
    const newIntern = {
      id: Date.now().toString(),
      employeeId: intern.employeeId,
      employeeName: intern.employeeName,
      email: intern.email,
      role: "Intern",
      status: "Active",
      employmentType: "Intern",
      department: "General",
    };
    setRows((prev) => [...prev, newIntern]);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header with Back + Add Intern */}
      <Box className="flex items-center justify-between mb-6">
        <Box>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/app/settings")}
            sx={{
              textTransform: "none",
              color: "#4b5563",
              fontSize: "0.875rem",
              p: 0,
              mb: 1,
              "&:hover": { backgroundColor: "transparent", color: "#111827" },
            }}
          >
            Back to Settings
          </Button>
          <Typography variant="h6" fontWeight="bold">
            Users
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            backgroundColor: "#004E2B",
            "&:hover": { backgroundColor: "#008d4dff" },
          }}
          onClick={() => setOpen(true)}
        >
          Add Intern
        </Button>
      </Box>

      {/* All Users Card */}
      <Card elevation={0} sx={{ border: "1px solid #e5e7eb" }}>
        <CardContent>
          {/* Header Row: All Users + Search/Filters */}
          <Box className="flex items-center justify-between mb-6">
            {/* Left: Title */}
            <Typography variant="h5" fontWeight="semi-bold">
              All Users
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
                  {getDepartments().map((dept) => (
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
                  {getStatuses().map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Users Table */}
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                  <TableCell sx={{ fontWeight: 600 }}>Employee ID</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Employee</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>
                    Employment Type
                  </TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.employeeId}</TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      {row.employeeName}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        size="small"
                        sx={{
                          ...getStatusColor(row.status),
                          fontWeight: 500,
                          fontSize: "0.75rem",
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.employmentType}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {filteredRows.length === 0 && (
            <Box className="text-center py-8">
              <Typography variant="body1" color="textSecondary">
                No records found matching your search criteria.
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>

      {/* Add Intern Modal */}
      <AddInternModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={handleAddIntern}
      />
    </div>
  );
}
