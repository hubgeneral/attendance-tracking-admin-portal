import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import Logout from "@mui/icons-material/Logout";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

function ProfileMenu() {
  const [menuAnchor, setmenuAnchor] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setmenuAnchor(null);
  };

  return (
    <>
      {/* Top-right profile icon */}
      <IconButton onClick={handleClick} size="large" sx={{ ml: 2 }}>
        <AccountCircleOutlined fontSize="large" className="dark:text-white" />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 260,
            borderRadius: 2,
            mt: 1.5,
          },
          className: "dark:bg-gray-800",
        }}
      >
        {/* ============ Profile Info Section =========== */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
          className="dark:bg-gray-800"
        >
          <Avatar sx={{ bgcolor: "teal", width: 56, height: 56, mb: 1 }}>
            EO
          </Avatar>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            className="dark:text-white"
          >
            Eric Joel Odoi
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="dark:text-white"
          >
            ericodoi@heidelbergcement.com
          </Typography>
        </Box>

        <Divider />

        {/* ============ Logout Row =========== */}
        <MenuItem
          onClick={handleClose}
          className="dark:bg-gray-800 dark:hover:bg-gray-500"
        >
          <ListItemIcon>
            {/* <Logout fontSize="small" sx={{ color: "#00274D" }} /> hover*/}
            <Logout fontSize="small" color="error" />
          </ListItemIcon>
          <Typography
            sx={{ color: "#00274D", fontWeight: 500 }}
            className="dark:text-white"
          >
            Log out
          </Typography>
          {/* <Typography color="error">Log out</Typography> */}
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
