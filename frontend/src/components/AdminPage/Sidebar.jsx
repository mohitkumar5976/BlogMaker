import { Divider, Paper, Stack } from "@mui/material";
import React from "react";
import TopSection from "./Sidebar/TopSection";
import SidebarNavList from "./Sidebar/SidebarNavList";

const Sidebar = () => {
  return (
    <Paper sx={{ padding: 1 }}>
      <Stack>
        <TopSection />
        <Divider />
        <SidebarNavList />
      </Stack>
    </Paper>
  );
};

export default Sidebar;
