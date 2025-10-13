import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
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
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GeneratedPasswordModal from "../../components/GeneratePasswordModal";
import ResetAccountModal from "../../components/ResetAccountModal";
import EditInternModal from "../../components/EditInternModal";
import { useGetUsersQuery } from "../../generated/graphql";
import { getRoles, getStatuses } from "../../services/mockData";

import AddInternModal from "../../components/AddInternModal";

export default function Users() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [RoleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  //const [rows, setRows] = useState<any>(() => () => {});
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

  const [showResetModal, setShowResetModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  type User = {
    staffId: string;
    id: string;
    employeeId: string;
    employeeName: string;
    email: string;
    //role: string;
    userRoles: { role: { name: string } }[];
    status: string;
    employmentType: string;
    department: string;
  };

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingIntern, setEditingIntern] = useState<User | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(row.id);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const handleResetClick = (user: any) => {
    setSelectedUser(user);
    setShowResetModal(true);
  };

  const handleConfirmReset = () => {
    const newPass = "HDKEBURJ484";
    setGeneratedPassword(newPass);
    setShowResetModal(false);
    setShowPasswordModal(true);
  };

  const { data: userData, loading, error } = useGetUsersQuery();

  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    if (userData?.users) {
      const UserInfo = userData.users.map((user) => ({
        ...user,
        role:
          user.userRoles?.map((r) => r.role.name).join(", ") || "Unassigned",
      }));
      setRows(UserInfo);
      console.log("User Info:", UserInfo);
    }
  }, [userData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredRows = rows.filter(
    (row: {
      employeeName: string;
      staffId: string;
      employeeType: string;
      status: string;
    }) =>
      (row.employeeName || row.staffId) &&
      (RoleFilter === "All" || row.employeeType === RoleFilter) &&
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
    setRows((prev: any) => [...prev, newIntern]);
  };

  const handleEditIntern = (intern: {
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
    setRows((prev: any) => [...prev, newIntern]);
  };

  const handleEditSubmit = (updatedIntern: any) => {
    setRows((prev: any[]) =>
      prev.map((row) =>
        row.id === editingIntern?.id
          ? {
              ...row,
              employeeId: updatedIntern.employeeId,
              employeeName: updatedIntern.employeeName,
              email: updatedIntern.email,
            }
          : row
      )
    );
    setShowEditModal(false);
  };

  return (
    <div className="px-6  min-h-screen">
      {/* Header with Back + Add Intern */}
      <Box className="flex items-center justify-between mb-4">
        <Box>
          <Button
            startIcon={
              <ArrowBackIosIcon style={{ fontSize: "14px", marginLeft: 3 }} />
            }
            onClick={() => navigate("/app/settings")}
            sx={{
              textTransform: "none",
              color: "#004E2B",
              fontSize: "0.875rem",
              p: 0,

              "&:hover": { backgroundColor: "transparent", color: "#111827" },
            }}
            className="dark:text-[#E8EAE9]"
          >
            Back to Settings
          </Button>
          <Typography
            variant="h6"
            fontWeight="bold"
            marginLeft={2.6}
            className="dark:text-[#E8EAE9]"
          >
            Users
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            borderRadius: "5px",
            textTransform: "none",
            backgroundColor: "#004E2B",
            px: 3,
            "&:hover": { backgroundColor: "#008d4dff" },
          }}
          onClick={() => setOpen(true)}
        >
          Add Intern
        </Button>
      </Box>

      {/* All Users Card */}
      <Card
        elevation={0}
        sx={{ border: "1px solid #e5e7eb" }}
        className="dark:bg-[#1A2D26] dark:border-[#253F35]"
      >
        <CardContent>
          {/* Header Row: All Users + Search/Filters */}
          <Box className="flex items-center justify-between mb-6">
            {/* Left: Title */}
            <Typography
              variant="h5"
              fontWeight="semi-bold"
              className="dark:text-[#E8EAE9]"
            >
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
                      <SearchIcon className="text-gray-400 dark:text-white" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  minWidth: 200,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
                className="[&_.MuiOutlinedInput-root]:bg-white [&_.MuiOutlinedInput-root]:dark:bg-[#1A2D26]
             [&_.MuiOutlinedInput-input]:text-gray-900 [&_.MuiOutlinedInput-input]:dark:text-white
             [&_.MuiOutlinedInput-notchedOutline]:border-gray-300 [&_.MuiOutlinedInput-notchedOutline]:dark:border-[#204335]"
              />

              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel className="dark:text-[#E8EAE9]">Roles</InputLabel>
                <Select
                  value={RoleFilter}
                  label="Roles"
                  onChange={(e) => setRoleFilter(e.target.value)}
                  startAdornment={
                    <FilterListIcon className="text-gray-400 mr-2 dark:text-[#E8EAE9]" />
                  }
                  className="dark:text-[#E8EAE9]"
                >
                  {getRoles().map((dept) => (
                    <MenuItem key={dept} value={dept}>
                      {dept}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel className="dark:text-[#E8EAE9]">Status</InputLabel>
                <Select
                  value={statusFilter}
                  label="Status"
                  onChange={(e) => setStatusFilter(e.target.value)}
                  startAdornment={
                    <FilterListIcon className="text-gray-400 mr-2 dark:text-[#E8EAE9]" />
                  }
                  className="dark:text-[#E8EAE9]"
                  MenuProps={{
                    sx: {
                      "& .dark & .MuiMenu-paper": {
                        backgroundColor: "#1A2D26",
                        color: "white",
                        "& .MuiMenuItem-root": {
                          "&:hover, &.Mui-selected": {
                            backgroundColor: "red",
                          },
                        },
                      },
                    },
                  }}
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
          <TableContainer
            component={Paper}
            elevation={0}
            className="dark:bg-[#1A2D26]"
          >
            <Table>
              <TableHead>
                <TableRow
                  className="dark:text-[#E8EAE9] dark:border-[#253F35] dark:bg-[#243e35]"
                  sx={{
                    backgroundColor: "#F0F2F5",

                    "& > *": {
                      py: 1.5,
                      lineHeight: "1rem",
                    },
                  }}
                >
                  <TableCell
                    className="dark:border-[#253F35] dark:text-[#E8EAE9]"
                    sx={{ fontWeight: 600, lineHeight: "1rem", py: 1.5 }}
                  >
                    Employee ID
                  </TableCell>
                  <TableCell
                    className="dark:text-[#E8EAE9] dark:border-[#253F35]"
                    sx={{ fontWeight: 600, lineHeight: "1rem", py: 1.5 }}
                  >
                    Employee
                  </TableCell>
                  <TableCell
                    className="dark:text-[#E8EAE9] dark:border-[#253F35]"
                    sx={{ fontWeight: 600, lineHeight: "1rem", py: 1.5 }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    className="dark:text-[#E8EAE9] dark:border-[#253F35]"
                    sx={{ fontWeight: 600, lineHeight: "1rem", py: 1.5 }}
                  >
                    Role
                  </TableCell>
                  <TableCell
                    className="dark:text-[#E8EAE9] dark:border-[#253F35]"
                    sx={{ fontWeight: 600, lineHeight: "1rem", py: 1.5 }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    className="dark:text-[#E8EAE9] dark:border-[#253F35]"
                    sx={{ fontWeight: 600, lineHeight: "1rem", py: 1.5 }}
                  >
                    Employment Type
                  </TableCell>
                  <TableCell align="right" className="dark:border-[#253F35]">
                    {/* Actions column header, no menu in TableHead */}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id} hover className="dark:bg-[][#1A2D26]">
                    <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                      {row.employeeId}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 500 }}
                      className="dark:text-[#E8EAE9] dark:border-[#253F35]"
                    >
                      {row.employeeName}
                    </TableCell>
                    <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                      {row.email}
                    </TableCell>
                    <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                      {row.role}
                    </TableCell>
                    <TableCell className="dark:border-[#253F35]">
=======
                {filteredRows.map((row: User) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.staffId}</TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      {row.employeeName}
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    {/* <TableCell>{row.role}</TableCell> */}
                    <TableCell>
                      {row.userRoles && Array.isArray(row.userRoles)
                        ? row.userRoles.map((r: any) => r.role.name).join(", ")
                        : ""}
                    </TableCell>
                    <TableCell>
                      {row.userRoles && Array.isArray(row.userRoles)
                        ? row.userRoles.map((r: any) => r.role.name).join(", ")
                        : ""}
                    </TableCell>
                    <TableCell>
                      {row.userRoles && Array.isArray(row.userRoles)
                        ? row.userRoles.map((r: any) => r.role.name).join(", ")
                        : ""}
                    </TableCell>
                    <TableCell>
                      {row.userRoles && Array.isArray(row.userRoles)
                        ? row.userRoles.map((r: any) => r.role.name).join(", ")
                        : ""}
                    </TableCell>
                    <TableCell>
>>>>>>> Stashed changes
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
                    <TableCell className="dark:text-[#E8EAE9] dark:border-[#253F35]">
                      {row.employmentType}
                    </TableCell>
                    <TableCell align="right" className="dark:border-[#253F35]">
                      <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                        <MoreVertIcon className="dark:text-[#E8EAE9]" />
                      </IconButton>

                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl) && selectedRowId === row.id}
                        onClose={handleMenuClose}
                        PaperProps={{
                          elevation: 3,
                          sx: {
                            borderRadius: "10px",
                            p: 1,
                            minWidth: 180,
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                          },
                        }}
                        MenuListProps={{
                          disablePadding: true,
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            setSelectedUser(row);
                            setGeneratedPassword("AUTO-GEN123");
                            setShowPasswordModal(true);
                            handleMenuClose();
                          }}
                          sx={{
                            borderRadius: "6px",
                            py: 1,
                            fontSize: "0.875rem",
                            "&:hover": { backgroundColor: "#eff1f4ff" },
                          }}
                        >
                          Generate Password
                        </MenuItem>

                        <Divider sx={{ my: 0.5 }} />

                        {/* Reset Account */}
                        <MenuItem
                          onClick={() => {
                            handleResetClick(row);
                            handleMenuClose();
                          }}
                          sx={{
                            borderRadius: "6px",
                            py: 1,
                            fontSize: "0.875rem",
                            "&:hover": { backgroundColor: "#eff1f4ff" },
                          }}
                        >
                          Reset Account
                        </MenuItem>

                        {row.employmentType === "Intern" && (
                          <>
                            <Divider sx={{ my: 0.5 }} />
                            <MenuItem
                              onClick={() => {
                                setEditingIntern(row);
                                setShowEditModal(true);
                                handleMenuClose();
                              }}
                              sx={{
                                borderRadius: "6px",
                                py: 1,
                                fontSize: "0.875rem",
                                "&:hover": { backgroundColor: "#eff1f4ff" },
                              }}
                            >
                              Edit
                            </MenuItem>
                          </>
                        )}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {filteredRows.length === 0 && (
            <Box className="text-center py-8 dark:bg-gray-900">
              <Typography
                variant="body1"
                color="textSecondary"
                className="dark:text-white"
              >
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

      <ResetAccountModal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        onConfirm={handleConfirmReset}
        user={
          selectedUser
            ? {
                name: selectedUser.employeeName,
                employeeId: selectedUser.employeeId,
              }
            : undefined
        }
      />

      <GeneratedPasswordModal
        open={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        password={generatedPassword}
        employeeId={selectedUser?.employeeId || ""}
      />

      <EditInternModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        onAdd={handleEditSubmit}
      />
    </div>
  );
}
