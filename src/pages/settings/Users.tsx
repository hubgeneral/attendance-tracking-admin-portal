import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GeneratedPasswordModal from "../../components/GeneratePasswordModal";
import ResetAccountModal from "../../components/ResetAccountModal";
import EditInternModal from "../../components/EditInternModal";
import AddInternModal from "../../components/AddInternModal";
import { getRoles, getStatuses } from "../../services/mockData";
import { useGetUsersLazyQuery } from "../../generated/graphql";
import { useGetUsersQuery } from "../../generated/graphql";
import { getLeaveStatusToday } from "../../../helpers";
import TableComponent from "../../components/Tables";

export default function Users() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [RoleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

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
    userRoles: { role: { name: string } }[];
    status: string;
    employeeType: string;
    department: string;
  };

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingIntern, setEditingIntern] = useState<User | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowId(row.id);
    setSelectedUser(row);
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

  const [fetchUsers, { data, loading, error }] = useGetUsersLazyQuery();
  const usersData = data?.users || [];
  const handleSearch = () => {
    if (search.trim() !== "") {
      fetchUsers({ variables: { search } });
    } else {
      fetchUsers({ variables: { search: "" } });
    }
  };

  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    if (search.trim() === "") {
      fetchUsers({ variables: { search: "" } });
    }
  }, [search]);

  useEffect(() => {
    const dataToUse = data?.users || [];

    if (dataToUse) {
      const UserInfo = dataToUse.map((user) => ({
        ...user,
        role:
          user.userRoles?.map((r) => r.role.name).join(", ") || "Unassigned",
      }));

      setRows(UserInfo);
      console.log("User Info:", UserInfo);
    }
  }, [data]);

  // const getStatusColor = (status: string) => {
  //   switch (status) {
  //     case "Active":
  //       return { bgcolor: "#ecfdf5", color: "#16a34a" };
  //     case "Inactive":
  //       return { bgcolor: "#fef2f2", color: "#dc2626" };
  //     case "On Leave":
  //       return { bgcolor: "#fefce8", color: "#d97706" };
  //     default:
  //       return {};
  //   }
  // };

  const getStatusColor = (approvalStatus: string) => {
    switch (approvalStatus) {
      case "Present":
        return { bgcolor: "#ecfdf5", color: "#16a34a" };
      case "On Leave":
        return { bgcolor: "#fefce8", color: "#d97706" };
      default:
        return {};
    }
  };

  const handleAddIntern = (Internship: {
    employeeId: string;
    employeeName: string;
    email: string;
  }) => {
    const newIntern = {
      id: Date.now().toString(),
      employeeId: Internship.employeeId,
      employeeName: Internship.employeeName,
      email: Internship.email,
      role: "Intern",
      status: "Active",
      employeeType: "Internship",
      department: "General",
    };
    setRows((prev: any) => [...prev, newIntern]);
  };

  const columns = [
    {
      field: "staffId",
      headerName: "Employee ID",
      valueGetter: (row: any) => row.staffId,
    },
    {
      field: "employeeName",
      headerName: "Employee",
      valueGetter: (row: any) => row.employeeName,
    },
    {
      field: "email",
      headerName: "Email",
      valueGetter: (row: any) => row.email,
    },
    {
      field: "role",
      headerName: "Role",
      valueGetter: (row: any) =>
        row.userRoles && Array.isArray(row.userRoles)
          ? row.userRoles.map((r: any) => r.role.name).join(", ")
          : "",
    },
    {
      field: "status",
      headerName: "Status",
      valueGetter: (row: any) => (
        <Chip
          label={
            (getLeaveStatusToday(rows) ?? []).some(
              (leave: any) =>
                leave?.employeeId === row.staffId ||
                leave?.staffId === row.staffId ||
                leave?.employeeId === row.employeeId ||
                leave?.staffId === row.employeeId
            )
              ? "On Leave"
              : "Present"
          }
          size="small"
          sx={{
            ...getStatusColor(
              (getLeaveStatusToday(rows) ?? []).some(
                (leave: any) =>
                  leave?.employeeId === row.staffId ||
                  leave?.staffId === row.staffId ||
                  leave?.employeeId === row.employeeId ||
                  leave?.staffId === row.employeeId
              )
                ? "On Leave"
                : "Present"
            ),
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        />
      ),
    },
    {
      field: "employeeType",
      headerName: "Employment Type",
      valueGetter: (row: any) => row.employeeType,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (row: any) => (
        <IconButton onClick={(e) => handleMenuOpen(e, row)}>
          <MoreVertIcon className="dark:text-[#E8EAE9]" />
        </IconButton>
      ),
    },
  ];

  const handleEditIntern = (Internship: {
    employeeId: string;
    employeeName: string;
    email: string;
  }) => {
    const newIntern = {
      id: Date.now().toString(),
      employeeId: Internship.employeeId,
      employeeName: Internship.employeeName,
      email: Internship.email,
      role: "Intern",
      status: "Active",
      employeeType: "Internship",
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
    <div className="px-6 ">
      {/* Header with Back + Add Intern */}
      <Box className="flex items-center justify-between mb-4 flex-shrink-0">
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

        {/* <Button
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
        </Button> */}
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
            <Typography
              variant="h5"
              fontWeight="semi-bold"
              className="dark:text-[#E8EAE9]"
            >
              All Users
            </Typography>

            <Box className="flex items-center gap-3" sx={{ maxWidth: 600 }}>
              <TextField
                placeholder="Search employee name or id ..."
                variant="outlined"
                size="small"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon
                        className="text-gray-400 dark:text-white"
                        style={{ cursor: "pointer" }}
                        onClick={handleSearch}
                      />
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
          <div>
            {loading ? (
              <Box className="flex justify-center items-center h-full">
                <CircularProgress size={24} />
                <span className="ms-2">Loading..</span>
              </Box>
            ) : usersData && usersData.length > 0 ? (
              <TableComponent columns={columns} data={usersData} />
            ) : error ? (
              <p className="text-center">Error loading History</p>
            ) : (
              <p className="text-center">No users found</p>
            )}
          </div>

          {rows.length === 0 && (
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
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
          setSelectedUser(null);
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            borderRadius: "10px",
            p: 1,
            minWidth: 180,
            backgroundColor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            setGeneratedPassword("AUTO-GEN123");
            setShowPasswordModal(true);
            setAnchorEl(null);
          }}
        >
          Generate Password
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            handleResetClick(selectedUser);
            setAnchorEl(null);
          }}
        >
          Reset Account
        </MenuItem>

        {selectedUser?.employeeType === "Internship" && (
          <>
            <Divider />
            <MenuItem
              onClick={() => {
                setEditingIntern(selectedUser);
                setShowEditModal(true);
                setAnchorEl(null);
              }}
            >
              Edit
            </MenuItem>
          </>
        )}
      </Menu>

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
