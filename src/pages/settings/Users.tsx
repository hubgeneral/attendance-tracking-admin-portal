import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { logHistory, getRoles, getStatuses } from "../../services/mockData";
import AddInternModal from "../../components/AddInternModal";

export default function Users() {
  const navigate = useNavigate();

  const [query, setQuery] = React.useState("");
  const [roleFilter, setRoleFilter] = React.useState("All");
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [rows, setRows] = React.useState(logHistory);
  const [open, setOpen] = React.useState(false);

  // Filtering logic
  const filteredRows = rows.filter(
    (row) =>
      (row.employeeName.toLowerCase().includes(query.toLowerCase()) ||
        row.employeeId.toLowerCase().includes(query.toLowerCase())) &&
      (roleFilter === "All" || row.role === roleFilter) &&
      (statusFilter === "All" || row.status === statusFilter)
  );

  // Status colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return {
          bgcolor: "#ecfdf5",
          color: "#00AB50",
          border: "1px solid #D9F2E5",
          fontWeight: "bold",
        };
      case "Inactive":
        return {
          bgcolor: "#fef2f2",
          color: "#dc2626",
          border: "1px solid #db5959ff",
          fontWeight: "normal",
        };
      case "On Leave":
        return {
          bgcolor: "rgba(254, 252, 232, 1)",
          color: "#EE8B00",
          border: "1px solid #FCEED9",
          fontWeight: "bold",
        };
      default:
        return {
          border: "1px solid #d1d5db",
          bgcolor: "#f9fafb",
          color: "#374151",
          fontWeight: "normal",
        };
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
    <>
      {/* Title + Back */}
      <div className="flex items-center justify-between px-8 mb-6">
        <Box>
          <Button
            startIcon={<ArrowBackIosNewOutlinedIcon />}
            onClick={() => navigate("/app/settings")}
            sx={{
              textTransform: "none",
              color: "#004E2B",
              fontSize: "0.875rem",
              p: 0,
              mb: 1,
              "&:hover": { backgroundColor: "transparent", color: "#02522eff" },
            }}
          >
            Back to Settings
          </Button>
          <Typography
            variant="h4"
            sx={{ color: "#29333D", fontWeight: "bold" }}
          >
            Users
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon sx={{ fontSize: 22 }} />}
          sx={{
            borderRadius: "10px",
            textTransform: "none",
            backgroundColor: "#004E2B",
            "&:hover": { backgroundColor: "#008d4dff" },
            px: 3,
            py: 1.5,
            fontSize: "14px",
            fontWeight: 400,
          }}
          onClick={() => setOpen(true)}
        >
          Add Intern
        </Button>
      </div>

      {/* Main Card */}
      <div className="p-8 bg-gray-50 min-h-screen rounded-lg shadow-md">
        <Card elevation={0}>
          <CardContent>
            {/* Header Row */}
            <Box className="flex items-center justify-between mb-6">
              <Typography
                variant="h5"
                fontWeight="semi-bold"
                sx={{ color: "#29333D" }}
              >
                All Users
              </Typography>

              {/* Search + Filters */}
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

                {/* Role Filter */}
                <FormControl size="small" sx={{ minWidth: 150 }}>
                  <Select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    displayEmpty
                    startAdornment={<FilterListIcon className="text-gray-400 mr-2" />}
                    renderValue={(selected) =>
                      selected === "All" ? "Role - All" : selected
                    }
                  >
                    {getRoles().map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Status Filter */}
                <FormControl size="small" sx={{ minWidth: 120 }}>
                  <Select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    displayEmpty
                    startAdornment={<FilterListIcon className="text-gray-400 mr-2" />}
                    renderValue={(selected) =>
                      selected === "All" ? "Status - All" : selected
                    }
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

            {/* Table */}
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
    </>
  );
}
