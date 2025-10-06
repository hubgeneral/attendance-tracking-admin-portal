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
      <IconButton onClick={handleClick} size="large" sx={{ ml: 2, mr: 0.5 }}>
        <AccountCircleOutlined fontSize="inherit" />
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
        }}
      >
        {/* ============ Profile Info Section =========== */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
          <Avatar sx={{ bgcolor: "teal", width: 56, height: 56, mb: 1 }}>
            EO
          </Avatar>
          <Typography variant="subtitle1" fontWeight="bold">
            Eric Joel Odoi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ericodoi@heidelbergcement.com
          </Typography>
        </Box>

        <Divider />

        {/* ============ Logout Row =========== */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            {/* <Logout fontSize="small" sx={{ color: "#00274D" }} /> */}
            <Logout fontSize="small" color="error" />
          </ListItemIcon>
          <Typography sx={{ color: "#00274D", fontWeight: 500 }}>Log out</Typography>
          {/* <Typography color="error">Log out</Typography> */}
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
