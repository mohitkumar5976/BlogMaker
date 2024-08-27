import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
const menuItems = [
    { text: "Home", icon: <HomeIcon />, link: "/admin" },
    { text: "New Post", icon: <PostAddIcon />, link: "/admin/newpost" },
    { text: "Settings", icon: <SettingsIcon />, link: "/admin" },
    { text: "Logout", icon: <LogoutIcon />, link: "/admin/logout" },
  ];

export default function AdminMenubar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton component={Link} to={item.link}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        edge="center"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
